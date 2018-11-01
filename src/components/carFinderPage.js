import React, { Component } from 'react';
import "@babel/polyfill";
import CarFinder from "./forms/car-finder";
import CarFinderResults from "../components/carFinder-results";
import carFacts from "../carFacts";


class CarFinderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChanged: false,
            cars: []
        }
    }

   submit = (data) => {
        let x, count = [], carLinks;
        for (let i in data) {
            x = this.sortValues(data[i], carFacts);
            count += x;
        }
        
        carLinks = count.split(',').sort().filter((i, idx, arr) => {
            let car = 0;
            for(let j = idx; j < arr.length; j++) {
                if(i.indexOf(arr[j]) > -1) car++;
                if(car === 3) return i;
            }
        });
        
        this.setState({isChanged: true});
        this.setState(prevState => ({
            cars: [...prevState, carLinks]
          }));
    }

    sortValues = (data, cf) => {
        
        let cat, feat, match, l, f;
        
        for (cat in cf) {
            if(cf.hasOwnProperty(cat))
            l = cf[cat];
            for (feat in l) {
                if(l.hasOwnProperty(feat))
                f = l[feat];
                if (data === f[1][0]) {
                    match = f[0].map((i) => { 
                        return i 
                    }) + ',';
                    break;
                }
            }
        }
        return match;
    }
    
    render() {
        return (
            <div>
                <h1 style={{ whiteSpace: 'nowrap' }}>Find Your Vehicle</h1>
                {!this.state.isChanged ? <CarFinder submit={this.submit.bind(this)} /> : <CarFinderResults displayCars={this.state.cars[0]} />}
            </div>
        );
    }
    
}

export default CarFinderPage;