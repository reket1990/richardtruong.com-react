import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const generateStars = (name, value) => {
  const output = [];

  for (let counter = 0; counter < 5; counter += 1) {
    if (counter < value) {
      output.push(<span key={`${name}-${counter}`} className="fa fa-star starFull" />);
    } else {
      output.push(<span key={`${name}-${counter}`} className="fa fa-star starEmpty" />);
    }
  }

  return output;
};

const Skill = ({ entry1, entry2 }) => (
  <Row>
    <Col xs={8} md={4}>
      <h4>{entry1.name}</h4>
    </Col>
    { typeof entry1.value === 'number' ?
      <Col xs={4} md={2} className="value">
        { generateStars(entry1.name, entry1.value) }
      </Col>
      :
      <Col xs={4} md={2} className="value">
        { entry1.value }
      </Col>
    }

    <Col xs={8} md={4}>
      <h4>{entry2.name}</h4>
    </Col>
    { typeof entry2.value === 'number' ?
      <Col xs={4} md={2} className="value">
        { generateStars(entry2.name, entry2.value) }
      </Col>
      :
      <Col xs={4} md={2} className="value">
        { entry2.value }
      </Col>
    }
  </Row>
);

Skill.propTypes = {
  entry1: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  entry2: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};

export default Skill;
