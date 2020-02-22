import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const Wrapper = ({
  children
}) => <div className="wrapper">{children}</div>;

Wrapper.propTypes = propTypes;

export default Wrapper;
