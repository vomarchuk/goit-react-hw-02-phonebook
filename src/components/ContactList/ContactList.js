import PropTypes from "prop-types";
import s from "./ContactList.module.css";
const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contactList.map((item) => {
        const { id, name, number } = item;
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.btn__delete}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
