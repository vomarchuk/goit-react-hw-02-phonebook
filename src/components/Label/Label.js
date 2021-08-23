const Label = ({ id, title, children }) => {
  return (
    <label htmlFor={id}>
      {title}
      {children}
    </label>
  );
};
export default Label;
