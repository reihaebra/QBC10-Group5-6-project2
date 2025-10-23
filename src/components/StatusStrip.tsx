const StatusStrip = ({ label = "Status" }: { label?: string }) => {
  return (
    <div className="w-full h-10 rounded-sm border-2 border-input-light py-2 px-2.5 bg-card-light dark:bg-[var(--color-shop-card-dark)] dark:border-[var(--color-input-dark)]">
      <span className="font-bold text-base">{label}</span>
    </div>
  );
};

export default StatusStrip;
