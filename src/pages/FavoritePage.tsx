import React from "react";
import Sidebar from "../components/ui/Sidebar";
import Favorite from "../components/Favorite";

const FavoritePage = () => {
  return (
    <>
      <div
        className="pt-8 h-screen flex flex-col items-start pr-32 bg-background-base-light 
      dark:bg-[var(--color-background-primary-dark)]"
      >
        <Sidebar />
        <Favorite />
      </div>
    </>
  );
};

export default FavoritePage;
