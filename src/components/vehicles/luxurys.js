import React, { Component } from 'react';
import Bread3 from '../../components/bread3.js';
import { connect } from 'react-redux';

class Luxurys extends Component {
    state= {
        luxurys: [
            {carClass: 'luxury', model: 'Lexus'},
            {carClass: 'luxury', model: 'BMW'},
            {carClass: 'luxury', model: 'Mercedez-Benz'},
            {carClass: 'luxury', model: 'INFINITI'},
            {carClass: 'luxury', model: 'Cadillac CT6'},
            {carClass: 'luxury', model: 'Jaguar XE'},
            {carClass: 'luxury', model: 'Porche Cayenne'},
            {carClass: 'luxury', model: 'Audi A4'}
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
        const { luxurys } = this.state
        const { cars }   = this.props
        let luxuryList = luxurys.map((luxury, i) => {
            let cName = cars.find(car => car.model === luxury.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={luxury.model}>
                    <p>{luxury.model} <button  className={cName} onClick={() => this.handleClick(luxury)}>{cName ? 'Remove' : 'Add Car'}</button></p>
                </div>   
            )
        });
        
        return (
            <div>
                <Bread3 title='Luxurys' />
                <div className ='modelBody'>
                <h2>Luxury Vehicles</h2>
                <h3>Select desired vehicles</h3>
                {luxuryList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Luxurys);


