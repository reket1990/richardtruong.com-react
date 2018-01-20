import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './Quote.css';

const Quote = ({ quote, author, media, style }) => ( // eslint-disable-line object-curly-newline
  <div className="quote-container" style={style}>
    <div className="quote">“{quote}”</div>
    { author ?
      <div className="source">- {author}{ media ? <span>, {media}</span> : null }</div>
      : null
    }
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
  media: PropTypes.string,
  style: stylePropType,
};

Quote.defaultProps = {
  author: '',
  media: '',
  style: {},
};

export default Quote;
