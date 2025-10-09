import React from 'react';
import ButtonPrimary from '../components/ui/ButtonPrimary';

export default function Login() {
  // تغییر عکس بر اساس تم دارک و لایت
  const isDarkMode =
    typeof window !== 'undefined' &&
    document.documentElement.classList.contains('dark');

  const imageSrc = isDarkMode
    ? 'src/assets/images/darkBg.png'
    : 'src/assets/images/lightBg.png';

  return (
    <section
      className="
       grid grid-cols-12 gap-20 items-start p-6 pt-12
       font-yekan-bakh font-normal
       text-primary-text-light dark:text-primary-text-dark
       bg-background-base-light dark:bg-background-primary-dark
       h-[100vh]
      "
    >
      {/* فرم ورود */}
      <div className="col-span-12 md:col-span-5">
        <div className="space-y-6">
          <h2 className="text-lg font-bold">ورود</h2>

          {/* ایمیل */}
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text">ایمیل</span>
            </label>
            <input
              type="email"
              placeholder="ایمیل خود را وارد نمایید"
              className="
                input input-bordered w-full
                bg-on-primary-light dark:bg-base-text-field-dark
                dark:text-primary-text-dark p-2 rounded-lg
                focus:outline-primary-main
                border border-input-light dark:border-input-dark
              "
            />
          </div>

          {/* رمز عبور */}
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text">رمز عبور</span>
            </label>
            <input
              type="password"
              placeholder="رمز عبور خود را وارد نمایید"
              className="
                input input-bordered w-full
                bg-on-primary-light dark:bg-base-text-field-dark
                dark:text-primary-text-dark p-2 rounded-lg
                focus:outline-primary-main
                border border-input-light dark:border-input-dark
              "
            />
          </div>

          {/* طبق لاجیک کاری ButtonPrimary */}
          <div className="pt-3">
            <div className="max-w-28">
              <ButtonPrimary
                text="ورود"
                handleClick={() => {
                  //  لاجیک ورودی
                }}
              />
            </div>
          </div>

          <p className="text-sm">
            عضو نیستید؟{' '}
            <a href="/register" className="text-primary-main">
              ثبت‌نام
            </a>
          </p>
        </div>
      </div>

      {/* تصویر */}
      <div className="col-span-12 md:col-span-7">
        <div className="rounded-xl overflow-hidden bg-card-light dark:bg-base-card-dark">
          <img
            src={imageSrc}
            alt="Login background"
            className="block w-full h-[calc(100vh-100px)] object-cover transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
