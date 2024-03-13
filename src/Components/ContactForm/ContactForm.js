import React, { useState } from 'react';
import { FormField, Button, Checkbox, Form, FormTextArea, Container, Grid, Input } from 'semantic-ui-react'

function ContactForm() {
    const submitForm = (e) => {
        console.log(e.target);
    }

    const [state , setState ] = useState({ firstname: '', email: '', lastname : '' , submittedFirstName: '', submittedLastName: '', submittedEmail: '',submittedPassword : ''});

    const handleChange = (e) => setState({ ...state,[e.target.name]: e.target.value });

    const handleSubmit = () => {
        const { firstname,lastname, email,password } = state;
        console.log(state);
    }

    const { firstname,lastname, email, password , submittedFirstName, submittedEmail,submittedLastName , submittedPassword} = state;

  return (
    <div className='contact-form'>
        <Container style={{padding : '20px' , width : '100vh' }}>
            <Form className='centered' size='huge' onSubmit={handleSubmit}>
                <FormField required>
                <label>Name</label>
                <input placeholder='First Name' name='firstname' value={firstname} onChange={handleChange}/>
                </FormField>
                <FormField required name='lastName'>
                <label>Last Name</label>
                <input placeholder='Last Name' name='lastname' value={lastname} onChange={handleChange}/>
                </FormField>
                <FormField
                    id='form-textarea-control-email'
                    control={Input}
                    label='Email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                {/* <FormField>
                <label>Email</label>
                <input placeholder='Email' />
                </FormField> */}
                <FormField required name='password'>
                <label>Password</label>
                <input placeholder='Password' name='password' value={password} onChange={handleChange}/>
                </FormField>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    </div>
  )
}

export default ContactForm