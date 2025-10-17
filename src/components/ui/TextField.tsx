interface TextFieldProps {
  type?: string;
  inputLabel: string;
  inputValue: string;
  inputName?: string;
  placeholder?: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  type = "text",
  inputLabel,
  inputValue,
  inputName = "",
  placeholder = "",
  onChangeInput,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full max-h-20">
      <label
        className="font-yekan-bakh font-normal text-base leading-6 text-primary-text-light 
        dark:text-[var(--color-on-primary-light)]"
        htmlFor="text-field"
      >
        {inputLabel}
      </label>
      <input
        type={type}
        name={inputName}
        id={inputName}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChangeInput}
        className="font-sans font-normal flex items-center justify-start px-2 py-2.5 
        w-full max-h-11 text-primary-text-light bg-on-primary-light border border-input-light 
        rounded-lg placeholder-secondary-light placeholder:font-yekan-bakh outline-none disabled:bg-input-light 
        focus:border-input-active dark:disabled:bg-[var(--color-input-dark)] dark:text-[var(--color-on-primary-light)] 
        dark:placeholder-[var(--color-secondary-dark)] dark:bg-[var(--color-base-text-field-dark)] 
        dark:border-[var(--color-input-dark)]"
      />
    </div>
  );
};

export default TextField;
