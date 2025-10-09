import React from "react";
import Sidebar from "./components/ui/Sidebar";
import Cart from "./pages/CartPage";

const App = () => {
  return (
    <div className="flex flex-row-reverse h-screen bg-gray-100 dir">
      <div className="w-64 bg-gray-800 text-white p-4">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Cart />
      </div>
    </div>
  );
};

export default App;
