import './index.css';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactSlice';
import PropTypes from 'prop-types';


const ContactsList = ({contacts}) => {

    const dispatch = useDispatch();

    return (
        <ul>

            {contacts.map(({id ,name , number}) => {
                return <li key={id} className='item'>
                    <p>{name}: {number}</p>
                    <button
                    className='list_btn'
                    type="button"
                    onClick={() => dispatch(removeContact(id))}
                >Delete</button>
                </li>
            })}
        </ul>
    )
};


ContactsList.prototype = {
    contacts: PropTypes.func.isRequired
}
export default ContactsList;
