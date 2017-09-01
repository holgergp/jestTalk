import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './TextComponent';

const List = class ListComponent extends Component {
  render() {
    const { values } = this.props;
    console.log('values', values);
    const lis = values.map(elem =>
      <li key={elem.toString()}>
        <Text value={elem} />
      </li>
    );
    console.log('lis', lis);
    return (
      <ul>
        {lis}
      </ul>
    );
  }
};

List.PropTypes = { values: PropTypes.array.isRequired };
export default List;
