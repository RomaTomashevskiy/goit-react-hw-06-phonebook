import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
import { useSelector  ,useDispatch} from "react-redux";

export const contacts = [{
    "id": "id-1",
    "name": "Rosie Simpson",
    "number": "459-12-56"
},
{
    "id": "id-2",
    "name": "Hermione Kline",
    "number": "443-89-12"
},
{
    "id": "id-3",
    "name": "Eden Clements",
    "number": "645-17-79"
},
{
    "id": "id-4",
    "name": "Annie Copeland",
    "number": "227-91-26"
    }];

const initialState = { items: contacts, filter: '' };

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, { payload }) {
                return {
                    ...state,
                    items:[payload, ...state.items]
                } 
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: shortid.generate(),
                        name,
                        number
                    }
                };
            }
        },
        removeContact(state, { payload }) {
            return {
                ...state,
                items: state.items.filter(contact => contact.id !== payload)
            }
        },
        filterContacts(state, { payload }) {
            return { ...state, filter: payload };
        }
    },

});

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const useContacts = () => {
    const dispatch = useDispatch()
    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts)


  const handleSetFilter = name => {
    dispatch(filterContacts(name));
  };

    return {
        filter,
        contacts,
        filterContacts: handleSetFilter,
  };
};

export const { removeContact , addContact } = contactSlice.actions;