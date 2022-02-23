import './UserFrom.css';
import { Button, Form } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';

//#region function component
export default function UserForm(props) {


        const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [country, setCoutry] = useState('');
	const [adress, setAdress] =useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('') ;
	const [zip, setZip] = useState('') ;



	const upUpdateFirstName= (firstNameValue) =>{
		setFirstName(firstNameValue)
	}

	const upUpdateLastName =(lastNameValue) =>{
		setLastName(lastNameValue)
	}

	const upUpdateDateOfBirth = (dateOfBirthValue) =>{
		setDateOfBirth(dateOfBirthValue)
	}

	const upUpdateUserName = (userNameValue) => {
		setUserName(userNameValue)
	}

	const onUpdateEmail = (emailVal) => {
		setEmail(emailVal);
	}
	const upUpdateCountry =(countryValue) =>{
		setCoutry(countryValue)
	}
	const onUpdateAdress =(adressValue) =>{
		setAdress(adressValue)
	}
	const upUpdateCity =(cityVal) =>{
		setCity(cityVal)
	}
	
	const upUpdateState =(stateValue) =>{
		setState(stateValue)
	}


	const upUpdateZip = (zipValue) =>{
		setZip(zipValue)
	}



	useEffect(() => {

		console.log('Hello... this is.. ' + userName);
		return () => {
			console.log('Bye... ');
		}
	}, [userName]);


	return (
		<div className='user-form-container'>
			<h1>Contact Informations </h1>
			<h2>{'Hello.. my userName is: ' + userName}</h2>
			<h2>{'My email is.. ' + email}</h2>
			<Form className='user-form'>

				<Form.Group className="user-form-group mb-3">

					<Form.Group className="user-form-field-3 mb-3">
						<Form.Label className='user-form-label labelStyle' >FistName</Form.Label>
						<Form.Control
							onChange={e => upUpdateFirstName(e.target.value)}
							value={firstName}
							className='user-form-input inputStyle' 
							type="text" placeholder=" Type Email" />
					</Form.Group>

					<Form.Group className="user-form-field-3 mb-3">
						<Form.Label className='user-form-label labelStyle' >Lastname</Form.Label>
						<Form.Control
							onChange={e => upUpdateLastName(e.target.value)}
							value={lastName}
							className='user-form-input inputStyle' type="text" placeholder="  name@example.com" />
					</Form.Group>

					<Form.Group className="user-form-field-3 mb-3">
						<Form.Label className='user-form-label labelStyle' >Date of Birth</Form.Label>
						<Form.Control
						        onchange={e => upUpdateDateOfBirth(e.target.value)}
							value={dateOfBirth}
						        className='user-form-input inputStyle' type="date" placeholder=" Type date" />
					</Form.Group>

				</Form.Group>

				<Form.Group className="user-form-group mb-3">

					<Form.Group className="user-form-field-3 mb-3">
						<Form.Label className='user-form-label labelStyle' >Username</Form.Label>
						<Form.Control
							onChange={e => upUpdateUserName(e.target.value)}
							value={userName}
							className='user-form-input inputStyle' 
							type="text" placeholder=" Type Email" />
					</Form.Group>

					<Form.Group className="user-form-field-3 mb-3">
						<Form.Label className='user-form-label labelStyle' >Email</Form.Label>
						<Form.Control
							onChange={e => onUpdateEmail(e.target.value)}
							value={email}
							className='user-form-input inputStyle' type="text" placeholder="  name@example.com" />
					</Form.Group>

					

				</Form.Group>

				<Form.Group className="user-form-field-1 mb-3">

					<Form.Label className='labelStyle'> Gender</Form.Label>
					<Form.Check name='gender' type="radio" label="male" inline />
					<Form.Check name='gender' type="radio" label="female" inline />

				</Form.Group>

				{/* ### Modify below here ### */}

				<Form.Group className=" user-form-group  mb-3">

					<Form.Group className="user-form-field-2 mb-3">
						<Form.Label className='user-form-label labelStyle' >Country</Form.Label>
						<Form.Control 
						onchange={e => upUpdateCountry(e.target.value)}
						value={country}
						id="countID" className='user-form-input inputStyle' type="text" placeholder=" Type country" />
					</Form.Group>

					<Form.Group className="user-form-field-2 mb-3">
						<Form.Label className='user-form-label labelStyle' >Adress</Form.Label>
						<Form.Control
						onchange={e => onUpdateAdress(e.target.value)}
						value={adress} 
						className='user-form-input inputStyle' type="text" placeholder=" Type address" />
					</Form.Group>

				</Form.Group>



				<Form.Group className="user-form-group mb-3">

					<Form.Group className="user-form-field-3 mb-3">
						<Form.Label className='user-form-label labelStyle' >City</Form.Label>
						<Form.Control 
						onchage={e => upUpdateCity(e.target.value)}
						value={city}
						className='user-form-input inputStyle' type="text" placeholder=" Type city" />
					</Form.Group>

					{/* <Form.Group className="user-form-field-3 mb-3">
			<Form.Label className='user-form-label labelStyle' >State</Form.Label>
			<Form.Control className='user-form-input inputStyle' type="text" placeholder="  choose" />
			</Form.Group> */}

					<Form.Group className="user-form-field-3 mb-3">
						<Form.Label className='user-form-label labelStyle' >State</Form.Label>

						<Form.Select
						onchage={e => upUpdateState(e.target.value)}
						value={state}
						 className='user-form-input inputStyle' size="lg" >
							<option>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Form.Group>

					<Form.Group className="user-form-field-3 mb-3">
						<Form.Label className='user-form-label labelStyle' > Zip </Form.Label>
						<Form.Control
						onchage={e => upUpdateZip(e.target.value)}
						value={zip} 
						className='user-form-input inputStyle' type="text" placeholder=" Type zip" />
					</Form.Group>

				</Form.Group>
				<hr></hr>

				<Button className='buttonS' variant="secondary">close</Button>{' '}
				<Button className='buttonS1' variant="secondary">Save changes</Button>{' '}


			</Form>

		</div>
	);
}
//#endregion

