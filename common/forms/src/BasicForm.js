import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from "react"
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';

function BasicForm() {

    const [input, setInput] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        country: ''
    })

    const [record, setRecord] = useState([])

    const [validated, setValidated] = useState(false);

    function inputHandler(event) {
        let name = event.target.name;
        let value = event.target.value;
        setInput({ ...input, [name]: value })
    }

    function submitHandler(e) {
        e.preventDefault();
        const newRecord = { ...input }
        setRecord([...record, newRecord])


        // const form = e.currentTarget;
        // console.log(e.currentTarget.checkValidity());
        // if (form.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }

        // setValidated(true);
        // const newRecord = { ...input }
        // setRecord([...record, newRecord])
        
    }

    return (
        <>
            <Container className='mt-3'>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='username'>Name</Form.Label>
                        <Form.Control value={input.username} name='username' id='username' type="text" placeholder="Enter Name" onChange={inputHandler} required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control value={input.email} name='email' id='email' type="email" placeholder="Enter Email" onChange={inputHandler} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='phone'>Name</Form.Label>
                        <Form.Control value={input.phone} name='phone' id='phone' type="phone" placeholder="Enter Phone Number" onChange={inputHandler} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control value={input.password} name='password' id='password' type="password" placeholder="Enter Password" onChange={inputHandler} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="country">Disabled select menu</Form.Label>
                        <Form.Select id="country" name='country' value={input.country} onChange={inputHandler}>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>China</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant='primary' type='submit'>Submit</Button>
                </Form>

                <Row className='mt-5'>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                record.map((user) =>
                                    <tr>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.country}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default BasicForm