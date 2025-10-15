interface DashboardCardProps {
  title: string;
  amount: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, amount }) => {
  return (
    <div className="w-60 h-40 rounded-lg bg-on-primary-light font-yekan-bakh flex flex-col justify-center gap-4 pr-7 dark:bg-[var(--color-primary-text-light)]">
      <figure className="w-12 h-12 rounded-full bg-primary-main py-3 px-5 text-white">
        $
      </figure>
      <div className="flex flex-col gap-1">
        <p className="font-normal text-base text-secondary-light dark:text-[var(--color-secondary-dark)]">
          {title}
        </p>
        <p className="font-bold text-xl text-primary-text-light dark:text-[var(--color-on-primary-light)]">
          {amount}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
