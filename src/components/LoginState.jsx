import { useState } from 'react';

import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import Input from './Input.jsx';

export default function Login() {
  const [userInp, setUserInp] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  // validation - computed value based on state
  const emailIsInvalid =
    didEdit.email && (!isEmail(userInp.email) || !isNotEmpty(userInp.email));
  const passIsInvalid = didEdit.password && !hasMinLength(userInp.password, 6);

  const inputChangeHandler = (field, value) => {
    setUserInp((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });

    setDidEdit((prevState) => {
      return {
        ...prevState,
        [field]: false,
      };
    });
  };

  const loseFocusHandler = (field) => {
    // console.log('fired');
    setDidEdit((prevState) => {
      return {
        ...prevState,
        [field]: true,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted!');
    console.log(userInp);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          id='email'
          label='Email'
          type='email'
          name='email'
          value={userInp.email}
          onChange={(e) => {
            inputChangeHandler('email', e.target.value);
          }}
          onBlur={() => loseFocusHandler('email')}
          error={emailIsInvalid && 'Please provide valid email'}
        />

        <Input
          id='password'
          label='Password'
          type='password'
          name='password'
          value={userInp.password}
          onChange={(e) => {
            inputChangeHandler('password', e.target.value);
          }}
          onBlur={() => loseFocusHandler('password')}
          error={passIsInvalid && 'Password should be at least 6 characters'}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat' type='button'>
          Reset
        </button>

        <button className='button'>Login</button>
      </p>
    </form>
  );
}
