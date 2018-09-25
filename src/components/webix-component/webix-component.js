import React, { Component } from 'react';
import Webix from '../Webix';


function getFormOne(save,ss){
    return{
        view:"form", 
        id:"form_one",
        width:300,
        elements:[
            { view:"text", label:"Email", name:"email", value:ss},
            { view:"text", type:"password", label:"Password", name:"password"},
            { margin:5, cols:[
                { view:"button", value:"Login" , type:"form", click:function(){
                    if (save)
                      save(this.getFormView().getValues());
                  }},
                { view:"button", value:"Cancel"}
            ]}
        ]
    }  
}
function getFormTwo(){
    return{
        view:"form", 
        id:"log_form",
        width:300,
        elements:[
            { view:"text", label:"Email", name:"email"},
            { view:"text", type:"password", label:"Password", name:"password"},
            { margin:5, cols:[
                { view:"button", value:"Login" , type:"form"},
                { view:"button", value:"Cancel"}
            ]}
        ]
    }  
}


export default class WebixForm extends Component {
    constructor() {
        super();
    this.state={data:{"password":"ff"}}
    this.test=this.test.bind(this);
    this.webixref = React.createRef();
      }

      test(){
          alert();
          var formt=this.webixref;
          formt.current.ui.setValues({"password":"ffff"});
         // formt.ui.$$("grid").parse(data.grid());
      }
      
 
  render() {
    return (
        <div>
        
      <Webix ui={getFormOne(this.test,"testvalue")}  ref={this.webixref} data={this.state.data}/>
     
      </div>
    );
  }
}
