import PropTypes from "prop-types";
import s from "./Input.module.css";
const Input = ({ id, type, name, value, handleChange, options }) => {
  return (
    <input
      className={s.input}
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  options: PropTypes.shape({
    pattern: PropTypes.string,
    title: PropTypes.string,
  }),
};
export default Input;
