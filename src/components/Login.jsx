import { useRef } from 'react';

export default function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted!');
    console.log(emailRef.current.value, passRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' ref={emailRef} />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' ref={passRef} />
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
