import ButtonPrimary from '../components/ui/ButtonPrimary';

export default function Login() {
  return (
    <section
      dir="rtl"
      className="
        grid grid-cols-12 gap-6 items-start p-6
        font-yekan-bakh font-normal
        text-primary-text-light dark:text-primary-text-dark
      "
    >
      {/* فرم ورود */}
      <div className="col-span-12 md:col-span-5">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">ورود</h2>

          <div>
            <label className="label">
              <span className="label-text">ایمیل</span>
            </label>
            <input
              type="email"
              placeholder="ایمیل خود را وارد نمایید"
              className="
                input input-bordered w-full
                bg-input-light dark:bg-input-dark
                dark:text-primary-text-dark p-1 rounded
              "
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">رمزعبور</span>
            </label>
            <input
              type="password"
              placeholder="رمزعبور خود را وارد نمایید"
              className="
                input input-bordered w-full
                bg-input-light dark:bg-input-dark
                dark:text-primary-text-dark p-1 rounded
              "
            />
          </div>

          {/* طبق لاجیک کاری ButtonPrimary  */}
          <div className="pt-2">
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
            src=""
            alt=""
            className="block w-full h-[calc(100vh-100px)] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