// export default class UserForm extends React.Component {

// 	constructor(props) {
// 		super();
// 		this.state = {
// 			greetings: 'Hello..',
// 			name: '',
// 			myRef: null
// 		};
		
// 	}

// 	componentDidMount() {
// 		console.log(this.props.email);
// 	}

// 	componentDidUpdate() {
// 		this.setState();
// 	}

// 	componentWillUnmount() {
// 		console.log(`I've been unmounted!`);
// 	}


// 	render() {
// 		return (
// 			<div className='user-form-container'>
// 				<h1>Contact Informations </h1>
// 				<span>{this.state.greetings + ' ' + this.state.name}</span>
// 				<Form className='user-form'>

// 					<Form.Group className="user-form-group mb-3">

// 						<Form.Group className="user-form-field-3 mb-3">
// 							<Form.Label className='user-form-label labelStyle' >Username</Form.Label>
// 							<Form.Control
// 							onChange={e => this.setState({...this.state, name: e.target.value})}
// 							value={this.state.name} className='user-form-input inputStyle' type="text" placeholder=" Type Name" />
// 						</Form.Group>

// 						<Form.Group className="user-form-field-3 mb-3">
// 							<Form.Label className='user-form-label labelStyle' >Email</Form.Label>
// 							<Form.Control className='user-form-input inputStyle' type="text" placeholder="  name@example.com" />
// 						</Form.Group>

// 						<Form.Group className="user-form-field-3 mb-3">
// 							<Form.Label className='user-form-label labelStyle' >Date of Birth</Form.Label>
// 							<Form.Control className='user-form-input inputStyle' type="date" placeholder=" Type date" />
// 						</Form.Group>

// 					</Form.Group>

// 					<Form.Group className="user-form-field-1 mb-3">

// 						<Form.Label className='labelStyle'> Gender</Form.Label>
// 						<Form.Check name='gender' type="radio" label="male" inline />
// 						<Form.Check name='gender' type="radio" label="female" inline />

// 					</Form.Group>


// 					<Form.Group className=" user-form-group  mb-3">

// 						<Form.Group className="user-form-field-2 mb-3">
// 							<Form.Label className='user-form-label labelStyle' >Country</Form.Label>
// 							<Form.Control id="countID" className='user-form-input inputStyle' type="text" placeholder=" Type country" />
// 						</Form.Group>

// 						<Form.Group className="user-form-field-2 mb-3">
// 							<Form.Label className='user-form-label labelStyle' >Adress</Form.Label>
// 							<Form.Control className='user-form-input inputStyle' type="text" placeholder=" Type address" />
// 						</Form.Group>

// 					</Form.Group>



// 					<Form.Group className="user-form-group mb-3">

// 						<Form.Group className="user-form-field-3 mb-3">
// 							<Form.Label className='user-form-label labelStyle' >City</Form.Label>
// 							<Form.Control className='user-form-input inputStyle' type="text" placeholder=" Type city" />
// 						</Form.Group>
// 						<Form.Group className="user-form-field-3 mb-3">
// 							<Form.Label className='user-form-label labelStyle' >State</Form.Label>

// 							<Form.Select className='user-form-input inputStyle' size="lg" >
// 								<option>Open this select menu</option>
// 								<option value="1">One</option>
// 								<option value="2">Two</option>
// 								<option value="3">Three</option>
// 							</Form.Select>
// 						</Form.Group>

// 						<Form.Group className="user-form-field-3 mb-3">
// 							<Form.Label className='user-form-label labelStyle' > Zip </Form.Label>
// 							<Form.Control className='user-form-input inputStyle' type="text" placeholder=" Type zip" />
// 						</Form.Group>

// 					</Form.Group>
// 					<hr></hr>

// 					<Button className='buttonS' variant="secondary">close</Button>{' '}
// 					<Button className='buttonS' variant="secondary">Save changes</Button>{' '}


// 				</Form>

// 			</div>
// 		);
// 	}
// }


