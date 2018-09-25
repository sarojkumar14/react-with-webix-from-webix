import 'webix/webix.js';
import 'webix/webix.css';

export function _CreateProject() {
	return {
		view:"form",
		elements: [
			{ view: "text", label: "Project Code", name: "projectcode", labelWidth: 200, invalidMessage:"Project Code not be empty" },
			{ view: "text", label: "Project Title", name: "projecttitle", labelWidth: 200, invalidMessage:"Project Title not be empty"  },
			{ view: "text", label: "Project Author", name: "projectauthor", labelWidth: 200, invalidMessage:"Project Author not be empty"  },
			{
				view: "richselect", value: 1, label: "Project Lead Name", options: [
					{ value: "one", id: 1 },
					{ value: "two", id: 2 },
					{ value: "three", id: 3 },
					{ value: "four", id: 4 },
					{ value: "five", id: 5 }
				], labelWidth: 200
			},
			{ view: "text", label: "Edition", name: "edition", labelWidth: 200,  },
			{ view: "text", label: "ISBN", name: "isbn", labelWidth: 200, type: "number" },
			{ view: "text", label: "Short Title", name: "shorttitle", labelWidth: 200 },
			{
				view: "richselect", value: 1, label: "Copyright year", options: [
					{ value: "1992", id: 1 },
					{ value: "1993", id: 2 },
					{ value: "1994", id: 3 },
					{ value: "1995", id: 4 },
					{ value: "1996", id: 5 }
				], labelWidth: 200
			},
			{ view: "text", label: "No. of Chapters", name: "noofchapters", labelWidth: 200 },
			{ view: "text", label: "Project Description", name: "projectdescription", labelWidth: 200 },
			{ view: "datepicker", label: "Receipt Date", name: "", align: "right", labelWidth: 200 },
			{
				view: "richselect", id: "richSelectDropdown", css: "richSelectDropdown", label: "Mode of Receipt", value: "Document", name: "sourcetype", options: [
					{ value: "Document", id: "Document", },
					{ value: "Link", id: "Link" },
					{ value: "FTP", id: "FTP" },
					{ value: "Google Drive", id: "Google Drive" },
				], labelWidth: 200,
				on: {
					onChange: function (newv, oldv) {
						if (newv === "Link" || newv === "FTP" || newv === "Google Drive") {
							document.getElementById('uploader_container').style.display = "none";
							document.getElementById('submodeofreceipt').style.display = "block"
						} else {
							document.getElementById('submodeofreceipt').style.display = "none";
							document.getElementById('uploader_container').style.display = "block";
						}
					}
				}
			}
		],
		rules:{
            "projectcode":window.webix.rules.isNotEmpty,
            "projecttitle":window.webix.rules.isNotEmpty,
            "projectauthor":window.webix.rules.isNotEmpty,
          },
          elementsConfig:{
            //labelAlign:"right",
            on:{
                onChange:function(old_v, new_v){
                    this.getParentView().validate();
                }
            }
        }

	};
}

//window.webix.event(window, "resize", function(){ test.adjust(); })

export function _DueDate() {
	return {
		rows: [
			{
				view: "form", elements: [
					{ view: "datepicker", label: "Receipt Date", name: "receiptdate", labelWidth: 200 },
					{ view: "datepicker", label: "Publication Date", name: "publicationdate", labelWidth: 200 },
					{ view: "datepicker", label: "Permission Due Date", name: "permissionduedate", labelWidth: 200 },
					{ view: "datepicker", label: "Hi-res Due Date", name: "hi-resduedate", labelWidth: 200 },
					{ view: "datepicker", label: "Files To Printer Date", name: "filestoprinterdate", labelWidth: 200 },
					{ view: "datepicker", label: "Closing Date", name: "cloasing	date", labelWidth: 200 },
				]
			}

		]

	};
}


//customerdetails from
export function _customerdetails() {
	return {
		view: "form", elements: [
			{ view: "text", label: "Customer Code", name: "customercode", labelWidth: 200,},
			{ view: "text", label: "Customer Name", name: "customername", labelWidth: 200 },
			{ view: "text", label: "Customer Email ID", name: "customeremailid", labelWidth: 200 },
			{
				view: "richselect", value: 1, label: "Customer Location", options: [
					{ value: "one", id: 1 },
					{ value: "two", id: 2 },
					{ value: "three", id: 3 },
					{ value: "four", id: 4 },
					{ value: "five", id: 5 }
				], labelWidth: 200
			},
			{
				view: "richselect", value: 1, label: "Customer Category", options: [
					{ value: "one", id: 1 },
					{ value: "two", id: 2 },
					{ value: "three", id: 3 },
					{ value: "four", id: 4 },
					{ value: "five", id: 5 }
				], labelWidth: 200
			},
			{
				view: "richselect", value: 1, label: "Customer Subcategory", options: [
					{ value: "one", id: 1 },
					{ value: "two", id: 2 },
					{ value: "three", id: 3 },
					{ value: "four", id: 4 },
					{ value: "five", id: 5 }
				], labelWidth: 200
			},
			{
				view: "richselect", value: 1, label: "Currency", options: [
					{ value: "one", id: 1 },
					{ value: "two", id: 2 },
					{ value: "three", id: 3 },
					{ value: "four", id: 4 },
					{ value: "five", id: 5 }
				], labelWidth: 200
			},
		]

	};
}


