interface TextFieldProps {
  inputLabel: string;
  inputValue: string;
  onChangeInput: () => void;
}

const TextField = ({
  inputLabel = "",
  inputValue,
  onChangeInput,
}: TextFieldProps) => {
  return (
    <div className="font-yekan-bakh flex flex-col items-start gap-2 w-full max-h-20">
      <label
        className="font-normal text-base leading-6 text-primary-text-light dark:text-[var(--color-on-primary-light)]"
        htmlFor="text-field"
      >
        {inputLabel}
      </label>
      <input
        type="text"
        name="text-field"
        id="text-field"
        value={inputValue}
        placeholder={`${inputLabel} محصول را وارد نمایید`}
        onChange={onChangeInput}
        className="font-normal flex items-center justify-start px-2 py-2.5 w-full max-h-11 text-primary-text-light bg-on-primary-light border border-input-light rounded-lg placeholder-secondary-light outline-none disabled:bg-input-light focus:border-input-active dark:disabled:bg-[var(--color-input-dark)] dark:text-[var(--color-on-primary-light)] dark:placeholder-[var(--color-secondary-dark)] dark:bg-[var(--color-base-text-field-dark)] dark:border-[var(--color-input-dark)]"
      />
    </div>
  );
};

export default TextField;
