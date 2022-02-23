import { useState } from 'react';
import './App.css';
import FromComponent from './components/Form/Form';
import User from './components/User/User';
import UserFrom from './components/UserForm/UserFrom';


function App() {

	const [stateOk, updateState] = useState(false);

	const modify = () => {
		updateState(true);
	}


	return (
		<div className="App">
			<button onClick={modify}>Change</button>

			<br />
			<br />

			{stateOk ? <FromComponent /> :
			
			 <UserFrom
				name="Olfa"
				lastName="Saidi"
				country="Tunisia"
				email="saidiolfa86@gmail.com"
				Username="Foufa"
				gender="female"
				adress=" City 18 january"
				birthDate="03/03/1997"
				city="Ariana"
				state=""
				zip="2041"
				></UserFrom>}


			<br />
			<br />

			

	

			 

		</div>
	);
}

export default App;
