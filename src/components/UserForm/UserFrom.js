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
            <div className='uf-field'>
                <label>Email:</label>
                <span>{props.email}</span>
            </div>
            <div className='uf-field'>
                <label>User Name:</label>
                <span>{props.Username}</span>
            </div>
            <div className='uf-field'>
                <label>Gender:</label>
                <span>{props.gender}</span>
            </div>

            <div className='uf-field'>
                <label>Adress:</label>
                <span>{props.adress}</span>
            </div>
            <div className='uf-field'>
                <label>DAte of Birth:</label>
                <span>{props.birthDate}</span>
            </div>
            <div className='uf-field'>
                <label>City:</label>
                <span>{props.city}</span>
            </div>
            <div className='uf-field'>
                <label>State:</label>
                <span>{props.state}</span>
            </div>
            <div className='uf-field'>
                <label>Zip Code:</label>
                <span>{props.zip}</span>
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
