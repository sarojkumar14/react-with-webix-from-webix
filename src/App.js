import React, { Component } from 'react';
import { Link,Switch,Route,withRouter } from 'react-router-dom';

import './assets/App.css';

import Dashboard from './containers/dashboard/dashboard';
import Projects from './containers/projects/projects';
import MyTasks from './containers/my-tasks/my-tasks';
import NotFoundPage from './containers/other-pages/not-found-page';

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
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/my-tasks">My Tasks</Link></li>
          </ul>
       </nav>
       
        </header>
       
        <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/my-tasks" component={MyTasks}/>
      <Route path="/pagenotfound" component={NotFoundPage}/>
    </Switch>


      </div>
    );
  }
}

export default App;
