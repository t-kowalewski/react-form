import { useRef, useState } from 'react';

export default function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const [submitError, setSubmitError] = useState({
    email: false,
    password: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted!');
    const email = emailRef.current.value;
    // const pass = passRef.current.value;

    const emailIsInvalid = !email.includes('@');
    if (emailIsInvalid) {
      setSubmitError((prevState) => ({ ...prevState, email: true }));
      return;
    }
    setSubmitError((prevState) => ({ ...prevState, email: false }));
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' ref={emailRef} />

          {submitError.email && (
            <div className='control-error'>
              <p>Please provide valid email</p>
            </div>
          )}
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' ref={passRef} />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat' type='reset'>
          Reset
        </button>

        <button className='button'>Login</button>
      </p>
    </form>
  );
}