//_ModeofReceipt from
export function _ModeofReceipt() {
	return {

		view: "richselect", label: "Source", value: "Document", name: "sourcetype", options: [
			{ value: "Document", id: "Document" },
			{ value: "Link", id: "Link" },
			{ value: "FTP", id: "FTP" },
			{ value: "Google Drive", id: "Google Drive" },
		], labelWidth: 200
	};
}


export function _Submodeofreceipt() {
	return {

		view: "form", elements: [
			{ view: "text", label: 'Link', name: "", labelWidth: 200 },
			{ view: "text", label: 'User Name', name: "", labelWidth: 200 },
			{ view: "text", label: 'Password', name: "", labelWidth: 200 },
		]
	};
}


window.webix.type(window.webix.ui.list, {
	name: "myUploader",
	template: function (f, type) {
		var html = "<div class='overall'><div class='name'>" + f.name + "</div>";
		html += "<div class='status'>";
		html += "<div class='progress " + f.status + "' style='width:" + (f.status === 'transfer' || f.status === "server" ? f.percent + "%" : "0px") + "'></div>";
		html += "<div class='message " + f.status + "'>" + type.status(f) + "</div>";
		html += "</div>";
		html += "<div class='process_detail'>";
		html += "<span class='date-up'>28/06/2018 </span>";
		html += "<span class='time-up'>09:20 AM</span>";
		html += "<span class='size'>" + f.sizetext + "</span>";
		html += "<span class='remove_file'><span style='color:#AAA' class='cancel_icon'></span></span>";
		html += "</div>";
		html += "</div>";
		return html;
	},
	status: function (f) {
		var messages = {
			server: "Done",
			error: "Error",
			client: "Ready",
			transfer: f.percent + "%"
		};
		return messages[f.status]

	},
	on_click: {
		"remove_file": function (ev, id) {
			window.$$(this.config.uploader).files.remove(id);
		}
	},
	//height: 35
});

export function _Upload_form() {
	return {
		view: "form", type: "line", rows: [
			{ view: "uploader", id: "upl1", height: 80, align: "center", type: "iconButton", icon: "upload", label: "Drag and Drop your files here", autosend: true, link: "mylist", upload: "php/upload.php" },
			{ borderless: true, view: "list", id: "mylist", type: "myUploader", Height: 100 }
		]
	};
}

var cog = "<span class='webix_icon fa fa-trash-o'></span>";
var cog2 = "<span class='webix_icon fa fa-pencil-square-o'></span>";

export function _Select_Approver() {
	return {

		view: "datatable", type: "line",
		columns: [
			{ id: "name", header: "Name", fillspace: true  },
			{ id: "email", header: "Email", width: 150},
			{ id: "type", header: "Type", width: 150 },
			{ id: "Icons Buttons", header: "", width: 80, template: cog2 + cog }
		],
		data: [
			{ id: 1, name: "Lucky Jovial", email: "luckyjoival@yopmail.ocm", type: "integra_file.doc" },
			{ id: 2, name: "Donald Trump", email: "donaldtrump@yopmail.com", type: "integra_file.doc" },

		],
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
				document.getElementById('appr_alt_sh').classList.remove('hide');
			}
		},
		autoheight: true,
		scroll:false,
	}
}

export function _Add_Select_Approver() {
	return {
		view: "form",
		borderless: true,
		elements: [
			{ view: "text", label: 'Name', name: "",  labelWidth: 200 },
			{ view: "text", label: 'Email', name: "",  labelWidth: 200 },
			{
				view: "richselect", label: 'Role Type', name: "", options: [
					{ value: "Select", id: 1 },
					{ value: "Approver", id: 2 },
				], labelWidth: 200
			},
		]
	}
}


// selector  popup


