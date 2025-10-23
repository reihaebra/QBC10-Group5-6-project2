import Sidebar from "../components/ui/Sidebar";
import AdminDropdown from "../components/ui/AdminDropdown";
import toast from "react-hot-toast";
import {
  type User,
  getAllUsers,
  updateUserInfo,
  changeUserRole,
  deleteUser,
  type UpdateUserPayload,
  type ChangeRolePayload,
} from "../api/requests/adminUsers";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

export const UsersPage = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const userPerPage = 12;
  const [editing, setEditing] = useState<{
    index: number;
    field: "name" | "email";
  } | null>(null);
  const [editValues, setEditValues] = useState<{ name: string; email: string }>(
    {
      name: "",
      email: "",
    }
  );
  const [operationLoading, setOperationLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const nowTimeStamp = new Date().getTime();
    try {
      setLoading(true);
      const res = await getAllUsers();
      setAllUsers(res);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("خطا در دریافت لیست کاربران ⚠️");
    } finally {
      const elapsed = new Date().getTime() - nowTimeStamp;
      setTimeout(() => {
        setLoading(false);
      }, Math.max(0, 500 - elapsed));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (!allUsers || allUsers.length === 0)
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-400">
        هنوز کاربری وجود ندارد
      </div>
    );

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = allUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(allUsers.length / userPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrePage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleEditClick = (
    index: number,
    field: "name" | "email",
    value: string
  ) => {
    setEditing({ index, field });
    setEditValues({ ...editValues, [field]: value });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "name" | "email"
  ) => {
    setEditValues({ ...editValues, [field]: e.target.value });
  };

  //  UPDATE
  const handleSave = async (index: number, field: "name" | "email") => {
    if (!editing || editing.index !== index) return;

    const user = currentUser[index];
    if (!user) {
      toast.error("کاربر یافت نشد ⚠️");
      setEditing(null);
      return;
    }

    const userId = user._id; //  userId scope

    const payload: UpdateUserPayload = {
      username: field === "name" ? editValues.name : user.username,
      email: field === "email" ? editValues.email : user.email,
    };

    try {
      setOperationLoading(userId);
      await updateUserInfo(userId, payload);

      setAllUsers((prev) =>
        prev.map((u) =>
          u._id === userId
            ? {
                ...u,
                username: payload.username!, //  non-null assertion
                email: payload.email!, //  non-null assertion
              }
            : u
        )
      );

      toast.success(
        field === "name"
          ? "نام کاربر به‌روزرسانی شد ✅"
          : "ایمیل کاربر به‌روزرسانی شد ✅"
      );
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("خطا در به‌روزرسانی کاربر ⚠️");
    } finally {
      setEditing(null);
      setOperationLoading(null);
    }
  };

  const handleCancel = () => {
    setEditing(null);
  };

  //  CHANGE ROLE: isAdmin
  const handleToggleAdmin = async (userId: string, currentIsAdmin: boolean) => {
    const payload: ChangeRolePayload = { isAdmin: !currentIsAdmin };

    try {
      setOperationLoading(userId);
      await changeUserRole(userId, payload);

      setAllUsers((prev) =>
        prev.map((user) =>
          user._id === userId ? { ...user, isAdmin: !currentIsAdmin } : user
        )
      );

      toast.success(
        !currentIsAdmin
          ? "کاربر به ادمین ارتقا یافت ✅"
          : "نقش ادمین از کاربر حذف شد ✅"
      );
    } catch (error) {
      console.error("Error changing role:", error);
      toast.error("خطا در تغییر نقش کاربر ⚠️");
    } finally {
      setOperationLoading(null);
    }
  };

  //  DELETE
  const handleDelete = async (userId: string) => {
    if (!confirm("آیا مطمئن هستید که می‌خواهید این کاربر را حذف کنید؟")) return;

    try {
      setOperationLoading(userId);
      await deleteUser(userId);

      setAllUsers((prev) => prev.filter((user) => user._id !== userId));
      toast.success("کاربر با موفقیت حذف شد ✅");

      if (currentUser.length === 1 && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("خطا در حذف کاربر ⚠️");
    } finally {
      setOperationLoading(null);
    }
  };

  return (
    <>
      <Sidebar>
        <AdminDropdown />
      </Sidebar>
      <div
        className="px-14 pr-36 py-8 mx-auto w-full min-h-screen h-full font-yekan-bakh text-base 
        font-normal bg-[var(--color-background-base-light)] dark:bg-[var(--color-background-primary-dark)] 
        text-primary-text-light dark:text-[var(--color-primary-text-dark)]"
      >
        <div className="flex-col items-center justify-center">
          <table className="w-6xl rounded-xl table-fixed border-collapse">
            <thead>
              <tr className="border-b-1 border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]">
                <th scope="col" className="text-right w-2/8 m-2 font-normal">
                  ID
                </th>
                <th scope="col" className="text-right w-2/8 pr-4 font-normal">
                  نـام
                </th>
                <th scope="col" className="text-right w-2/8 pr-4 font-normal">
                  ایمیل
                </th>
                <th scope="col" className="text-center w-1/8 p-2 font-normal">
                  ادمین
                </th>
                <th scope="col" className="text-left w-1/8 pl-8 font-normal">
                  عملیات
                </th>
              </tr>
              <tr className="border-b-1 border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]"></tr>
            </thead>
            <tbody className="text-[var(primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
              {currentUser.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-[var(--color-primary-hover-dark)] transition-all duration-150"
                >
                  <td className="text-sm py-2">{user._id}</td>

                  {/* نام */}
                  <td className="px-4 py-2">
                    <div className="inline-flex items-center gap-2">
                      {editing?.index === index && editing?.field === "name" ? (
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => handleSave(index, "name")}
                            disabled={operationLoading === user._id}
                            className="flex h-9 w-9 bg-info-light rounded-lg justify-center items-center mx-auto cursor-pointer disabled:opacity-50"
                          >
                            <img
                              src="/../../public/icons/user-list-check-white.svg"
                              alt="save"
                              className="w-4 h-4"
                            />
                          </button>
                          <input
                            type="text"
                            value={editValues.name}
                            onChange={(e) => handleInputChange(e, "name")}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleSave(index, "name");
                              if (e.key === "Escape") handleCancel();
                            }}
                            className="h-9 bg-[var(--color-on-primary-light)] dark:bg-[var(--color-base-text-field-dark)] border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)] rounded-lg px-2 py-1 text-sm focus:outline-none text-[var(--color-secondary-light)] dark:text-[var(--color-secondary-dark)]"
                            autoFocus
                          />
                        </div>
                      ) : (
                        <>
                          <button
                            className="btn-xs cursor-pointer"
                            onClick={() =>
                              handleEditClick(index, "name", user.username)
                            }
                          >
                            <img
                              src="/../../public/icons/user-list-edit.svg"
                              alt="edit"
                              className="w-4 h-4 hover:opacity-70 hidden dark:block"
                            />
                            <img
                              src="/../../public/icons/user-list-edit-black.svg"
                              alt="edit"
                              className="w-4 h-4 hover:opacity-70 dark:hidden"
                            />
                          </button>
                          <span>{user.username}</span>
                        </>
                      )}
                    </div>
                  </td>

                  {/* ایمیل */}
                  <td className="px-4 py-2">
                    <div className="inline-flex items-center gap-2">
                      {editing?.index === index &&
                      editing?.field === "email" ? (
                        <div className="inline-flex items-center gap-2">
                          <button
                            onClick={() => handleSave(index, "email")}
                            disabled={operationLoading === user._id}
                            className="flex h-9 w-9 bg-info-light rounded-lg justify-center items-center mx-auto cursor-pointer disabled:opacity-50"
                          >
                            <img
                              src="/../../public/icons/user-list-check-white.svg"
                              alt="save"
                              className="w-4 h-4"
                            />
                          </button>
                          <input
                            type="text"
                            value={editValues.email}
                            onChange={(e) => handleInputChange(e, "email")}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") handleSave(index, "email");
                              if (e.key === "Escape") handleCancel();
                            }}
                            className="h-9 bg-[var(--color-on-primary-light)] dark:bg-[var(--color-base-text-field-dark)] border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)] rounded-lg px-2 py-1 text-sm focus:outline-none text-[var(--color-secondary-light)] dark:text-[var(--color-secondary-dark)]"
                            autoFocus
                          />
                        </div>
                      ) : (
                        <>
                          <button
                            className="btn-xs cursor-pointer"
                            onClick={() =>
                              handleEditClick(index, "email", user.email)
                            }
                          >
                            <img
                              src="/../../public/icons/user-list-edit.svg"
                              alt="edit"
                              className="w-4 h-4 hover:opacity-70 hidden dark:block"
                            />
                            <img
                              src="/../../public/icons/user-list-edit-black.svg"
                              alt="edit"
                              className="w-4 h-4 hover:opacity-70 dark:hidden"
                            />
                          </button>
                          <span>{user.email}</span>
                        </>
                      )}
                    </div>
                  </td>

                  {/* ✅ ادمین - با changeUserRole API */}
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleToggleAdmin(user._id, user.isAdmin)}
                      disabled={operationLoading === user._id}
                      className="mx-auto cursor-pointer disabled:opacity-50"
                    >
                      <img
                        src={
                          user.isAdmin
                            ? "/../../public/icons/user-list-check.svg"
                            : "/../../public/icons/user-list-close.svg"
                        }
                        alt="admin"
                        className="w-5 h-5"
                      />
                    </button>
                  </td>

                  {/* Delete */}
                  <td className="px-8 py-2 justify-items-end pl">
                    <button
                      onClick={() => handleDelete(user._id)}
                      disabled={operationLoading === user._id}
                      className="flex h-9 w-9 bg-error-light rounded-lg justify-center items-center cursor-pointer disabled:opacity-50"
                    >
                      <img
                        className="w-6 h-6"
                        src="/../../public/icons/user-list-delete_forever.svg"
                        alt="delete"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center mt-10 gap-5">
            <button
              onClick={handlePrePage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md cursor-pointer ${
                currentPage === 1
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              قبلی
            </button>
            <span className="text-gray-300">
              صفحه {currentPage} از {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md cursor-pointer ${
                currentPage === totalPages
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              بعدی
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
