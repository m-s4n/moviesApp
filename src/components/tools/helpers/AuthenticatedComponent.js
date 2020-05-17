import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loginSuccess, logout } from "../../../redux/actions/login/actionLogin";

function AuthenticatedComponent(props) {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:3000/test/gettest", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => response.data)
        .then(data => {
            if(!data.status){
                // token onaylanmaz ise
                // logout ile state boşaltılır ve local storage' dan silinir.
                props.logout();
            }
        })
    }
  });
  // state durumuna göre child component render edilir veya yönlendirilir.
  if(props.authorizationInfo.isAuthenticated){
      return (
          <div>
            {
                props.children
            }
          </div>
      )
  }
  else{
        return <Redirect to="/login"></Redirect>;
  }
}

const mapDispatchToProps = {
    login: loginSuccess,
    logout: logout,
  };
  
  function mapStateToProps(state) {
    return {
      authorizationInfo: state.authorizationReducer,
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(AuthenticatedComponent));
