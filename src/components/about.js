import React, { Component } from 'react';
import '../styles/carPages.css';
import { Link } from 'react-router-dom';
import How1 from './../images/howto_1.png';
import How2 from './../images/howto_2.png';
import How3 from './../images/howto_3.png';
import How4 from './../images/howto_4.png';

class About extends Component {


    render() {
        return (
            <div>
                <div className='infoBody' style={{textAlign: 'center'}}>
                    <h2>How To</h2>
                    <p>
                        Search this site to find the <Link to='/cars'>Vehicles</Link> of your liking. 
                        Then select your vehicles and they are nicely displayed on the selections page.
                    </p>
                    <img src={How1} className='howto' alt='howto_1'/>
                    <img src={How2} className='howto' alt='howto_2'/>
                    <img src={How3} className='howto' alt='howto_3'/>
                    <img src={How4} className='howto' alt='howto_4'/>
                    <div className='howto'>
                        <p>
                            Select the class of vehicles of your choice. You can select the <Link to='/car-finder'>Can't decide</Link> option 
                            to narrow your selection
                        </p>
                    </div>
                    <div className='howto'>
                        <p>
                            You can then add and remove desired vehicle models. 
                        </p>
                    </div>
                    <div className='howto'>
                        <p>
                            The <Link to='/selections'>Selections</Link> button displays the number of vehicles selected. Click here to see a list of your selections.
                        </p>
                    </div>
                    <div className='howto'>
                        <p>
                            Here you can view and remove your selected vehicles.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
