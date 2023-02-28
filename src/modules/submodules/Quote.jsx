import React from 'react';
import PropTypes from 'prop-types';
import './Quote.css';

function Quote({ quote, author, media }) {
  return (
    <div className="quote-container">
      <div className="quote">
        “
        {quote}
        ”
      </div>
      { author
        ? (
          <div className="source">
            -
            {author}
            { media ? (
              <span>
                ,
                {media}
              </span>
            ) : null }
          </div>
        )
        : null}
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
  media: PropTypes.string,
};

Quote.defaultProps = {
  author: '',
  media: '',
};

export default Quote;
