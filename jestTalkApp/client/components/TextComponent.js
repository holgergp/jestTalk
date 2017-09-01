import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TextBlah = class TextComponent extends Component {
  render() {
    console.log(this.props);

    const { value } = this.props;
    return (
      <div className="Text">
        {value}
      </div>
    );
  }
};
Text.propTypes = {
  value: PropTypes.string.isRequired
};

export default TextBlah;
