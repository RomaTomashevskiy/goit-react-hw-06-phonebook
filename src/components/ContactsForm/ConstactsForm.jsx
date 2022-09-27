import shortid from "shortid";
import './index.css';
 import { useDispatch  , useSelector} from 'react-redux';  
 import { addContact } from '../../redux/contactSlice';



const ContactsForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const nameId = shortid.generate();
    const numberId = shortid.generate();

    const onSubmit = e => {
        e.preventDefault();
        const { name, number } = e.target;

         const normalizeName = contacts.find(contact => contact.name.toLowerCase() === name.value.toLowerCase());
         const normalizeNumber = contacts.find(contact => contact.number.toLowerCase() === number.value.toLowerCase());

         if (normalizeName) {
            alert(`${name.value} is already in contacts.`);
         } else if(normalizeNumber){
            alert(`${number.value} is already in contacts.`);
         } else {
            dispatch(addContact(name.value, number.value));
        };

        e.target.reset();
    };

    return (
        <form action="" className="form" onSubmit={onSubmit}>
        <label htmlFor={nameId} className="label_name">
            Name
            <input
                id={nameId}
                className="input_name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>

        <label htmlFor={numberId} className="label_number">
            Number
            <input
                id={numberId}
                className="input_number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
        <button type="submit" className="btn_form ">Add Contact</button>
    </form>
    )
};




export default ContactsForm;