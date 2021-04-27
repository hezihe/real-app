import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="Welcome to Business Cards App" />
        <div className="row">
          <div className="col-12">
            <p>Create your own business card for free!!</p>
          </div>
        </div>

        <img src="https://cdn.pixabay.com/photo/2015/09/17/12/02/business-card-943996_960_720.jpg" className="img-fluid" alt="homeBusinessCard" />
      </div>
    );
  }
}

export default Home;
