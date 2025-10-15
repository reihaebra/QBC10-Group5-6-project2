import { useState } from "react";
import { admins } from "../../constants/usersSampleList";
import type { Admin } from "../../constants/usersSampleList";
import type { EditingState } from "../../constants/usersSampleList";

export const UsersPage = () => {
  const [editing, setEditing] = useState<EditingState | null>(null);
  const [editValues, setEditValues] = useState<{ name: string; email: string }>(
    {
      name: "",
      email: "",
    }
  );

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

  const handleSave = (index: number, field: "name" | "email") => {
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
  };

  return (
    <div className="p-6 w-full h-screen font-yekan-bakh text-base font-normal bg-[var(--color-background-base-light)] dark:bg-[var(--color-background-primary-dark)] text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
      <div className="overflow-x-auto">
        <table className="w-full rounded-xl table-fixed border-collapse">
          <thead>
            <tr className="border-b-1 border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]">
              <th scope="col" className=" text-right w-2/8  m-2 font-normal">
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
            {admins.map((admin: Admin, index: number) => (
              <tr
                key={index}
                className="hover:bg-[var(--color-primary-hover-dark)] transition-all duration-150"
              >
                <td className="text-sm py-2">{admin.id}</td>

                <td className="px-4 py-2">
                  <div className="inline-flex items-center gap-2">
                    {editing?.index === index && editing?.field === "name" ? (
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleSave(index, "name")}
                          className="flex h-9 w-9 bg-info-light rounded-lg justify-center items-center mx-auto cursor-pointer"
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
                            handleEditClick(index, "name", admin.name)
                          }
                        >
                          <img
                            src="/../../public/icons/user-list-edit.svg"
                            alt="edit"
                            className="w-4 h-4  hover:opacity-70 hidden dark:block"
                          />
                          <img
                            src="/../../public/icons/user-list-edit-black.svg"
                            alt="edit"
                            className="w-4 h-4  hover:opacity-70 dark:hidden"
                          />
                        </button>
                        <span>{admin.name}</span>
                      </>
                    )}
                  </div>
                </td>

                <td className="px-4 py-2">
                  <div className="inline-flex items-center gap-2">
                    {editing?.index === index && editing?.field === "email" ? (
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleSave(index, "email")}
                          className="flex h-9 w-9 bg-info-light rounded-lg justify-center items-center mx-auto cursor-pointer"
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
                            handleEditClick(index, "email", admin.email)
                          }
                        >
                          <img
                            src="/../../public/icons/user-list-edit.svg"
                            alt="edit"
                            className="w-4 h-4  hover:opacity-70 hidden dark:block"
                          />
                          <img
                            src="/../../public/icons/user-list-edit-black.svg"
                            alt="edit"
                            className="w-4 h-4  hover:opacity-70 dark:hidden"
                          />
                        </button>
                        <span>{admin.email}</span>
                      </>
                    )}
                  </div>
                </td>

                <td className="px-4 py-2">
                  <img
                    src={
                      admin.isAdmin
                        ? "/../../public/icons/user-list-check.svg"
                        : "/../../public/icons/user-list-close.svg"
                    }
                    alt="admin"
                    className="w-5 h-5 mx-auto"
                  />
                </td>

                <td className="px-8 py-2 justify-items-end pl">
                  <button className="flex h-9 w-9 bg-error-light rounded-lg justify-center items-center cursor-pointer">
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
      </div>
    </div>
  );
};

export default UsersPage;
