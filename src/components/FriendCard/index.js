import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    checkIfClicked: PropTypes.func.isRequired,
};

const FriendCard = ({
    id,
    name,
    image,
    occupation,
    location,
    checkIfClicked,
}) => (
  <span onClick={() => checkIfClicked(id)} className="remove">
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
     
     
        
     
    </div>
    </span>
  );

FriendCard.propTypes = propTypes;

export default FriendCard;
