import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Contact.css';
import Quote from './submodules/Quote';

const Contact = () => (
  <div id="contact">
    <Grid className="scroll-module">
      <h2 className="text-center">Contact</h2>
      <Quote
        quote="The biggest communication problem is we do not listen to understand. We listen to reply." // eslint-disable-line max-len
        author="Stephen R. Covey"
      />
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
      <hr className="bottom-line" />
    </Grid>
  </div>
);

export default Contact;
