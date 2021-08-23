const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map((item) => {
        const { id, name, number } = item;
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => onDeleteContact(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
