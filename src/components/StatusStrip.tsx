import React from "react";

const StatusStrip = ({ label = "Status" }: { label?: string }) => {
  return (
    <div className="w-full h-10 rounded-sm border-2 border-input-light py-2 px-2.5 bg-card-light dark:bg-shop-card-dark dark:border-input-dark">
      <span className="font-bold text-base">{label}</span>
    </div>
  );
};

export default StatusStrip;
