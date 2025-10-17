import { useEffect, useState } from "react";
import ButtonPrimary from "../components/ui/ButtonPrimary";
import Sidebar from "../components/ui/Sidebar";
import TextField from "../components/ui/TextField";
import UserDropdown from "../components/ui/UserDropdown";
import { getUserProfile, updateUserProfile } from "../api/requests/profile";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile({
          ...data,
          password: "",
          confirmPassword: "",
        });
      } catch (e) {
        console.error("Error fetching profile data: ", e);
        toast.error("خطا در دریافت اطلاعات کاربر.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (profile.password !== profile.confirmPassword) {
      toast.error("رمزعبور و تکرار آن مطابقت ندارند.");
      return;
    }

    try {
      setLoading(true);
      await updateUserProfile({
        username: profile.username,
        email: profile.email,
        password: profile.password,
      });
      toast.success("پروفایل با موفقیت بروزرسانی شد.");
    } catch (e) {
      console.error("Error updating profile: ", e);
      toast.error("خطا در بروزرسانی پروفایل.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>در حال بارگذاری اطلاعات کاربر...</p>;
  }

  return (
    <div
      className="flex items-center justify-center pr-32 min-h-screen bg-background-base-light 
    dark:bg-[var(--color-background-primary-dark)]"
    >
      <aside>
        <Sidebar>
          <UserDropdown />
        </Sidebar>
      </aside>
      <main className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-start w-full"
        >
          <h1
            className="font-yekan-bakh font-semibold leading-8 text-2xl text-black 
          dark:text-[var(--color-on-primary-light)]"
          >
            بروزرسانی پروفایل
          </h1>
          <TextField
            type="text"
            inputLabel="نام"
            inputValue={profile.username}
            inputName="username"
            placeholder="نام خود را وارد نمایید"
            onChangeInput={handleChange}
          />
          <TextField
            type="email"
            inputLabel="ایمیل"
            inputValue={profile.email}
            inputName="email"
            placeholder="ایمیل خود را وارد نمایید"
            onChangeInput={handleChange}
          />
          <TextField
            type="password"
            inputLabel="رمزعبور"
            inputValue={profile.password}
            inputName="password"
            placeholder="رمزعبور خود را وارد نمایید"
            onChangeInput={handleChange}
          />
          <TextField
            type="password"
            inputLabel="تکرار رمزعبور"
            inputValue={profile.confirmPassword}
            inputName="confirmPassword"
            placeholder="تکرار رمزعبور خود را وارد نمایید"
            onChangeInput={handleChange}
          />
          <div className="flex items-center justify-between w-full">
            <ButtonPrimary
              text="سفارشات من"
              handleClick={() => navigate("/user/my-orders")}
            />
            <ButtonPrimary text="بروزرسانی" type="submit" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage;
