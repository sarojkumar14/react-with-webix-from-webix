import React from 'react';
import Webix from './../../Webix';
import * as data from './ceate-project-data';
import * as reuse from './iCore';

export default class CreateProject_ extends React.Component {
  constructor(props) {
    super(props);
}


  hideForm() {
    document.getElementById('submodeofreceipt').style.display = "none";
    document.getElementById('appr_alt_sh').classList.add('hide');
    document.getElementById('service_alt_sh').classList.add('hide');
  }

  render() {
    return (
      <div onLoad={this.hideForm.bind(this)} className="create-project-form">
        <div className="iR-row">
          <div className="iR-col-12 ir_tab" >



            {/* Second Colum Start */}
           
            <div className="iR-col-6 no-right-padding">

             

              <div className="iR-col-12 no-padding">
                {/* Customer Access Start */}
                <div aria-hidden="false" className="widget">
                  <div className="widget_header" onClick={reuse.toggleWidget.bind(this)}> Customer Access
                      <a href='#' tabIndex="0"><i className="fa fa-expand" title="Expand"></i> <i className="fa fa-compress" title="collapse"></i></a>
                  </div>
                  <div className="widget_body" id="expandable-4">
                    <div id="select_approver">
                      <Webix ui={data._Select_Approver()} ></Webix>
                    </div>
                    <div className="al-btn">
                      <button type="button" onClick={this.showForm.bind(this, "appr_alt_sh")} id="add_sel_approv" className="alt-btn app_btn" title="Add Select / Approver">
                      <img  alt="add to" /></button>
                      <div className="iR-col-12 alt-frm2 zoomIn animated" id="appr_alt_sh">
                        <div className="expand">Customer Access</div>
                        <div id="appr_alt">
                          <Webix ui={data._Add_Select_Approver()}></Webix>
                        </div>
                        <div className="btn_fun">
                          <div id="approver_btn" className="common_btn">
                            <Webix ui={data._select_button()} ></Webix>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Customer Access End */}
              </div>


            </div>
                      </div>

            
           
        </div>

        <div className="clearfix"></div>
        <div className="iR-col-12 iR-form-footer text-right">
          <div id="footer_btn" className="common_btn" >
            <Webix ui={data._create_Footer(this.props.onSubmit)} ></Webix>
          </div>
        </div>
      </div>
    )
  };

  showForm(_this, formID) {
    document.getElementById(_this).classList.remove('hide')
  }
}