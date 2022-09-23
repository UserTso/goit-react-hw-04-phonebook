import {ContactItem} from '../ContactItem';

export const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul>
{contacts.map(({id, name, number}) => {
    return (
        <ContactItem key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
    )
})}
        </ul>
    )
}

