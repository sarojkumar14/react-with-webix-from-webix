import React, { Component } from 'react';
import Webix from '../../Webix';

function getDatatable(save) {
    return {
        view: "datatable",
		columns: [
			{ id: "research", header: "Research", fillspace: true },
			{ id: "noofchapters", header: "No.of chapters / Assets", width: 150},
			{ id: "attachement", header: "Attachements", width: 150 },
			{ id: "duedate", header: "Due Dates", width: 150},
			{ id: "comments", header: "Comments", width: 150},
			{ id: "Icons Buttons", header: "", width: 80}
		],
		data: [],
		onClick: {
			"fa-trash-o": function (event, id, node) {
				var dtable = this;
				window.webix.confirm("Are you sure, to delete this?", function (action) {
					if (action === true) {
						dtable.remove(id.row)
						// here this refers to window.
					}

				});
			},
			"fa-pencil-square-o": function (event, id, node) {
				document.getElementById('service_alt_sh').classList.remove('hide');
			}
		},
		autoheight: true,
        scroll:false
    }
}

export default class Datatable extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Webix ui={getDatatable()} data={this.props.data} />
            </div>
        );
    }
}
