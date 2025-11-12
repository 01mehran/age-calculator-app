import { useId } from "react";

const Input = ({ label, placeholder }) => {
  const ID = useId();

  return (
    <article className="flex w-full max-w-30 flex-col space-y-1">
      <label htmlFor={ID} className="label">
        {label}
      </label>

      <input
        type="number"
        placeholder={placeholder}
        id={ID}
        className="input outline-purple focus:outline"
      />
    </article>
  );
};

export default Input;
