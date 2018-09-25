import React, { Component } from 'react';
import RichSelect from '../../components/webix-component/RichSelect';
import Datatable from '../../components/webix-component/Datatable';
import Uploader from '../../components/webix-component/Uploader';

export default class WebixComponentPage extends Component {
    constructor() {
        super();
        this.state = {
                options: [],
                data:null
        }
        this.save=this.save.bind(this);
    }

    componentWillMount(){
        this.setState({options: [
            { "id": 1, "value": "aaa" },
            { "id": 2, "value": "b" },
            { "id": 3, "value": "c" }
        ],
    data:[
        { id: 1, research: "Photo Research Batch -1", noofchapters: 10, attachement: "integra_file.doc", comments: "dummy content", duedate: "18/06/2018" },
        { id: 2, research: "Photo Clearance", noofchapters: 11, attachement: "integra_file.doc", comments: "dummy content", duedate: "18/06/2018" },
        { id: 3, research: "Text Assessment", noofchapters: 15, attachement: "integra_file.doc", comments: "dummy content", duedate: "18/06/2018" },
        { id: 4, research: "Photo Research Batch -2", noofchapters: 25, attachement: "integra_file.doc", comments: "dummy content", duedate: "18/06/2018" }
    ]
    });
        
    }
    save(){
        this.setState({data:{email:"e@gmail.com",richselect_id:2}});
    }
    render() {
        return (
            <div>
                {/* <p>WebixComponentPage </p>
                <RichSelect data={this.state.data} save={this.save} options={this.state.options}/>
                <Datatable data={this.state.data} /> */}

                <Uploader />
            </div>
        );
    }
}