//services
export function _Select_Services() {
	return {
		view: "datatable",
		columns: [
			{ id: "research", header: "Research", fillspace: true },
			{ id: "noofchapters", header: "No.of chapters / Assets", width: 150},
			{ id: "attachement", header: "Attachements", width: 150 },
			{ id: "duedate", header: "Due Dates", width: 150},
			{ id: "comments", header: "Comments", width: 150},
			{ id: "Icons Buttons", header: "", width: 80, template: cog2 + cog }
		],
		data: [
			{ id: 1, research: "Photo Research Batch -1", noofchapters: 10, attachement: "integra_file.doc", comments: "dummy content", duedate: "18/06/2018" },
			{ id: 2, research: "Photo Clearance", noofchapters: 11, attachement: "integra_file.doc", comments: "dummy content", duedate: "18/06/2018" },
			{ id: 3, research: "Text Assessment", noofchapters: 15, attachement: "integra_file.doc", comments: "dummy content", duedate: "18/06/2018" },
			{ id: 4, research: "Photo Research Batch -2", noofchapters: 25, attachement: "integra_file.doc", comments: "dummy content", duedate: "18/06/2018" }
		],
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
		scroll:false,
	}
}


export function _add_Services() {
	return {
		view: "form",
		borderless: true,
		elements: [
			{ view: "text", label: 'Service', name: "",  labelWidth: 200 },
			{ view: "text", label: 'No. of Chapters / Assests', name: "",  labelWidth: 200 },
			{ view: "text", label: 'Due Date', name: "",  labelWidth: 200 },
			{ view: "text", label: 'Comments', name: "",  labelWidth: 200 },
		]
	}
}





window.webix.type(window.webix.ui.list, {
	name: "myUploaderx",
	template: function (f, type) {
		var html = "<div class='overall'><div class='name'>" + f.name + "</div>";
		html += "<div class='status'>";
		html += "<div class='progress " + f.status + "' style='width:" + (f.status === 'transfer' || f.status === "server" ? f.percent + "%" : "0px") + "'></div>";
		html += "<div class='message " + f.status + "'>" + type.status(f) + "</div>";
		html += "</div>";
		html += "<div class='process_detail'>";
		html += "<span class='date-up'>28/06/2018 </span>";
		html += "<span class='time-up'>09:20 AM</span>";
		html += "<span class='size'>" + f.sizetext + "</span>";
		html += "<span class='remove_file'><span style='color:#AAA' class='cancel_icon'></span></span>";
		html += "</div>";
		html += "</div>";
		return html;
	},
	status: function (f) {
		var messages = {
			server: "Done",
			error: "Error",
			client: "Ready",
			transfer: f.percent + "%"
		};
		return messages[f.status]

	},
	on_click: {
		"remove_file": function (ev, id) {
			window.$$(this.config.uploader).files.remove(id);
		}
	}, autoheight: true,
});

export function _add_Services_uploader() {
	return {
		view: "form", type: "line", rows: [
			{ view: "uploader", id: "upl2", height: 80, align: "center", type: "iconButton", icon: "upload", label: "Drag and Drop your files here", autosend: true, link: "service_mylist", upload: "php/upload.php" },
			{ borderless: true, view: "list", id: "service_mylist", type: "myUploaderx", Height: 100 }
		]
	}

}



export function _comments() {
	return {

		view: "form", elements: [
			{ view: "textarea", name: "comments", height: 100,  placeholder: "Enter your comments...." }
		]
	}
}

// footer button
export function _create_Footer(onSubmit) {
	return {
		view: "toolbar",
		width: 300,
		elements: [
			{ view: "button", label: "Cancel", autowidth: true },
			{ view: "button", label: "Save", autowidth: true },
			{ view: "button", label: "Submit", type: "form", autowidth: true,click:function(){
				if (onSubmit)
				onSubmit(this.getFormView().getValues());
			  }},
		]
	}
}

//budget
export function _Create_budget() {
	return {
		view: 'form',
		rows: [
			{ view: "text", label: "Photo Budget", name: "photobudget", labelWidth: 200 },
			{ view: "text", label: "Text Budget", name: "textbudget", labelWidth: 200 },
			{ view: "text", label: "Media Budget", name: "mediabudget", labelWidth: 200 },
			{ view: "text", label: "Total Budget", name: "totalbudget", labelWidth: 200 },
		]
	}
}


// select and approver button
export function _select_button() {
	return {
		view: "toolbar",
		width: 300,
		elements: [
			{ view: "button", label: "Cancel", id: "cusAccess_Cancel", css: "alt-btn2", autowidth: true, click: "document.getElementById('appr_alt_sh').classList.add('hide')" },
			{ view: "button", label: "Save", id: "cusAccess_Save", type: "form", autowidth: true },
		]
	}
}

// service button
export function _service_button() {
	return {
		view: "toolbar",
		width: 300,
		elements: [
			{ view: "button", label: "Cancel", id: "service_Cancel", css: "ser-btn2", autowidth: true, click: "document.getElementById('service_alt_sh').classList.add('hide')" },
			{ view: "button", label: "Save", id: "service_Save", type: "form", autowidth: true },
		]
	}
}
