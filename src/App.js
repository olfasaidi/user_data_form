import './App.css';
import UserFrom from './components/UserForm/UserFrom';


function App() {

	return (
		<div className="App">
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
				></UserFrom>

			<UserFrom
				name="Fernando"
				lastName="Toledo"
				country="Mexico"
				email="fernandotoledo@gmail.com"
				Username="ftoledo"
				gender="male"
				adress="Tufton 470"
				birthDate="01/23"
				city="Asheville"
				state="NC"
				zip="2800"
				></UserFrom>

			 

		</div>
	);
}

export default App;
