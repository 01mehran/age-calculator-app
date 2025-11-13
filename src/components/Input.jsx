import { useId } from "react";

const Input = ({ label, placeholder, value, onChange, name, error }) => {
  const ID = useId();

  return (
    <article className="relative flex w-full max-w-30 flex-col space-y-1 pb-5">
      <label htmlFor={ID} className={`label ${error ? "text-red" : ""}`}>
        {label}
      </label>

      <input
        type="number"
        placeholder={placeholder}
        id={ID}
        className={`input outline-purple focus:outline ${error ? "border-red focus:outline-0" : ""}`}
        value={value}
        onChange={onChange}
        name={name}
      />
      <span className="text-red font-meduim small:bottom-0 small:text-[11px] absolute bottom-1.5 text-[8px] text-nowrap">
        {error}
      </span>
    </article>
  );
};

export default Input;
