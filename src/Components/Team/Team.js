import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Team.css'

const Team = (props) => {
    const {strTeam, strSport, strTeamLogo, idTeam} = props.team;
    const handlebutton = props.handlebutton;
    
    
    
    return (
        <div className="team">
            <img src={strTeamLogo} alt="" />
            <h2>{strTeam} </h2>
            <p>Sports Type:  {strSport}</p>
            <button onClick={()=>handlebutton(idTeam)} className='explore-button' >Explore <FontAwesomeIcon icon={faSignInAlt}  /> </button>
        </div>
    );
};

export default Team;