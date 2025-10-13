import { useState } from "react";
import ButtonPrimary from "../components/ui/ButtonPrimary";
import Sidebar from "../components/ui/Sidebar";
import TextField from "../components/ui/TextField";
import UserDropdown from "../components/ui/UserDropdown";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-background-base-light dark:bg-[var(--color-background-primary-dark)]">
      <aside>
        <Sidebar>
          <UserDropdown />
        </Sidebar>
      </aside>
      <main className="w-full max-w-2xl">
        <form
          onSubmit={() => {}}
          className="flex flex-col gap-4 items-start w-full"
        >
          <h1 className="font-yekan-bakh font-semibold leading-8 text-2xl text-black dark:text-[var(--color-on-primary-light)]">
            بروزرسانی پروفایل
          </h1>
          <TextField
            inputLabel="نام"
            inputValue={profile.name}
            onChangeInput={() => {}}
          />
          <TextField
            inputLabel="ایمیل"
            inputValue={profile.email}
            onChangeInput={() => {}}
          />
          <TextField
            inputLabel="رمزعبور"
            inputValue={profile.password}
            onChangeInput={() => {}}
          />
          <TextField
            inputLabel="تکرار رمزعبور"
            inputValue={profile.confirmPassword}
            onChangeInput={() => {}}
          />
          <div className="flex items-center justify-between w-full">
            <ButtonPrimary text="سفارشات من" handleClick={() => {}} />
            <ButtonPrimary text="بروزرسانی" handleClick={() => {}} />
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;
