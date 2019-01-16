import React, { Component } from 'react';
import Bread3 from '../../components/bread3';
import { connect } from 'react-redux';

class Classics extends Component {
    state= {
        classics: [
            {carClass: 'classic', model: 'Chevrolet Bel Air'},
            {carClass: 'classic', model: 'Cadillac Series 62'},
            {carClass: 'classic', model: 'Buick Skylark'},
            {carClass: 'classic', model: 'JAGUAR MK V DHC'},
            {carClass: 'classic', model: 'Aston Martin DB5'},
            {carClass: 'classic', model: 'Corvette Sting Ray'},
            {carClass: 'classic', model: 'Datsun 240Z'}
        ]
    }

    handleClick = (model) => {
        const obj = this.props.cars.filter(car => {
             return car.model === model.model
        })
        if(!obj.length) {
            this.props.addCar(model);
            console.log(this.props.addCar)
        }
        else {
            this.props.deleteCar(obj[0].model)
        }
    }


    render() {
        const { classics } = this.state
        const { cars }   = this.props
        let classicList = classics.map((classic, i) => {
            let cName = cars.find(car => car.model === classic.model) ? 'picked': ''
            return (
                <div key={classic.model}>
                    <p>{classic.model} <button className={cName} onClick={() => this.handleClick(classic)}>{cName? 'Remove' : 'Add Car'}</button></p>
                </div>
                
            )
        });
        
        return (
            <div>
                <Bread3 title='Classics' />
                <div className ='modelBody'>
                <h2>Classics</h2>
                <h3>Select desired vehicles</h3>
                {classicList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Classics);
