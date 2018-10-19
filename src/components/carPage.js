import React from 'react';
import { Switch, Route } from "react-router-dom";
import Cars from '../components/cars.js';
import Sedans from '../components/sedans.js';
import Coupes from '../components/coupes.js';
import hatchbacks from '../components/hatchbacks.js';
import exotics from '../components/exotics.js';
import Pickups from '../components/pickups.js';
import Suvs from '../components/suvs.js';
import Vans from '../components/vans.js';
import Luxury from '../components/luxury.js';
import Classics from '../components/classics.js';
import Motos from '../components/motos.js';
import CarSelector from './carSelector';
import Err from "../components/error";


class CarPage extends React.Component {

    render() {
        return (
            <div className='groupItem'>

                <Switch>
                <Route path="/cars" component={Cars} exact/>
                <Route path="/cars/sedans" component={Sedans} />
                <Route path="/cars/coupes" component={Coupes} />
                <Route path="/cars/hatchbacks" component={hatchbacks} />
                <Route path="/cars/exotics" component={exotics} />
                <Route path="/cars/pickups" component={Pickups} />
                <Route path="/cars/suvs" component={Suvs} />
                <Route path="/cars/vans" component={Vans} />
                <Route path="/cars/luxury" component={Luxury} />
                <Route path="/cars/classics" component={Classics} />
                <Route path="/cars/motos" component={Motos} />
                {window.location.pathname.indexOf('car-selector') > -1 ? <Route path="/:car_id" component={CarSelector} /> : <Route component={Err} />}
                </Switch>
            </div>
        );
    }
}

export default CarPage;
