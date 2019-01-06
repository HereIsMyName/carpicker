import React, { Component } from 'react';
import Bread3 from '../../components/bread3';
import { connect } from 'react-redux';

class Sedans extends Component {
    state= {
        sedans: [
            {carClass: 'sedan', model: 'Honda Accord'},
            {carClass: 'sedan', model: 'Toyota Camry'},
            {carClass: 'sedan', model: 'Nissan Maxima'},
            {carClass: 'sedan', model: 'Chevrolet Cruise'},
            {carClass: 'sedan', model: 'Hyundai Sonata'},
            {carClass: 'sedan', model: 'Ford Fusion'},
            {carClass: 'sedan', model: 'Kia Optima'},
            {carClass: 'sedan', model: 'Volkswagen Passat'}
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
        const { sedans } = this.state
        const { cars }   = this.props
        let sedanList = sedans.map((sedan, i) => {
            let cName = cars.find(car => car.model === sedan.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={sedan.model}>
                    <p>{sedan.model} <button  className={cName} onClick={() => this.handleClick(sedan)}>{cName ? 'Remove' : 'Add Car'}</button></p>
                </div>
            )
        });
        
        return (
            <div>
                <Bread3 title='Sedans' />
                <div className ='modelBody'>
                <h2>Sedans</h2>
                <h3>Select desired vehicles</h3>
                {sedanList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Sedans);

