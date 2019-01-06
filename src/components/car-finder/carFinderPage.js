

import React, { Component } from 'react';
import "@babel/polyfill";
import CarFinder from "./car-finder";
import CarFinderResults from "./carFinder-results";
import carFacts from "./carFacts";


class CarFinderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            isChanged: false
        }
    

        if(this.props.submit) {
            this.setState({isChanged: true});
        }
        this.submit = (cars) => {
            this.setState(prevState => ({
                cars: cars,
                isChanged: true
            }));
        }
    }
    
    
    render() {
        return (
            <div>
                <h1 style={{ whiteSpace: 'nowrap' }}>Find Your Vehicle</h1>
                {!this.state.isChanged ? <CarFinder submit={this.submit}/> : <CarFinderResults displayCars={this.state.cars} />}
            </div>
        );
    }
    
}

export default CarFinderPage;