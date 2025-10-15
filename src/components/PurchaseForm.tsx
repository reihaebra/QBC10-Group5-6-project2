import ButtonSecondary from "./ui/ButtonSecondary";

interface FormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setPostal: React.Dispatch<React.SetStateAction<number>>;
}

const PurchaseForm = (props: FormProps) => {
  const { setStep, setAddress, setCity, setCountry, setPostal } = props;

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  const handlePostal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostal(Number(e.target.value));
  };

  const handleClick = () => {
    setStep((step) => step + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] font-yekan-bakh">
      <div className="w-2xl">
        <h2 className="text-base font-bold text-primary-text-light dark:text-white mb-3 text-right">
          آدرس دریافت
        </h2>

        <form className="flex flex-col gap-2">
          <div>
            <label
              htmlFor="address"
              className="block text-sm text-primary-text-light dark:text-white mb-1 mt-2"
            >
              آدرس
            </label>
            <input
              id="address"
              type="text"
              placeholder="آدرس را وارد نمایید"
              className="w-full py-1.5 px-2.5 text-sm rounded-md border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]
                bg-on-primary-light dark:bg-[var(--color-base-text-field-dark)]
                text-primary-text-light dark:text-white
                placeholder:text-secondary-light dark:placeholder:text-[var(--color-secondary-dark)]
                 focus:border-info-light
                outline-none transition-all"
              onChange={handleAddress}
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm text-primary-text-light dark:text-white mb-1 mt-2"
            >
              شهر
            </label>
            <input
              id="city"
              type="text"
              placeholder="شهر را وارد نمایید"
              className="w-full py-1.5 px-2.5 text-sm rounded-md border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]
                bg-on-primary-light dark:bg-[var(--color-base-text-field-dark)]
                text-primary-text-light dark:text-white
                placeholder:text-secondary-light dark:placeholder:text-[var(--color-secondary-dark)]
                 focus:border-info-light
                outline-none transition-all"
              onChange={handleCity}
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm text-primary-text-light dark:text-white mb-1 mt-2"
            >
              کشور
            </label>
            <input
              id="country"
              type="text"
              placeholder="کشور را وارد نمایید"
              className="w-full py-1.5 px-2.5 text-sm rounded-md border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]
                bg-on-primary-light dark:bg-[var(--color-base-text-field-dark)]
                text-primary-text-light dark:text-white
                placeholder:text-secondary-light dark:placeholder:text-[var(--color-secondary-dark)]
                 focus:border-info-light
                outline-none transition-all"
              onChange={handleCountry}
            />
          </div>
          <div>
            <label
              htmlFor="postal"
              className="block text-sm text-primary-text-light dark:text-white mb-1 mt-2"
            >
              کدپستی
            </label>
            <input
              id="postal"
              type="text"
              placeholder="کدپستی را وارد نمایید"
              className="w-full py-1.5 px-2.5 text-sm rounded-md border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]
                bg-on-primary-light dark:bg-[var(--color-base-text-field-dark)]
                text-primary-text-light dark:text-white
                placeholder:text-secondary-light dark:placeholder:text-[var(--color-secondary-dark)]
                 focus:border-info-light
                outline-none transition-all"
              onChange={handlePostal}
            />
          </div>
          <div className="pt-1.5">
            <p
              className="text-sm text-secondary-light dark:text-secondary-dark mb-1 mt-2.5
            dark:text-[var(--color-secondary-dark)]"
            >
              روش پرداخت
            </p>
            <div className="flex items-center space-x-2 space-x-reverse gap-1.5 pb-2">
              <input
                id="pasargadPayment"
                type="radio"
                name="paymentMethod"
                defaultChecked
                className="appearance-none w-3.5 h-3.5 
                  rounded-full border-2
                  border-primary-text-light
                  dark:border-white
                  checked:bg-primary-main
                  checked:ring-primary-text-light
                  transition-all"
              />
              <label
                htmlFor="pasargadPayment"
                className="text-sm text-primary-text-light dark:text-white"
              >
                درگاه پرداخت پاسارگاد
              </label>
            </div>
            <div className="mt-3">
              <ButtonSecondary text={"ادامه"} handleClick={handleClick} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;
