import React from 'react';
import { nanoid } from 'nanoid';
import {Wrapper, Form, LabelForm, Span, InputForm, Button} from './ContactForm.styled';
// import { Formik, Form, Field } from 'formik';




// const initialValues = {
// 	name: '',
// 		number: '',
//   }


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

		// передача нового контакта в App

        this.props.submitForm(newContact);
        this.resetForm();
	};

resetForm = () => {
    this.setState({name: '', number: ''})
}

	render() {
		return (<Wrapper>
			
			<Form onSubmit={this.handleSubmitForm}>
				<LabelForm>
					<Span>Name</Span>					
					<InputForm
						type="text"
						value={this.state.name}
						name="name"
						onChange={this.changeInput}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
					/>
				</LabelForm>
				<LabelForm>
					<Span>Number</Span>					
					<InputForm
						type="tel"
						value={this.state.number}
						name="number"
						onChange={this.changeInput}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
					/>
				</LabelForm>
				<Button type="submit">Add contact</Button>
			</Form>
			</Wrapper>
		);
	}
}

