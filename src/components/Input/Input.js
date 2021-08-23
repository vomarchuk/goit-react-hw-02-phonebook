const Input = ({ id, type, name, value, handleChange, options }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={(event) => {
        handleChange(event);
      }}
      pattern={options.pattern}
      title={options.title}
      required
    />
  );
};
export default Input;
