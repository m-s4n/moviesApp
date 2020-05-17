import React, { useState } from "react";
import TextInput from "../components/tools/forms/TextInput";
import { Button } from "semantic-ui-react";
import {Redirect} from 'react-router-dom';

function LoginForm({ login, authorizationInfo}) {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // error nesnesinde hata yoksa işlem yapılır
    if (Object.keys(error).length === 0) {
      login(loginInfo.username, loginInfo.password);
    }
  };

  const onHandleChange = (e) => {
    let { name, value } = e.target;
    value = value.toString().trim();
    setLoginInfo((currentLoginInfo) => ({
      ...currentLoginInfo,
      [name]: value,
    }));

    // validation
    formValidator(name, value);
  };

  const usernameValidator = (name, value) => {
    if (name === "username" && value.length < 3) {
      setError((currentError) => ({
        ...currentError,
        [name]: "En az 3 karakter olmalıdır",
      }));
    } else if (name === "username" && value.length >= 3) {
      let newError = { ...error };
      delete newError[name];
      setError(newError);
    }
  };

  const passwordValidator = (name, value) => {
    if (name === "password" && value.length < 3) {
      setError((currentError) => ({
        ...currentError,
        [name]: "En az 3 karakter olmalıdır",
      }));
    } else if (name === "password" && value.length >= 3) {
      let newError = { ...error };
      delete newError[name];
      setError(newError);
    }
  };
  const formValidator = (name, value) => {
    usernameValidator(name, value);
    passwordValidator(name, value);
  };

  if (!authorizationInfo.isAuthenticated || !authorizationInfo) {
    return (
      <div>
        <form className="ui form" onSubmit={handleSubmit}>
          <TextInput
            name="username"
            placeHolder="Enter User Name"
            label="User Name"
            onChange={onHandleChange}
            error={error}
            value={loginInfo.username}
          />
          <TextInput
            name="password"
            placeHolder="Enter Password"
            label="Password"
            onChange={onHandleChange}
            error={error}
            value={loginInfo.password}
          />

          <div className="field">
            <Button animated="fade" type="submit">
              <Button.Content visible>Alanları doldurun</Button.Content>
              <Button.Content hidden>Login</Button.Content>
            </Button>
          </div>
        </form>
      </div>
    );
  } else {
    return <Redirect to="/movies"></Redirect>;
  }
}

export default LoginForm;
