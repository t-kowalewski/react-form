import { useInput } from '../hooks/userInput.js';

import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import Input from './Input.jsx';

export default function Login() {
  // Validation Helper Fn-s
  const emailIsValid = (email) => {
    return isEmail(email) && isNotEmpty(email);
  };
  const passIsValid = (password) => {
    return hasMinLength(password, 6);
  };

  // Use custom useInput hook for each input
  const {
    userInp: emailInp,
    inputChangeHandler: emailChangeHandler,
    loseFocusHandler: emailLoseFocusHandler,
    inputIsInvalid: emailIsInvalid,
  } = useInput('', emailIsValid);

  const {
    userInp: passInp,
    inputChangeHandler: passChangeHandler,
    loseFocusHandler: passLoseFocusHandler,
    inputIsInvalid: passIsInvalid,
  } = useInput('', passIsValid);

  const submitHandler = (e) => {
    e.preventDefault();
    if (emailIsInvalid || passIsInvalid) {
      alert('Please provide valid input');
      return;
    }

    console.log('Submitted!');
    console.log(emailInp, passInp);
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
          value={emailInp}
          onChange={emailChangeHandler}
          onBlur={emailLoseFocusHandler}
          error={emailIsInvalid && 'Please provide valid email'}
        />

        <Input
          id='password'
          label='Password'
          type='password'
          name='password'
          value={passInp}
          onChange={passChangeHandler}
          onBlur={passLoseFocusHandler}
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
