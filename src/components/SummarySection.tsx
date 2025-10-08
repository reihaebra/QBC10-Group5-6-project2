import React from 'react'

const SummarySection = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
        <h2 className="font-medium text-right text-2xl text-primary-text-light dark:text-primary-text-dark">خلاصه خرید</h2>

        <section className="bg-base-side-light dark:bg-base-side-dark rounded-lg p-6 space-y-6 flex justify-between text-right">
            <div className="p-4 flex-1 max-w-[250px] flex-col gap-[16px]">
              <h3 className="mb-2 font-medium text-2xl text-primary-text-light dark:text-primary-text-dark">روش پرداخت</h3>
              <p className="text-base text-primary-text-light dark:text-primary-text-dark"><span className='text-secondary-light dark:text-secondary-dark'>روش:</span> درگاه پرداخت پاسارگاد</p>
            </div>
            <div className="p-4 flex-1 flex-col gap-[16px] max-w-[250px]">
              <h3 className="mb-2 font-medium text-2xl text-primary-text-light dark:text-primary-text-dark">آدرس دریافت</h3>
              <p className="text-base text-primary-text-light dark:text-primary-text-dark"><span className='text-secondary-light dark:text-secondary-dark'>آدرس:</span> تهران، خیابان آزادی، نبش کوچه فدری، پلاک ۱۳</p>
            </div>
            <div className="p-4 text-right flex-1 flex-col gap-[4px] max-w-[300px]">
              <div className='flex justify-between'>
                <p className='font-bold text-base text-secondary-light dark:text-secondary-dark'>قیمت محصولات:</p>
                <p className='font-normal text-base text-primary-text-light dark:text-primary-text-dark'>100,000 تومان</p>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold text-base text-secondary-light dark:text-secondary-dark'>هزینه ارسال:</p>
                <p className='font-normal text-base text-primary-text-light dark:text-primary-text-dark'>10,000 تومان</p>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold text-base text-secondary-light dark:text-secondary-dark'>مالیات:</p>
                <p className='font-normal text-base text-primary-text-light dark:text-primary-text-dark'>10,000 تومان</p>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold text-base text-secondary-light dark:text-secondary-dark'>مبلغ نهایی:</p>
                <p className='font-normal text-base text-primary-text-light dark:text-primary-text-dark'>100,000 تومان</p>
              </div>
            </div>

        </section>

        <button className='font-bold text-xl bg-primary-main text-on-primary-light py-3 rounded-full w-[100%]'>
            ثبت سفارش
        </button>
    </div>
  )
}

export default SummarySection
