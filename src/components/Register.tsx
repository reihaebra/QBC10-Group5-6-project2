import React from 'react';
import ButtonPrimary from '../components/ui/ButtonPrimary';
import FormInput from './FormInput';


export default function Register() {
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


<FormInput type="text" name="firstName" label="نام" placeholder="نام خود را وارد نمایید" />
<FormInput type="email" name="email" label="ایمیل" placeholder="ایمیل خود را وارد نمایید" />
<FormInput type="password" name="password" label="رمز عبور" placeholder="رمز عبور خود را وارد نمایید" />
<FormInput type="password" name="passwordConfirm" label="تکرار رمز عبور" placeholder="رمز عبور خود را دوباره وارد نمایید" />


{/* دکمه ثبت‌نام */}
<div className="pt-3">
<div className="max-w-28">
<ButtonPrimary text="ثبت‌نام" handleClick={() => {}} />
</div>
</div>



<p className="text-sm">
عضو هستید ؟ 
<a href="/login" className="text-primary-main ml-1"> &nbsp;ورود</a>
</p>
</div>
</div>


{/* لایت و دارک */}
<div className="col-span-12 md:col-span-7">

<img
src="/../../public/images/lightBg.png"
alt="register background"
className="block dark:hidden w-full h-[calc(100vh-100px)] object-cover rounded-xl transition-all duration-300"
/>

<img
src="/../../public/images/darkBg.png"
alt="register background dark"
className="hidden dark:block w-full h-[calc(100vh-100px)] object-cover rounded-xl transition-all duration-300"
/>
</div>
</section>
);
}
