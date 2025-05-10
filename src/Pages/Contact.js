
import React, {useState} from 'react';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Contact.css';

const Contact = () => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState ('');

const handleSubmit = (e) => {
  e.preventDefault ();
  alert(`Thank you,${name}! /n Your message has been sent.`)
  setName('');
  setEmail ('');
  setMessage ('');
};

return (
  //Form component from bootstrap

  <div className='contact-page'>
    <Form onSubmit={handleSubmit} className='mt-4'>

      {/*Name section of the form where the user should enter their full name*/}
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Full Name</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Enter your full name here" 
      value={name} 
      onChange={ (e) => setName(e.target.value)} 
      required 
      />
      </Form.Group>

      {/* email adress */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email"
        placeholder="Enter email address here"  
        value={email} 
        onChange={ (e) => setEmail(e.target.value)} 
        required 
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={7}
        placeholder="Write your message here.."
        value={message}
        onChange={ (e) => setMessage(e.target.value)}
        />
        <Form.Text>
          Have any questions? 
          Tell us about your concerns.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

  </Form>
 </div>
);




};

export default Contact
