import React, { Component } from 'react';
import InfoBox from "../components/infoBox";
import '../styles/carPages.css';

class Solutions extends Component {


    render() {
        return (
            <div>
                <div className='infoBody'>
                    <h2>Solutions</h2>
                    <p>Solve all your problems with choosing your favorite vehicles. Just search this site to find the vehicles of
                        your liking. Then select your vehicles and they are nicely displayed on the selections page.
                    
                    </p>
                    {/* <p>There are many problems that need to be addressed dealing with cars and how they are operated. Here we will 
                        discuss a few possible options that may deal with some of these issues.</p>
                    <h3>Safety</h3>
                    <p>One of the most important issues when driving is safety. Whether passengers of a vehicle or pedestrians,
                        safety should always be taken into consideration when it comes to the design and technologies used in the
                        production of a vehicle.
                    </p>
                    <h4>Collision Avoidance</h4>
                    <p>Probably at the top of the list of most important safety improvements is Collision avoidance. With collision 
                        avoidance, a vehicle can determine if a collision is imminent and automatically stop the vehicle or possibly 
                        evenmove out the path of another vehicle or object. This technology is currently in use and will be of great 
                        benefit when it is improved and becomes standard.
                    </p>
                    <h4>Electronic Stability Control</h4>
                    <p>Just as important as collision avoidance is electronic stability control. Loosing control is one of the other 
                        primary causes of traffic accidents. With the implementation of this system, a vehicles computer can determine
                        if a vehicle is losing traction and can prevent skidding. This is done through the application of variable braking
                        to the right wheel at the right time.
                    </p>
                    <h3>Traffic Management</h3> */}
                </div>
                <InfoBox />
            </div>
        );
    }
}

export default Solutions;