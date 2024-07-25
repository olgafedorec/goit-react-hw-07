import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import{ selectNameFilter } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectNameFilter);

 return (
    <ul className={css.list}>
    {contacts.map((contact) => (
      <li className={css.item} key={contact.id}>
        <Contact contact={contact} />
      </li>
    ))}
  </ul>
 )
}