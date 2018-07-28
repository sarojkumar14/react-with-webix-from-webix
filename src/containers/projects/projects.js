import React from 'react';
import { Link, Route } from 'react-router-dom';

import CreateProject from './create-project';

const Projects = ({ match }) => {
return( <div> <ul>
    <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
    <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>
    <li><Link to={`${match.url}/create-project`}>Create Project</Link></li>
  </ul>
  <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {
    match.params.name=='create-project'?<CreateProject />:match.params.name
    } </h3></div>)}/>
  {/* <Route path="/create-project" component={CreateProject}/> */}
  </div>)
}
export default Projects;

