interface FilterProps {
  title: string;
}

const FilterHeading = ({ title }: FilterProps) => {
  return (
    <button className="font-yekan-bakh font-normal text-base text-primary-text-light flex items-center justify-center bg-on-primary-light leading-6 px-20 py-2 w-60 h-10 rounded-full dark:bg-primary-text-light dark:text-on-primary-light">
      {title}
    </button>
  );
};

export default FilterHeading;
