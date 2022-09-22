import React from 'react';
import { ContactForm } from './ContactForm';
import { Section } from './Section';

export class App extends React.Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
	};

	getValueSubmitForm = value => {
    if(this.checkContacts(value.name)) {
      return alert(`${value.name} is already in contacts`)
    }
		this.setState(({ contacts }) => {
			return {
				contacts: [...contacts, value],
			};
		});
    console.log(this.state);
	};

checkContacts = contact => {
  return this.state.contacts.find(element => 
    element.name.toLowerCase() === contact.toLowerCase()
  )
}

	render() {
		return (
			<>
				<Section title="PhoneBook">
					<ContactForm submitForm={this.getValueSubmitForm} />
				</Section>
			</>
		);
	}
}
