import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import FormInput from "../components/FormInput";
import Sidebar from "../components/ui/Sidebar";

import { registerUser } from "../api/requests/auth";
import axios from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Env diagnostics
    try {
      console.log("Current baseURL:", axios?.defaults?.baseURL);
      console.log("Frontend origin:", window.location.origin);
    } catch {}

    // Simple validations before API call
    if (!username.trim()) return toast.error("نام و نام خانوادگی الزامی است");
    if (!email.trim()) return toast.error("ایمیل الزامی است");
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email))
      return toast.error("ایمیل وارد شده معتبر نیست");
    if (!password) return toast.error("رمز عبور الزامی است");
    if (!passwordRepeat) return toast.error("تکرار رمز عبور الزامی است");
    if (password.length < 6)
      return toast.error("رمز عبور باید حداقل ۶ کاراکتر باشد");
    if (password !== passwordRepeat)
      return toast.error("رمزها با هم مطابقت ندارند");

    try {
      setLoading(true);
      const res = await registerUser({
        username,
        email,
        password,
        confirm_Password: passwordRepeat,
      } as any);

      // Success diagnostics
      console.log("register status:", res?.status);
      console.log("register keys:", Object.keys(res?.data ?? {}));

      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token);
      }
      if (res?.data && res.data._id) {
        toast.success("ثبت‌نام با موفقیت انجام شد");
        navigate("/login");
        return;
      }
      toast.error("ثبت نام ناموفق بود. لطفا مجددا تلاش کنید");
    } catch (error: any) {
      console.log(
        "register error:",
        error?.response?.status,
        error?.response?.data || error?.message
      );
      // Extended diagnostics
      console.log("Register error:", error);
      console.log("Response status:", error?.response?.status);
      console.log("Response data:", error?.response?.data);
      console.log("Request:", error?.request);

      const hasRequest = !!error?.request;
      const hasResponse = !!error?.response;
      if (hasRequest && !hasResponse) {
        toast.error("درخواست توسط اینترنت بلاک شده است");
        return;
      }

      const status = error?.response?.status;
      if (status === 409) {
        toast.error("کاربر وجود دارد");
      } else if (status === 400) {
        toast.error("ورودی نامعتبر");
      } else if (status >= 500) {
        toast.error("خطای سرور. لطفا مجددا تلاش کنید");
      } else {
        toast.error("ثبت نام ناموفق بود. لطفا مجددا تلاش کنید");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <aside>
        <Sidebar />
      </aside>

      <Toaster position="top-right" />

      <section
        className="grid grid-cols-12 gap-20 items-start p-12 font-yekan-bakh 
        font-normal text-primary-text-light dark:text-[var(--color-primary-text-dark)] 
        bg-background-base-light dark:bg-[var(--color-background-primary-dark)]
        h-[100vh] pr-32"
      >
        <div className="col-span-12 md:col-span-5">
          <form onSubmit={handleRegister} className="space-y-6">
            <h2 className="text-2xl font-semibold">ثبت‌نام</h2>

            <FormInput
              {...({
                type: "text",
                name: "username",
                label: "نام",
                placeholder: "نام خود را وارد نمایید",
                value: username,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value),
              } as any)}
            />

            <FormInput
              {...({
                type: "email",
                name: "email",
                label: "ایمیل",
                placeholder: "ایمیل خود را وارد نمایید",
                value: email,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value),
              } as any)}
            />

            <FormInput
              {...({
                type: "password",
                name: "password",
                label: "رمزعبور",
                placeholder: "رمزعبور خود را وارد نمایید",
                value: password,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value),
              } as any)}
            />

            <FormInput
              {...({
                type: "password",
                name: "passwordRepeat",
                label: "تکرار رمزعبور",
                placeholder: "رمزعبور خود را دوباره وارد نمایید",
                value: passwordRepeat,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setPasswordRepeat(e.target.value),
              } as any)}
            />

            <div className="pt-3">
              <div className="max-w-36">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer bg-primary-main 
                    hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  <span className="font-normal text-base text-on-primary-light">
                    {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
                  </span>
                </button>
              </div>
            </div>

            <p className="text-sm">
              {"عضو هستید؟ "}
              <Link to="/login" className="text-primary-main hover:underline">
                ورود
              </Link>
            </p>
          </form>
        </div>

        <div className="col-span-12 md:col-span-7">
          <img
            src="../../public/images/auth_light.png"
            alt="register background"
            className="block dark:hidden w-full h-[calc(100vh-100px)] object-cover rounded-xl transition-all duration-300"
          />
          <img
            src="../../public/images/auth_dark.png"
            alt="register background dark"
            className="hidden dark:block w-full h-[calc(100vh-100px)] object-cover rounded-xl transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
}
