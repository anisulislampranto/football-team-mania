import React from 'react';
import './teamDetailsHeader.css'

const TeamDetailsHeader = (props) => {
    const {strTeamBanner} = props.teamInfo;
    return (
        <div className="details-banner" >
            <img src={strTeamBanner} alt="" />
        </div>
    );
};

export default TeamDetailsHeader;