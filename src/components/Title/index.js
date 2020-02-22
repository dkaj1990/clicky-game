import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Title = ({
  children
}) => <h1 className="title">{children}</h1>;

Title.propTypes = propTypes;

export default Title;
