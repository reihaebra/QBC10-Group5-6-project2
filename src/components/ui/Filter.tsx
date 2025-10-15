
interface Category {
  _id: string;
  name: string;
}
interface FilterProps {
  categories: Category[];
  selectedCategories: string[];
  onChange: (id: string, checked: boolean) => void;
}
const Filter = ({ categories, selectedCategories, onChange }: FilterProps) => {
  return (
    <ul className="flex flex-col items-start gap-2 p-5 font-yekan-bakh font-normal text-sm leading-5 text-primary-text-light max-w-60  dark:text-[var(--color-on-primary-light)]">
      {categories.map((category) => (
        <li key={category._id} className="flex items-center gap-2">
         <input
            type="checkbox"
            checked={selectedCategories.includes(category._id)}
            onChange={(e) => onChange(category._id, e.target.checked)}
          />
          <span>{category.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
