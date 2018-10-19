import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Bread3 from '../components/bread3.js';
import hatchback from '../images/hatchback.jpeg';
import { connect } from 'react-redux';

class Hatchbacks extends Component {
    state= {
        hatchbacks: [
            {carClass: 'hatchback', model: 'Audi A7'},
            {carClass: 'hatchback', model: 'Mini Cooper'},
            {carClass: 'hatchback', model: 'Volkswagen Golf'},
            {carClass: 'hatchback', model: 'Toyota Prius'},
            {carClass: 'hatchback', model: 'Fiat 500'},
            {carClass: 'hatchback', model: 'Kia Soul'},
            {carClass: 'hatchback', model: 'Chevrolet Volt'},
            {carClass: 'hatchback', model: 'Ford Focus'}
        ]
    }

    handleClick = (cars) => {
        this.props.addCar(cars)
    }


    render() {
        const { hatchbacks } = this.state
        const { cars }   = this.props
        let hatchbackList = hatchbacks.map((hatchback, i) => {
            let cName = cars.find(car => car.model === hatchback.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={hatchback.model}>
                    <p>{hatchback.model} <button  className={cName} onClick={() => this.handleClick(hatchback)}>{cName ? 'Added' : 'Add Car'}</button></p>
                </div>
                
            )
        });
        
        return (
            <div>
                <Bread3 title='Hatchbacks' />
                <div className ='modelBody'>
                <h2>Hatchbacks</h2>
                <h3>Select desired vehicles</h3>
                {hatchbackList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Hatchbacks);
