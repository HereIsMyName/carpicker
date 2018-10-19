import React from 'react';
import { Image, Responsive } from 'semantic-ui-react';
import Navigation from './navigation';
import logo from '../images/logo.png';
import "../styles/nav.css";

const TopContainer = () => {
    return (
        <div className="top-container">
            <div id="logo">
                <Image size='small' src={logo} floated='right' />
            </div>
            <Responsive minWidth={780}>
                <Navigation />
            </Responsive>
        </div>
    );
}

export default TopContainer;