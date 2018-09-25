import React, { Component } from 'react';
import Webix from '../../Webix';
import CreateProject from './Create-Project';



export default class CreateProjectPage extends Component {
    constructor() {
        super();
    this.state={}

      }
      
      componentDidMount(){
          this.setState({isload:true});
      }



  render() {
    return (
        <div>
      <CreateProject />
     
      </div>
    );
  }
}
