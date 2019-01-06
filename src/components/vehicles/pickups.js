import React, { Component } from 'react';
import Bread3 from '../../components/bread3';
import { connect } from 'react-redux';

class Pickups extends Component {
    state= {
        pickups: [
            {carClass: 'pickup', model: 'Chevrolet Silverado'},
            {carClass: 'pickup', model: 'Nissan Frontier'},
            {carClass: 'pickup', model: 'Honda Ridgeline'},
            {carClass: 'pickup', model: 'GMC Sierra'},
            {carClass: 'pickup', model: 'Toyota Tacoma'},
            {carClass: 'pickup', model: 'Toyota Tundra'},
            {carClass: 'pickup', model: 'Ford F-150'},
            {carClass: 'pickup', model: 'Dodge Ram'}
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
        const { pickups } = this.state
        const { cars }   = this.props
        let pickupList = pickups.map((pickup, i) => {
            let cName = cars.find(car => car.model === pickup.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={pickup.model}>
                    <p>{pickup.model} <button  className={cName} onClick={() => this.handleClick(pickup)}>{cName ? 'Remove' : 'Add Car'}</button></p>
                </div>
            )
        });
        
        return (
            <div>
                <Bread3 title='Pickups' />
                <div className ='modelBody'>
                <h2>Pickups</h2>
                <h3>Select desired vehicles</h3>
                {pickupList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Pickups);
