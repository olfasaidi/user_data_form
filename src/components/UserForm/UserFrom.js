import './UserFrom.css';
import { Button, Form } from 'react-bootstrap';

export default function UserFrom(props) {
    return (
        <div className='user-form-container'>
            <Form className='user-form'>

                <Form.Group className="user-form-group mb-3">

			<Form.Group className="user-form-field-3 mb-3">
				<Form.Label className='user-form-label labelStyle' >Name</Form.Label>

				<Form.Control className='user-form-input inputStyle' type="text" placeholder="Type Name" />
			</Form.Group>

			<Form.Group className="user-form-field-3 mb-3">
				<Form.Label className='user-form-label labelStyle' >lastName</Form.Label>

				<Form.Control className='user-form-input inputStyle' type="text" placeholder="Type Name" />
			</Form.Group>

			<Form.Group className="user-form-field-3 mb-3">

				<Form.Label className='user-form-label labelStyle' >DateOfBirth</Form.Label>

				<Form.Control className='user-form-input inputStyle' type="text" placeholder="Type Name" />

			</Form.Group>

                </Form.Group>

		<Form.Group className="user-form-group mb-3">
			<Form.Group className="user-form-field-2 mb-3">

				<Form.Label className='user-form-label labelStyle' >Username</Form.Label>

				<Form.Control className='user-form-input inputStyle' type="text" placeholder="Type Name" />

			</Form.Group>

			<Form.Group className="user-form-field-2 mb-3">

				<Form.Label className='user-form-label labelStyle' >Email</Form.Label>

				<Form.Control className='user-form-input inputStyle' type="text" placeholder="Type Name" />

			</Form.Group>
		</Form.Group>

                <Form.Group className="user-form-field-1 mb-3">

                    <Form.Label className='labelStyle'> Gender</Form.Label>
                    <Form.Check name='gender' type="radio" label="male" inline />
                    <Form.Check name='gender' type="radio" label="female" inline />

                </Form.Group>

		{/* ### Modify below here ### */}

		<Form.Group className="mb-3">
			<Form.Label className='user-form-label labelStyle' >Country</Form.Label>

			<Form.Control className='user-form-input inputStyle' type="text" placeholder="Type Name" />
		</Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >Address</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >City</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >State</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >Zip Code</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

            </Form>
            <Button> Submit</Button>
        </div>
    );
}
