interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function FormInput({
  label,
  name,
  className = "",
  ...rest
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-yekan-bakh font-normal text-base leading-6 text-primary-text-light 
        dark:text-[var(--color-on-primary-light)]"
        htmlFor={name}
      >
        <span className="label-text">{label}</span>
      </label>

      <input
        id={name}
        name={name}
        className={[
          "input input-bordered w-full max-h-11 rounded-lg px-2 py-2.5 pb-3",
          "bg-on-primary-light dark:bg-base-text-field-dark",
          "dark:text-primary-text-dark",
          "outline-none border border-input-light dark:border-[var(--color-input-dark)]",
          "focus:border-input-active",
          "placeholder-secondary-light placeholder:font-yekan-bakh dark:placeholder-[var(--color-secondary-dark)]",
          "font-sans font-normal",
          "flex items-center justify-start",
          "disabled:bg-input-light dark:disabled:bg-[var(--color-input-dark)]",
          className,
        ].join(" ")}
        {...rest}
      />
    </div>
  );
}
