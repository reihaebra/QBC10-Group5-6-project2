import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


import FormInput from "../components/FormInput";
import Sidebar from "../components/ui/Sidebar";


import { registerUser } from "../api/requests/auth";

/**
 * Cookie-based auth reminder (client is already configured with withCredentials=true in axios):
 * - Backend must send CORS headers with Access-Control-Allow-Credentials: true
 * - Access-Control-Allow-Origin must be an exact origin (not *) that matches the frontend
 * - Set-Cookie should include proper SameSite and Secure attributes for the current environment
 */
export default function Register() {
  const navigate = useNavigate();

  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //  ولیدیشن ساده قبل از تماس با API
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
        passwordRepeat,
      });

      const userData = res?.data;
      // Minimal diagnostics (success branch only)
      console.log("auth res.status:", res?.status);
      console.log("auth res.data keys:", Object.keys(res?.data ?? {}));

      if (userData?.token) {
        localStorage.setItem("token", userData.token);
      } else {
        console.warn(
          "Register succeeded but no token in response body. If using cookies, ensure backend CORS and Set-Cookie are correctly configured."
        );
      }
      if (userData && userData._id) {
        toast.success("Registration successful!");
        navigate("/login");
        return;
      }
      toast.error("Registration failed, please try again");
    } catch (error: any) {
      const status = error?.response?.status;
      if (status === 409) {
        toast.error("User already exists");
      } else if (status === 400) {
        toast.error("اطلاعات وارد شده معتبر نیست");
      } else {
        toast.error("Registration failed, please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-primary-text-light dark:text-primary-text-dark bg-background-base-light dark:bg-background-primary-dark">
      <aside>
        <Sidebar />
      </aside>

      <Toaster position="top-right" />

      <section
        className="
grid grid-cols-12 gap-20 items-start p-6 pt-12
font-yekan-bakh font-normal
text-primary-text-light dark:text-primary-text-dark
bg-background-base-light dark:bg-background-primary-dark
h-[100vh] pr-32
"
      >
        {/* فرم ثبت‌نام */}
        <div className="col-span-12 md:col-span-5">
          <form onSubmit={handleRegister} className="space-y-6">
            <h2 className="text-lg font-bold">ثبت‌نام</h2>

            <FormInput
              {...({
                type: "text",
                name: "username",
                label: "نام و نام خانوادگی",
                placeholder: "نام خود را وارد نمایید",
                value: username,
                onChange: (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
              } as any)}
            />

            <FormInput
              {...({
                type: "email",
                name: "email",
                label: "ایمیل",
                placeholder: "ایمیل خود را وارد نمایید",
                value: email,
                onChange: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
              } as any)}
            />

            <FormInput
              {...({
                type: "password",
                name: "password",
                label: "رمز عبور",
                placeholder: "رمز عبور خود را وارد نمایید",
                value: password,
                onChange: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
              } as any)}
            />

            <FormInput
              {...({
                type: "password",
                name: "passwordRepeat",
                label: "تکرار رمز عبور",
                placeholder: "رمز عبور خود را مجدداً وارد نمایید",
                value: passwordRepeat,
                onChange: (e: ChangeEvent<HTMLInputElement>) => setPasswordRepeat(e.target.value),
              } as any)}
            />

            <div className="pt-3">
              <div className="max-w-28">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer bg-primary-main hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  <span className="font-normal text-sm text-on-primary-light">
                    {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
                  </span>
                </button>
              </div>
            </div>

            <p className="text-sm">
              عضو هستید ؟
              <Link to="/login" className="text-primary-main ml-1">
                ورود
              </Link>
            </p>
          </form>
        </div>

        {/* دارک و لایت */}
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
