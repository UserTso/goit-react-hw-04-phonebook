import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Section } from '../Section/Section';
import { Filter } from '../Filter/Filter';
import {ContactList} from '../ContactList/ContactList';
import {GlobalBox} from './App.styled';

export class App extends React.Component {
	state = {
		contacts: [],
		// contacts: [
		// 	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }, ------------------- дивитись коментар рядок 25
		// 	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		// 	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		// 	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		// ],
		filter: '',
	};

	componentDidMount() {

const item = localStorage.getItem('contacts');
const parseContacts = JSON.parse(item);

// if(parseContacts?.length) ----------------- така перевірка потрібна в разі якщо посаткове значення масиву contacts не пустий масив
if(parseContacts)
{this.setState({contacts: parseContacts})}

	};


	componentDidUpdate(prevProps, prevState) { 

		if(this.state.contacts !== prevState.contacts) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
		}
	
	}

	getValueSubmitForm = value => {
    if(this.checkContacts(value.name)) {
      return alert(`${value.name} is already in contacts`)
    }
		this.setState(({ contacts }) => {
			return {
				contacts: [...contacts, value],
			};
		});
	};

checkContacts = contact => {
  return this.state.contacts.find(element => 
    element.name.toLowerCase() === contact.toLowerCase()
  )
}

onChange = (event) => {
	    event.preventDefault();
		// console.log(event.currentTarget)
		const {value} = event.currentTarget;
		// передаем значение из инпута в фильтр
	   this.setState({filter: value});
	    console.log(this.state.filter)
	    }

onFilterContact = () => {
	const currentFilter = this.state.filter.toLowerCase();
	return this.state.contacts.filter((element) => {
return element.name.toLowerCase().includes(currentFilter)
	})
}

onDeleteContact = (id) => {
this.setState({contacts: this.state.contacts.filter((element) => {
	return element.id !== id
})})
}

	render() {
		
		return (
			<>
			<GlobalBox>
				<Section title="PhoneBook">
					<ContactForm submitForm={this.getValueSubmitForm} />
				</Section>
				<Section title="Contacts">
					<Filter onChange={this.onChange} />
					<ContactList contacts={this.onFilterContact()} deleteContact={this.onDeleteContact} />
				</Section>
				</GlobalBox>
			</>
		);
	}
}
