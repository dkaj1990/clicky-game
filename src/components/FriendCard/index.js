import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

const FriendCard = ({
  name,
  image,
  occupation,
  location,
}) => (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Occupation:</strong> {occupation}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
        </ul>
      </div>
    </div>
  );

FriendCard.propTypes = propTypes;

export default FriendCard;
