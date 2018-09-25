import React, { Component } from 'react';
import Webix from '../../Webix';

function getUploader(save) {
    return {
        view:"form", rows: [
            { 
              view: "uploader", value: 'Upload file', autosend:false,
              name:"files",
              link:"mylist",  upload:"https://docs.webix.com/samples/21_upload/php/upload.php" 
            },
            {
              view:"list",  id:"mylist", type:"uploader",
              autoheight:true, borderless:true	
            },
            { view: "button", label: "Get value", click: function() {
              var text = this.getParentView().getValues();
              text = JSON.stringify(text, "\n");
              window.webix.message("<pre>"+text+"</pre>");
            }}
          ]
    }
}

export default class Uploader extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Webix ui={getUploader()} data={this.props.data} />
            </div>
        );
    }
}
