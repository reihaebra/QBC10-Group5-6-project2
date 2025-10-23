import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "../components/FormInput";
import Sidebar from "../components/ui/Sidebar";
import { loginUser } from "../api/requests/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      toast.error("Email and password are required");
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser({ email, password });
      const userData = response?.data;

      if (!userData || !userData._id) {
        toast.error("Incorrect username or password");
        setLoading(false);
        return;
      }

      console.log("auth res.status:", response?.status);
      console.log("auth res.data keys:", Object.keys(response?.data ?? {}));

      localStorage.setItem("id", userData._id);
      localStorage.setItem("isAdmin", String(userData.isAdmin));

      if (userData?.token) {
        localStorage.setItem("token", userData.token);
      } else {
        console.warn(
          "Login succeeded but no token in response body. If using cookies, ensure backend CORS and Set-Cookie are correctly configured."
        );
      }

      toast.success(`Welcome ${userData.username ?? ""} 🙂`);
      navigate("/user/home");
    } catch (err: any) {
      const status = err?.response?.status;
      if (status === 401 || status === 404) {
        toast.error("Incorrect username or password");
      } else {
        toast.error("Login failed, please try again.");
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
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-2xl font-semibold">ورود</h2>

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
                label: "رمز عبور",
                placeholder: "رمز عبور خود را وارد نمایید",
                value: password,
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value),
              } as any)}
            />

            <div className="pt-3">
              <div className="max-w-28">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer bg-primary-main 
                    hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  <span className="font-normal text-sm text-on-primary-light">
                    {loading ? "در حال ورود..." : "ورود"}
                  </span>
                </button>
              </div>
            </div>

            <p className="text-base">
              {"عضو نیستید؟ "}
              <Link
                to="/register"
                className="text-primary-main hover:underline"
              >
                ثبت‌نام
              </Link>
            </p>
          </form>
        </div>

        <div className="col-span-12 md:col-span-7">
          <img
            src="../../public/images/auth_light.png"
            alt="Login background"
            className="block dark:hidden w-full h-[calc(100vh-100px)] object-cover rounded-xl transition-all duration-300"
          />
          <img
            src="../../public/images/auth_dark.png"
            alt="Login background dark"
            className="hidden dark:block w-full h-[calc(100vh-100px)] object-cover rounded-xl transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
}
