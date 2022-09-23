import Button from 'react-bootstrap/Button';

export const ContactItem = ({id, name, number, deleteContact}) => {
    return (
        <li>{name}:{number}
       <Button variant="danger" type="button" onClick={() => {
            deleteContact(id) 
        }}>Delete</Button>{' '}
        </li>
    )
}


        // <button type="button" onClick={() => {
        //     deleteContact(id) 
        // }}>Delete</button>