import React, { useEffect, useState } from 'react';
import ButtonPrimary from '../components/ui/ButtonPrimary';

export default function Register() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);

  const imageSrc = isDark
    ? 'src/assets/images/darkBg.png'
    : 'src/assets/images/lightBg.png';

  return (
    <section
      className="
         grid grid-cols-12 gap-20 items-start p-6 pt-12
         font-yekan-bakh
         text-primary-text-light dark:text-primary-text-dark
         bg-background-base-light dark:bg-background-primary-dark
         h-[100vh]
      "
    >
      {/* فرم ثبت‌نام */}
      <div className="col-span-12 md:col-span-5">
        <div className="space-y-6">
          <h2 className="text-lg font-bold">ثبت‌نام</h2>

          {/* نام */}
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text">نام</span>
            </label>
            <input
              type="text"
              placeholder="نام خود را وارد نمایید"
              className="
                input input-bordered w-full
                bg-on-primary-light dark:bg-base-text-field-dark
                dark:text-primary-text-dark p-2 rounded-lg
                focus:outline-primary-main
                border border-input-light dark:border-input-dark
              "
            />
          </div>

          {/* ایمیل */}
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text">ایمیل</span>
            </label>
            <input
              type="email"
              placeholder="ایمیل خود را وارد نمایید"
              className="
                input input-bordered w-full p-2 rounded-lg
                bg-on-primary-light dark:bg-base-text-field-dark
                dark:text-primary-text-dark
                border border-input-light dark:border-input-dark
                focus:outline-primary-main
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
                input input-bordered w-full rounded-lg p-2
                bg-on-primary-light dark:bg-base-text-field-dark
                dark:text-primary-text-dark
                border border-input-light dark:border-input-dark
                focus:outline-primary-main
              "
            />
          </div>

          {/* تکرار رمز عبور */}
          <div className="flex flex-col gap-2">
            <label className="label">
              <span className="label-text">تکرار رمز عبور</span>
            </label>
            <input
              type="password"
              placeholder="رمز عبور خود را دوباره وارد نمایید"
              className="
                input input-bordered w-full rounded-lg p-2
                bg-on-primary-light dark:bg-base-text-field-dark
                dark:text-primary-text-dark
                border border-input-light dark:border-input-dark
                focus:outline-primary-main
              "
            />
          </div>

          {/* دکمه ثبت‌نام */}
          <div className="pt-3">
            <div className="max-w-28">
              <ButtonPrimary text="ثبت‌نام" handleClick={() => {}} />
            </div>
          </div>

          {/* لینک ورود */}
          <p className="text-sm">
            عضو هستید؟{' '}
            <a href="/login" className="text-primary-main">
              ورود
            </a>
          </p>
        </div>
      </div>

      {/* تصویر  */}
      <div className="col-span-12 md:col-span-7">
        <div
          className="
            rounded-xl overflow-hidden
            bg-card-light dark:bg-base-card-dark
          "
        >
          <img
            src={imageSrc}
            alt="register background"
            className="block w-full h-[calc(100vh-100px)] object-cover transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
