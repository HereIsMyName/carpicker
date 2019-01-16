import React from 'react';
import { Switch, Route } from "react-router-dom";
import Cars from './cars.js';
import Sedans from './vehicles/sedans.js';
import Coupes from './vehicles/coupes.js';
import hatchbacks from './vehicles/hatchbacks.js';
import exotics from './vehicles/exotics.js';
import Pickups from './vehicles/pickups.js';
import Suvs from './vehicles/suvs.js';
import Vans from './vehicles/vans.js';
import Luxurys from './vehicles/luxurys.js';
import Classics from './vehicles/classics.js';
import Motos from './vehicles/motorcycles.js';
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
                    <Route path="/cars/luxurys" component={Luxurys} />
                    <Route path="/cars/classics" component={Classics} />
                    <Route path="/cars/motorcycles" component={Motos} />
                    <Route component={Err} />
                </Switch>
            </div>
        );
    }
}

export default CarPage;
