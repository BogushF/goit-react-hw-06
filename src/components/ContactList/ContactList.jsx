import s from "./ContactList.module.css";
import ContactItem from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
