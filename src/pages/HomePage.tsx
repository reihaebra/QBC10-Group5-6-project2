import HeroSection from "../components/HeroSection";
import SpecialProducts from "../components/SpecialProducts";
import Sidebar from "../components/ui/Sidebar";
import UserDropdown from "../components/ui/UserDropdown";

const HomePage = () => {
  return (
    <main className="bg-background-base-light dark:bg-[var(--color-background-primary-dark)] pr-36 py-8 pl-14">
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <HeroSection />
      <SpecialProducts />
    </main>
  );
};

export default HomePage;
