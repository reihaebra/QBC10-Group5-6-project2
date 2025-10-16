import Sidebar from "../components/ui/Sidebar";
import Favorite from "../components/Favorite";
import UserDropdown from "../components/ui/UserDropdown";
import { FavoriteProvider } from "../context/FavoriteContext";

const FavoritePage = () => {
  return (
    <>
      <FavoriteProvider>
        <div className="py-8 min-h-screen h-full flex flex-col items-start pr-32 bg-background-base-light dark:bg-[var(--color-background-primary-dark)]">
          <Sidebar>
            <UserDropdown />
          </Sidebar>
          <Favorite />
        </div>
      </FavoriteProvider>
    </>
  );
};

export default FavoritePage;
