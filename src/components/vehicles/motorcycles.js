import React, { Component } from 'react';
import Bread3 from '../../components/bread3.js';
import { connect } from 'react-redux';

class Motos extends Component {
    state= {
        motorcycles: [
            {carClass: 'motorcycle', model: 'Harley Davidson'},
            {carClass: 'motorcycle', model: 'Kawazaki'},
            {carClass: 'motorcycle', model: 'Yamaha'},
            {carClass: 'motorcycle', model: 'Ducati'},
            {carClass: 'motorcycle', model: 'Honda'},
            {carClass: 'motorcycle', model: 'BMW'},
            {carClass: 'motorcycle', model: 'Suzuki'}
        ]
    }

    handleClick = (model) => {
        const obj = this.props.cars.filter(car => {
             return car.model === model.model
        })
        if(!obj.length) {
            this.props.addCar(model);
        }
        else {
            this.props.deleteCar(obj[0].model)
        }
    }


    render() {
        const { motorcycles } = this.state
        const { cars }   = this.props
        let motoList = motorcycles.map((motorcycle, i) => {
            let cName = cars.find(car => car.model === motorcycle.model) ? 'picked': ''
            return (
                <div key={motorcycle.model}>
                    <p>{motorcycle.model} <button  className={cName} onClick={() => this.handleClick(motorcycle)}>{cName ? 'Remove' : 'Add'}</button></p>
                </div> 
            )
        });
        
        return (
            <div>
                <Bread3 title='Motorcycles' />
                <div className ='modelBody'>
                <h2>Motorcycles</h2>
                <h3>Select desired vehicles</h3>
                {motoList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Motos);


