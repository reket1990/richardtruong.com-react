import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Grid className="scroll-module">
          <h2 className="text-center">Contact</h2>
          <hr />
          <Row>
            <Col lg={6}>
              <a href="https://www.linkedin.com/in/richard-truong/" target="_blank" rel="noopener noreferrer">
                <span className="fa fa-linkedin-square" /> www.linkedin.com/in/richard-truong
              </a>
            </Col>
            <Col lg={6}>
              <a href="mailto:richard_truong@hmc.edu">
                <span className="fa fa-envelope-square" /> richard_truong@hmc.edu
              </a>
            </Col>
          </Row>
          <hr className="footer-line" />
        </Grid>
      </div>
    );
  }
}

export default Contact;
