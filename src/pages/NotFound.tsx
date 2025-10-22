import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-background-base-light 
    dark:bg-[var(--color-background-primary-dark)] font-yekan-bakh pb-16"
    >
      <h1 className="text-[160px] font-black text-primary-main drop-shadow-lg">
        ۴۰۴
      </h1>
      <h2 className="text-4xl font-bold text-primary-text-light dark:text-[var(--color-primary-text-dark)] mb-4">
        صفحه‌ای که دنبالش بودید پیدا نشد!
      </h2>
      <p className="text-secondary-light dark:text-[var(--color-secondary-dark)] mb-8 text-center leading-6">
        ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد. <br /> برای ادامه،
        می‌توانید به صفحه ورود بازگردید.
      </p>
      <Link
        to="/login"
        className="relative z-10 px-8 py-3 text-lg rounded-2xl 
                   bg-primary-main text-on-primary-light
                   shadow-xl hover:bg-[var(--color-primary-dark)] transition"
      >
        ورود به حساب کاربری
      </Link>
      <svg
        className="absolute bottom-0 w-full h-40 text-primary-lighter dark:text-[var(--color-base-card-dark)]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,192L60,197.3C120,203,240,213,360,186.7C480,160,600,96,720,85.3C840,75,960,117,1080,149.3C1200,181,1320,203,1380,213.3L1440,224V320H0Z"
        ></path>
      </svg>
    </div>
  );
}
