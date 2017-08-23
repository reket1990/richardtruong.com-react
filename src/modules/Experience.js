import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Experience extends Component {
  render() {
    var entry = this.props.entry;

    return (
      <Row className="experience">
        <Col md={4}>
          <h4>{entry.name}</h4>
          <p>{entry.start_date} - {entry.end_date}</p>
        </Col>
        <Col md={8}>
          <p><strong>{entry.title}</strong></p>
          <p className="description">{entry.description}</p>
          <div className="location">
            <span className="glyphicon glyphicon-map-marker" /> {entry.location}
          </div>
        </Col>
      </Row>
    );
  }
}

export default Experience;
