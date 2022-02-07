import './UserFrom.css';
import { Button, Form } from 'react-bootstrap';

export default function UserFrom(props) {
    return (
        <>
            <Form className='user-form'>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >Name</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >lastName</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >Country</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >Email</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >Username</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle'> Gender</Form.Label>
                    <Form.Check name='gender' type="radio" label="male" inline />
                    <Form.Check name='gender' type="radio" label="female" inline />

                </Form.Group>


                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >Adress</Form.Label>

                    <Form.Control className='inputStyle' type="text" placeholder="Type Name" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className='labelStyle' >DateOfBirth</Form.Label>

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
        </>
    );
}
