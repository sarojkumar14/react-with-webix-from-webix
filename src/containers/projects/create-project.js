import React, { Component } from 'react';
import Webix from '../../Webix';


function getForm(){
  return {
    view:"form", width:400, elements:[
        { view:"text", label:'Login', name:"user.login" },
        { view:"text", label:'Email', name:"user.email" },
        { view:"button", value: "Submit", click:function(){
            var form = this.getParentView();
            if (form.validate())
                window.webix.message("All is correct");
            else
            window.webix.message({ type:"error", text:"Form data is invalid" });
        }}
    ],
    rules:{
        "user.email":window.webix.rules.isEmail,
        "user.login":window.webix.rules.isNotEmpty
    }
  };
}

export default class CreateProject extends Component {
    constructor() {

        super();
    
        this.state = {
           data:{'user.login':'saroj'}
        //user:{"user":{"login":'saroj'}}
        }
      }
  render() {
    return (
      <div>
         <Webix ui={getForm()} data={this.state.data}/>
      </div>
    );
  }
}

