import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const Experience = ({ entry }) => (
  <Row className="experience">
    <Col md={4}>
      <h4>{entry.name}</h4>
      <p>{entry.start_date} - {entry.end_date}</p>
    </Col>
    <Col md={8}>
      <p><strong>{entry.title}</strong></p>
      <p className="description">{entry.description}</p>
      <div className="details">
        <span className="detail">
          <span className="glyphicon glyphicon-map-marker" /> {entry.location}
        </span>
        <span className="divider">|</span>
        <span className="detail">
          <span className="glyphicon glyphicon-link" />
          <a href={entry.website} target="_blank" className="link">{entry.website}</a>
        </span>
      </div>
    </Col>
  </Row>
);

Experience.propTypes = {
  entry: PropTypes.shape({
    name: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export default Experience;
