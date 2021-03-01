import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name,country,image,salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="components-container">
                 
            <div className="info-container">
                <img src={image} alt=""/>
                <h4>{name}</h4>
                <p>From : {country}</p>
                <h5>Salary :${salary}</h5>
                <button onClick={() => handleAddPlayer(props.player)} className="btn btn-success"><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
            </div>
        </div>
    );
};

export default Player;