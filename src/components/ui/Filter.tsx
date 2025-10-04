import { samples } from "../../../constants/filterSampleItems";

const Filter = () => {
  return (
    <ul className="flex flex-col items-start gap-2 p-5 font-yekan-bakh font-normal text-sm leading-5 text-primary-text-light max-w-60 max-h-44 dark:text-on-primary-light">
      {samples.map((sample) => (
        <li key={sample.id} className="flex items-center gap-2">
          <input type="checkbox" />
          <span>{sample.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
