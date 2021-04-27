import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="About Business Cards App" />
        <div className="row">
          <div className="col-12">
            <article>
              Create a business card like a professional business card designer
              and easily print it. Digital business card are very useful to
              share contacts.
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
