import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Bread3 from '../components/bread3';
import suv from '../images/suv.jpeg';
import { connect } from 'react-redux';

class Suvs extends Component {
    state= {
        suvs: [
            {carClass: 'suv', model: 'Chevrolet Equinix'},
            {carClass: 'suv', model: 'Honda CR-V'},
            {carClass: 'suv', model: 'Nissan Pathfinder'},
            {carClass: 'suv', model: 'GMC Yukon'},
            {carClass: 'suv', model: 'Toyota Highlander'},
            {carClass: 'suv', model: 'Jeep Grand Cherokee'},
            {carClass: 'suv', model: 'Ford Explorer'},
            {carClass: 'suv', model: 'Buick Enclave'}
        ]
    }

    handleClick = (cars) => {
        this.props.addCar(cars)
    }


    render() {
        const { suvs } = this.state
        const { cars }   = this.props
        let suvsList = suvs.map((suvs, i) => {
            let cName = cars.find(car => car.model === suvs.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={suvs.model}>
                    <p>{suvs.model} <button  className={cName} onClick={() => this.handleClick(suvs)}>{cName ? 'Added' : 'Add Car'}</button></p>
                </div>
                
            )
        });
        
        return (
            <div>
                <Bread3 title='Suvs' />
                <div className ='modelBody'>
                <h2>Suvs</h2>
                <h3>Select desired vehicles</h3>
                {suvsList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      cars: state.cars
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (cars) => { dispatch({type: 'ADD_CAR', cars}) },
        deleteCar: (model) => { dispatch({type: 'DELETE_CAR', model}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suvs);
