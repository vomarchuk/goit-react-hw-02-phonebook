import PropTypes from "prop-types";
import s from "./Label.module.css";

const Label = ({ id, title, children }) => {
  return (
    <label className={s.label} htmlFor={id}>
      {title}
      {children}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.object,
};
export default Label;
