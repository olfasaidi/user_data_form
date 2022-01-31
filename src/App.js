import './App.css';
import UserFrom from './components/UserForm/UserFrom';

function App() {

	return (
		<div className="App">
			<UserFrom
				name="Olfa"
				lastName="Saidi"
				country="Tunisia"></UserFrom>

			<UserFrom
				name="Fernando"
				lastName="Toledo"
				country="Mexico"></UserFrom>

		</div>
	);
}

export default App;
