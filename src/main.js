import React, { Component } from 'react';
import { Switch,Route ,Redirect} from 'react-router-dom';

import App from './App';
import Register from './containers/user-account-management/register';
import Login from './containers/user-account-management/login';
import ForgotPassword from './containers/user-account-management/forgot-password';
import WebixComponentPage from './containers/webix-component-page/webix-component-page'
import CreateProjectPage from './components/create-project/create-project-page'

class Main extends Component {
  render() {
    return (
      <div>
       <Switch>

      <Route exact path="/register" component={Register}/>
       <Route exact  path="/login" component={Login}/>
       <Route exact  path="/webix-component" component={WebixComponentPage}/>
       <Route exact path="/forgot-password" component={ForgotPassword}/>
       <Route exact path="/createProjectPage" component={CreateProjectPage}/>
       <PrivateRoute path='/' component = {App} />
       {/* <Route path="/" component={App}/> */}
       {/* <Route path="*" component={ForgotPassword}/> */}
    </Switch>
      </div>
    );
  }
}

//Private router function
const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) =>JSON.parse(localStorage.getItem('loginUser'))!=null
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}

export default Main;
