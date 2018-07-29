import React, { Component } from 'react';
import { Link,Switch,Route,withRouter } from 'react-router-dom';

import './assets/App.css';

import Dashboard from './containers/dashboard/dashboard';
import Projects from './containers/projects/projects';
import MyTasks from './containers/my-tasks/my-tasks';
import NotFoundPage from './containers/other-pages/not-found-page';


const isAllowed = (user, rights) =>
  rights.some(right => user.rights.includes(right));

const hasRole = (user, roles) =>
  roles.some(role => user.roles.includes(role));

  const usert = {
    roles: ["user"],
    rights: ["can_view_articles"]
  };
  
  const adminPermision = {
    roles: ["Admin","PL","TL","PR","TR","Customer"],
    rights: ["can_view_articles", "can_view_users"]
  };

const SignOut=withRouter(({ history }) => (
      <button onClick={() => {
        localStorage.setItem("loginUser", null);
        history.push('/');
      }}>Sign out</button>
  )
);

class App extends Component {
  render() {
    let user=JSON.parse(localStorage.getItem("loginUser"));
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Hi {user.name}! Welcome to React</h1>
       <SignOut />
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {/* <li><Link to="/">Homes</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/my-tasks">My Tasks</Link></li> */}
            {hasRole(user, ["Admin","PL","TL","PR","TR","Customer"]) &&  <li><Link to="/">Homes</Link></li>}
      {hasRole(user, ['Admin']) &&  <li><Link to="/projects">Projects</Link></li>}
      {hasRole(user, ["Admin","PL","TL"]) && <li><Link to="/my-tasks">My Tasks</Link></li>}
      {hasRole(user, ['admin',"PR","TR"]) && <li><Link to="/prtr">PR TR</Link></li>}
          </ul>
       </nav>
       
        </header>
       
        <Switch>

        {hasRole(user, ["Admin","PL","TL","PR","TR","Customer"]) && <Route exact path='/' component={Dashboard} />}
      {hasRole(user, ['Admin']) && <Route path='/projects' component={Projects} />}
      {hasRole(user, ["Admin","PL","TL"]) && <Route path='/my-tasks' component={MyTasks} />}
      {hasRole(user, ['admin',"PR","TR"]) && <Route path='/prtr' component={()=>{<p>PR TR</p>}} />}



      {/* <Route exact path="/" component={Dashboard}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/my-tasks" component={MyTasks}/> */}
      <Route path="*" component={NotFoundPage}/>
    </Switch>


      </div>
    );
  }
}

export default App;
