import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Pay.css';

const Pay = () => (
  <div id="pay">
    <Grid className="scroll-module">
      <h2 className="text-center">Pay Me Please :)</h2>
      <hr />
      <Row>
        <Col lg={6}>
          <a className="link" href="https://paypal.me/reketkun" target="_blank" rel="noopener noreferrer">
            <span className="fa fa-paypal" /> paypal.me/reketkun
          </a>
        </Col>
        <Col lg={6}>
          <span className="link">
            <span className="fa fa-vimeo-square" /> Venmo: @Richard-D-Truong
          </span>
        </Col>
        <Col lg={6}>
          <span className="link">
            <span className="fa fa-university" /> Zelle: reket1990@yahoo.com
          </span>
        </Col>
      </Row>
      <hr className="bottom-line" />
    </Grid>
  </div>
);

export default Pay;
