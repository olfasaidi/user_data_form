import './UserFrom.css';
import { Button, Form } from 'react-bootstrap';

export default function UserFrom(props) {
    return (
        <div className='user-form-container'>
            <h1>Contact Informations </h1>
            <Form className='user-form'>

                <Form.Group className="user-form-group mb-3">

                    <Form.Group className="user-form-field-3 mb-3">
                        <Form.Label className='user-form-label labelStyle' >Username</Form.Label>
                        <Form.Control className='user-form-input inputStyle' type="text" placeholder=" Type Name" />
                    </Form.Group>

                    <Form.Group className="user-form-field-3 mb-3">
                        <Form.Label className='user-form-label labelStyle' >Email</Form.Label>
                        <Form.Control className='user-form-input inputStyle' type="text" placeholder="  name@example.com" />
                    </Form.Group>

                    <Form.Group className="user-form-field-3 mb-3">
                        <Form.Label className='user-form-label labelStyle' >Date of Birth</Form.Label>
                        <Form.Control className='user-form-input inputStyle' type="date" placeholder=" Type date" />
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
                        <Form.Control id="countID" className='user-form-input inputStyle' type="text" placeholder=" Type country" />
                    </Form.Group>

                    <Form.Group className="user-form-field-2 mb-3">
                        <Form.Label className='user-form-label labelStyle' >Adress</Form.Label>
                        <Form.Control className='user-form-input inputStyle' type="text" placeholder=" Type address" />
                    </Form.Group>

                </Form.Group>



                <Form.Group className="user-form-group mb-3">

                    <Form.Group className="user-form-field-3 mb-3">
                        <Form.Label className='user-form-label labelStyle' >City</Form.Label>
                        <Form.Control className='user-form-input inputStyle' type="text" placeholder=" Type city" />
                    </Form.Group>

                    {/* <Form.Group className="user-form-field-3 mb-3">
                        <Form.Label className='user-form-label labelStyle' >State</Form.Label>
                        <Form.Control className='user-form-input inputStyle' type="text" placeholder="  choose" />
                    </Form.Group> */}

                    <Form.Group className="user-form-field-3 mb-3">
                        <Form.Label className='user-form-label labelStyle' >State</Form.Label>

                        <Form.Select className='user-form-input inputStyle' size="lg" >
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="user-form-field-3 mb-3">
                        <Form.Label className='user-form-label labelStyle' > Zip </Form.Label>
                        <Form.Control className='user-form-input inputStyle' type="text" placeholder=" Type zip" />
                    </Form.Group>

                </Form.Group>
                <hr></hr>

                <Button className='buttonS' variant="secondary">close</Button>{' '}
                <Button className='buttonS' variant="secondary">Save changes</Button>{' '}


            </Form>

        </div>
    );
}
