import HeroSection from "../components/HeroSection";
import SpecialProducts from "../components/SpecialProducts";
import Sidebar from "../components/ui/Sidebar";
import UserDropdown from "../components/ui/UserDropdown";

const HomePage = () => {
  return (
    <main className=" bg-background-light dark:bg-background-dark">
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <HeroSection />
      <SpecialProducts />
    </main>
  );
};

export default HomePage;
