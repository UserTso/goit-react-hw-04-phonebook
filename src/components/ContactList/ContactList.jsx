import PropTypes from 'prop-types';
import {ContactItem} from '../ContactItem';
import {List} from './ContactList.styled';

export const ContactList = ({contacts, deleteContact}) => {
    return (
        <List>
{contacts.map(({id, name, number}) => {
    return (
        <ContactItem key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
    )
})}
        </List>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};