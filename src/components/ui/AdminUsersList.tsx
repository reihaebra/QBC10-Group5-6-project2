import React from "react";
import { useState } from "react";

export const AdminUsersList = () => {
  // Sample Data
  const admins = [
    {
      id: "1238912389123789128379",
      name: "Ali Mousavi",
      email: "Ali.mousavi@gmail.com",
      isAdmin: true,
    },
    {
      id: "1238912389123789128379",
      name: "مهدی حسینی",
      email: "mahdihoseini@gmail.com",
      isAdmin: true,
    },
    {
      id: "1238912389123789128379",
      name: "شاهرخ",
      email: "Example@gmail.com",
      isAdmin: true,
    },
  ];

  return (
    <div
      dir="rtl"
      className="p-6 w-full font-yekan-bakh text-base text-primary-text-light dark:text-primary-text-dark"
    >
      <h2 className="text-lg font-semibold mb-4 text-white">
        لیست ادمین های ســـامانه
      </h2>

      {/* Admins Table */}
      <div className="overflow-x-auto">
        <table className="table w-full   rounded-xl table-fixed">
          <thead className=" text-white">
            <tr>
              <th scope="col" className="text-right">
                ID
              </th>
              <th scope="col" className="text-right">
                نام
              </th>
              <th scope="col" className=" text-right">
                ایمیل
              </th>
              <th scope="col" className=" text-center">
                ادمین
              </th>
              <th scope="col" className=" text-center">
                عملیات
              </th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin, index) => (
              <tr
                key={index}
                className="hover:bg-primary-hover-dark transition-all duration-150"
              >
                {/* ID */}
                <td className="text-sm text-white px-4 py-2">{admin.id}</td>

                {/* Name by icon */}
                <td className="text-white px-4 py-2">
                  <div className="inline-flex items-center gap-2">
                    <button className="btn-xs cursor-pointer">
                      <img
                        src="/src/assets/icons/user-list-edit.svg"
                        alt="edit"
                        className="w-4 h-4 opacity-70 hover:opacity-100"
                      />
                    </button>
                    <span>{admin.name}</span>
                  </div>
                </td>

                {/* Email */}
                <td className="text-white px-4 py-2">
                  <div className="inline-flex items-center gap-2">
                    <button className="btn-xs cursor-pointer">
                      <img
                        src="/src/assets/icons/user-list-edit.svg"
                        alt="edit"
                        className="w-4 h-4 opacity-70 hover:opacity-100"
                      />
                    </button>
                    <span>{admin.email}</span>
                  </div>
                </td>

                {/* Checked img */}
                <td className="px-4 py-2">
                  <img
                    src="/src/assets/icons/user-list-check.svg"
                    alt="admin"
                    className="w-5 h-5 mx-auto"
                  />
                </td>

                {/* Operation */}
                <td className="px-4 py-2">
                  <button className="flex h-9 w-9 bg-[#B71D18] text-white rounded-lg justify-center items-center mx-auto cursor-pointer">
                    <img
                      className="w-6 h-6"
                      src="/src/assets/icons/user-list-delete_forever.svg"
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

export default AdminUsersList;
