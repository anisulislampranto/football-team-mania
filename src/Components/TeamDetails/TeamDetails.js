import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LeagueDetailsBody from '../TeamDetailsBody/TeamDetailsBody';
import './TeamDetails.css'
import Footer from '../Footer/Footer';
import TeamDetailsHeader from '../TeamDetailsHeader/teamDetailsHeader';


const TeamDetails = () => {
    const [teamInfo, setTeamInfo] = useState([]);
    const { leagueId } = useParams();

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamInfo(data.teams[0]))

    }, [leagueId])

    return (
        <div>
            <TeamDetailsHeader teamInfo={teamInfo} ></TeamDetailsHeader>
            <LeagueDetailsBody teamInfo={teamInfo} ></LeagueDetailsBody>
            <p className="league-detail-description"> {teamInfo.strDescriptionEN} </p>

            <Footer teamInfo={teamInfo} ></Footer>

        </div>

    );
};

export default TeamDetails;