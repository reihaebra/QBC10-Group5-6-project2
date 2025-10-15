import ButtonPrimary from "../components/ui/ButtonPrimary";
import FormInput from "../components/FormInput";
import Sidebar from "../components/ui/Sidebar";

export default function Login() {
  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <section
        className="
              grid grid-cols-12 items-start pt-8
              font-yekan-bakh font-normal
              text-primary-text-light dark:text-[var(--color-primary-text-dark)] 
              bg-background-base-light dark:bg-[var(--color-background-primary-dark)]
              h-[100vh] pr-32"
      >
        <div className="col-span-12 md:col-span-5">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">ورود</h2>

            <FormInput
              type="email"
              name="email"
              label="ایمیل"
              placeholder="ایمیل خود را وارد نمایید"
            />
            <FormInput
              type="password"
              name="password"
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد نمایید"
            />

            <div className="pt-2">
              <div className="max-w-28">
                <ButtonPrimary text="ورود" handleClick={() => {}} />
              </div>
            </div>

            <p className="text-sm">
              عضو نیستید ؟
              <a href="/register" className="text-primary-main ml-1">
                {" "}
                &nbsp;ثبت‌نام{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 mx-auto">
          <img
            src="public/images/auth_light.png"
            alt="Login background"
            className="block dark:hidden w-full h-[calc(100vh-100px)] object-cover rounded-md transition-all duration-300"
          />

          <img
            src="public/images/auth_dark.png"
            alt="Login background dark"
            className="hidden dark:block w-full h-[calc(100vh-100px)] object-cover rounded-md transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
}
