import './UserFrom.css';

export default function UserFrom(props) {
	return (
		<div className='user-form'>
			<div className='uf-field'>
				<label>Name:</label>
				<span>{props.name}</span>
			</div>
			<div className='uf-field'>
				<label>Last Name:</label>
				<span>{props.lastName}</span>
			</div>
			<div className='uf-field'>
				<label>Country:</label>
				<span>{props.country}</span>
			</div>
			{/* 
				Add this new fields to the component:
				// Email:
				// User Name:
				// Gender: (Radio buttons)
				// Address:
				// Date of birth:
				// City:
				// State:
				// Zip code:
			 */}
		</div>
	);
}
