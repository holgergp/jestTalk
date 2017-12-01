import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "./TextComponent.jsx";

const List = class ListComponent extends Component {
  render() {
    const { values } = this.props;
    const lis = values.map(elem => (
      <li key={elem.toString()}>
        <Text value={elem} />
      </li>
    ));
    return <ul>{lis}</ul>;
  }
};

List.PropTypes = { values: PropTypes.array.isRequired };
export default List;
