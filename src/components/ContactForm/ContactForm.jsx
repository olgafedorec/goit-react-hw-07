import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';


export const ContactForm = () => {
    const dispatch = useDispatch();
    const id = useId();
    const handleSubmit = event => {
    event.preventDefault();
      const form = event.target;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
      dispatch(addContact(name, number));
      form.reset();
   }

    return (   
            <form className={css.form} onSubmit={handleSubmit}>
       <div className={css.formGroup}>
       <label htmlFor={`name-${id}`}>Name</label>
        <input className={css.input} name="name" type="text" id={`name-${id}`}/>
       </div>
       <div className={css.formGroup}>
       <label htmlFor={`number-${id}`}>Number</label>
       <input className={css.input} type="text" name="number" id={`number-${id}`}/>
       </div>
        <button type="submit">Add contact</button>  
            </form>
    )
}