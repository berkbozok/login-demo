import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '.';
import { validateForm } from '../utils/validateForm';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import { Navigate } from 'react-router-dom';

export default function LoginForm() {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  /* The useEffect performs the task on formSuccess */
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && formSubmit) {
      /* onFormSuccess do something */
      console.log('Success');
    } else console.log('Form has errors!');
  }, [formErrors, formValues, formSubmit]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prevFormValues => ({ ...prevFormValues, [name]: value }));
  };

  /* Checks form errors and pushes errors to formErrors object */
  const handleSubmit = e => {
    e.preventDefault();
    console.log(validateForm(formValues));
    setFormErrors(validateForm(formValues));
    setFormSubmit(true);
  };

  return (

      
    <form onSubmit={handleSubmit}>
     
      <div>

      {Object.keys(formErrors).length === 0 && formSubmit ? (
        <Navigate to="/success" />
      ) : (
        <pre>{JSON.stringify(toHaveFormValues, undefined, 2)}</pre>
      )}
      <br/>
        <p>{formErrors.email}</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <br/>
        <br/>
        <Button name="Login" className="loginBtn" />
        
      </div>
    </form>
  );
}
