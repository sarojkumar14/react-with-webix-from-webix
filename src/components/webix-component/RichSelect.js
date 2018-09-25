import React, { Component } from 'react';
import Webix from '../../Webix';

function getRichSelectForm(save,options) {
    return {
        view: "form",
        name: "richselect_form",
        width: 300,
        elements: [
            {
                view: "richselect",
                name: "richselect_id",
                label: "Choose",
                value: 1, options: options
            },
            { view: "text", label: "Email", name: "email" },
            { view: "button", label: "Save", name: "save",click:function(){
                save();
            } }
        ],
    }
}

export default class RichSelect extends Component {
    constructor() {
        super();
        this.state = {
                options: []
        }
    }



    render() {
        return (
            <div>
                <Webix ui={getRichSelectForm(this.props.save,this.props.options)} data={this.props.data} />
            </div>
        );
    }
}
