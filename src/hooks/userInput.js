// custom hook to handle input state, change & validation
import { useState } from 'react';

export const useInput = (initValue, validationFn) => {
  const [userInp, setUserInp] = useState(initValue);
  const [didEdit, setDidEdit] = useState(false);

  // validation - computed value based on state
  const inputIsValid = validationFn(userInp);

  const inputChangeHandler = (e) => {
    setUserInp(e.target.value);
    setDidEdit(false);
  };

  const loseFocusHandler = () => {
    setDidEdit(true);
  };

  return {
    userInp,
    didEdit,
    inputIsInvalid: didEdit && !inputIsValid,
    inputChangeHandler,
    loseFocusHandler,
  };
};
