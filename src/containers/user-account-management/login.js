import React from 'react';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import Webix from '../../Webix';


function getForm(save){
  return {
    view:"form", 
    id:"log_form",
    width:300,
    elements:[
        { view:"text", label:"Email", name:"email"},
        { view:"text", type:"password", label:"Password", name:"password"},
        { margin:5, cols:[
            { view:"button", value:"Login" , type:"form",click:function(){
              if (save)
                save(this.getFormView().getValues());
            }},
            { view:"button", value:"Cancel"}
        ]}
    ]
};
}

class Login extends React.Component {

  constructor() {

    super();

    this.state = {
      redirectToReferrer: false,
      data:{'email':'Admin','password':1234}
    }
    this.login = this.login.bind(this);
  }

  login(user) {
      var users = [
        { "id": 1, "name": "Admin", "password": "1234","role":{"id":1,"name":"admin"} },
        { "id": 2, "name": "PL", "password": "1234","role":{"id":2,"name":"ProjectLead"} },
        { "id": 3, "name": "TL", "password": "1234","role":{"id":3,"name":"TeamLead"} },
        { "id": 4, "name": "PR", "password": "1234","role":{"id":4,"name":"PhotoResearcher"} },
        { "id": 5, "name": "TR", "password": "1234","role":{"id":5,"name":"TextResearcher"} },
        { "id": 6, "name": "Customer", "password": "1234","role":{"id":6,"name":"Customer"} }
      ];
      let loginUser=_.find(users, {'name': user.email,'password':user.password});
      localStorage.setItem("loginUser", JSON.stringify(loginUser));
    
      this.setState({ redirectToReferrer: true })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    
    return (
      <div>
        {/* <p>You must log in to view the page at {from.pathname}</p> */}
        {/* <button onClick={this.login}>Log in</button> */}
        <Webix ui={getForm(this.login)} data={this.state.data}/>
      </div>
    )
  }


}

export default Login
