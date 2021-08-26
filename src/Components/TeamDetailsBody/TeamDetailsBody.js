import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import Male from '../../FakeData/male.png';
import Female from '../../FakeData/female.png';
import './TeamDetailsBody.css';




const TeamDetailsBody = (props) => {
    const { strAlternate, strLeague, strCountry, strSport, strGender } = props.teamInfo;



    let image;
    const imageToBe = () => {
        if (strGender === 'Male') {
            image = <img className="team-image" src={Male} alt="" />
            return image;
        }
        else if (strGender === 'Female') {
            image = <img className="team-image" src={Female} style={{width: '350px'}}  alt=""/>
            return image;

        }
    }


    return (
        <div>
            <div className="details-section">
                <div className='details' >
                    <h3>{strAlternate}</h3>
                    <p> <FontAwesomeIcon icon={faMapMarker} /> League: {strLeague}</p>
                    <p> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                    <p> <FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</p>
                    <p> <FontAwesomeIcon icon={faVenusMars} />  Gender: {strGender}</p>
                </div>



                <div className="team-image-section" >
                    {
                        imageToBe()
                    }
                </div>

            </div>
        </div>
    );
};

export default TeamDetailsBody;