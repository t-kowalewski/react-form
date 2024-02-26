import { useState } from 'react';

export const Input = ({ id, type, name, error }) => {
  const [userInp, setUserInp] = useState('');
  const [didEdit, setDidEdit] = useState(false);

  // let inputIsInvalid;
  // if (type === 'email') {
  //   inputIsInvalid = didEdit && !userInp.includes('@');
  // }
  // if (type === 'password') {
  //   inputIsInvalid = didEdit && userInp.length < 6;
  // }
  const inputChangeHandler = (value) => {
    setUserInp(value);
    setDidEdit(false);
  };

  const loseFocusHandler = () => {
    setDidEdit(true);
  };

  return (
    <div className='control no-margin'>
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={userInp}
        onBlur={loseFocusHandler}
        onChange={(e) => {
          inputChangeHandler(e.target.value);
        }}
      />

      {inputIsInvalid && (
        <div className='control-error'>
          <p>Please provide valid {name}</p>
        </div>
      )}

      {inputIsInvalid && (
        <div className='control-error'>
          <p>Please provide valid {name}</p>
        </div>
      )}
    </div>
  );
};
