import React from "react";
import "./LandingPage.scss";

import { connect } from "react-redux";


import Progress from "../components/Progress";
import BetsDataTable from "../components/BetsDataTable";
import Shell from "../components/Shell";
import ProgressEx from "../components/ProgressEx";

const LandingPage = () => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-2">
            <div className="card">
              <ProgressEx />
            </div>
          </div>
          
          <div className="col col-3 ">
            <div className="card h-100 ">
              <BetsDataTable />
            </div>
          </div>
          
          <div className="col col-2">
            <div className="card h-100">
              <Shell />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = state => ({});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(LandingPage);
