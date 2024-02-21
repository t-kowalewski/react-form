import { useState } from 'react';

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
  const emailIsInvalid = didEdit.email && !userInp.email.includes('@');

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
    // console.log(userInp);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={userInp.email}
            onBlur={() => loseFocusHandler('email')}
            onChange={(e) => {
              inputChangeHandler('email', e.target.value);
            }}
          />

          {emailIsInvalid && (
            <div className='control-error'>
              <p>Please provide valid email</p>
            </div>
          )}
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={userInp.password}
            onChange={(e) => {
              inputChangeHandler('password', e.target.value);
            }}
          />
        </div>
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
