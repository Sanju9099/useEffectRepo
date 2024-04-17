import React, { useEffect, useState } from 'react';

import Card from '../../UI/Button/Card/Card';
import classes from './Login.module.css';
import Button from '../../UI/Button/Butotn';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredCollegeName, setEnteredCollegeName] = useState('');
  const [collegeNameValid, setCollegeNameValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollegeName.trim().length > 1
      );
  }, [enteredEmail, enteredPassword, enteredCollegeName])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const collegeNameChangeHandler = (event) => {
    setEnteredCollegeName(event.target.value)
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateCollegeNameHandler = () => {
    setCollegeNameValid(enteredCollegeName.trim().length > 1)
  }
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword, enteredCollegeName);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div 
        className={`${classes.control} ${
            collegeNameValid === false ? classes.invalid : ''
          }`}
        >
        <label htmlFor="college">College Name</label>
          <input
            type="text"
            id="college"
            value={enteredCollegeName}
            onChange={collegeNameChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;


