import React from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends React.Component {
	state = {
		name: '',
		number: '',
	};

	changeInput = event => {
		const { name, value } = event.currentTarget;
		this.setState({ [name]: value });
		// console.log(event.currentTarget);
	};

	handleSubmitForm = event => {
		event.preventDefault();
		const { name, number } = this.state;
		const newContact = {
            id: nanoid(),
			name: name,
			number: number,
		};
        console.log(newContact);
        this.props.submitForm(newContact);
        this.resetForm();
        console.log(this.props);
	};

resetForm = () => {
    this.setState({name: '', number: ''})
}

	render() {
		return (
			<form onSubmit={this.handleSubmitForm}>
				<label>
					Name
					<input
						type="text"
						value={this.state.name}
						name="name"
						onChange={this.changeInput}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
					/>
				</label>
				<label>
					Number
					<input
						type="tel"
						value={this.state.number}
						name="number"
						onChange={this.changeInput}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
					/>
				</label>
				<button type="submit">Add contact</button>
			</form>
		);
	}
}
