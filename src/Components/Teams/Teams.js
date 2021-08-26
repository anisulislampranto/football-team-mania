import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Team from '../Team/Team';
import './Teams.css'

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    const history = useHistory();
    const handlebutton = (leagueId) => {
        const path = `/teamDetails/${leagueId}`
        history.push(path)

    }

    return (
        <div className='Teams-container'>

            {
                teams.map(team => <Team
                    team={team}
                    handlebutton={handlebutton}
                ></Team>)
            }


        </div>
    );
};

export default Teams;