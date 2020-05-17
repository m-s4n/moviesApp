import React from "react";
import LoginForm from "../LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/actions/login/actionLogin";
function Login(props) {
  return (
    <div>
      <LoginForm login={props.login} authorizationInfo={props.authorizationInfo}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    authorizationInfo: state.authorizationReducer,
  };
}

const mapDispatchToProps = {
  login: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
