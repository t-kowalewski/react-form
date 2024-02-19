import { useState } from 'react';

export default function Login() {
  const [userInp, setUserInp] = useState({
    email: '',
    password: '',
  });

  const inputChangeHandler = (field, value) => {
    setUserInp((prevState) => {
      return {
        ...prevState,
        [field]: value,
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
            onChange={(e) => {
              inputChangeHandler('email', e.target.value);
            }}
          />
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
