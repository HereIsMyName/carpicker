import React, { Component } from 'react';
import InfoBox from "../components/infoBox";
import '../styles/carPages.css';

class Solutions extends Component {


    render() {
        return (
            <div>
                <div className='infoBody'>
                    <h2>Solutions</h2>
                    <p>Search this site to find the vehicles of your liking. 
                        Then select your vehicles and they are nicely displayed on the selections page.
                    </p>
                </div>
                <InfoBox />
            </div>
        );
    }
}

export default Solutions;