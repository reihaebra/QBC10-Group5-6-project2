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
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <input
        id={name}
        name={name}
        className={[
          "input input-bordered w-full rounded-lg p-2",
          "bg-on-primary-light dark:bg-base-text-field-dark",
          "dark:text-primary-text-dark",
          "border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)]",
          "focus:border-input-active",
          className,
        ].join(" ")}
        {...rest}
      />
    </div>
  );
}
