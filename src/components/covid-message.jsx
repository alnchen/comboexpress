import React, { Component } from 'react';

export default class CovidMessage extends Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={`covid-message ${classes}`}>
            To our customers, <br/>
            <br/>
            <div className="indent">Combo Express will resume operation on <strong>Wednesday June 3rd, 2020. </strong>
            
            The health and well-being of our patrons and team is our #1 priority. We are committed to ensuring our restaurant provides a safe and clean environment, so you can continue to enjoy our food.</div>
            <br/>
            Thank you for your continued support. We hope to see you soon!
        </div>
    )
  }
}