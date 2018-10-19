import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Bread3 from '../components/bread3';
import coupe from '../images/coupe.jpeg';
import { connect } from 'react-redux';

class Coupes extends Component {
    state= {
        coupes: [
            {carClass: 'coupe', model: 'Mazda6'},
            {carClass: 'coupe', model: 'Cadillac ATS'},
            {carClass: 'coupe', model: 'Ford Mustang'},
            {carClass: 'coupe', model: 'Dodge Challenger'},
            {carClass: 'coupe', model: 'Honda Civic'},
            {carClass: 'coupe', model: 'Cheverolet Camaro'},
            {carClass: 'coupe', model: 'Lexus RC'},
            {carClass: 'coupe', model: 'Nissan GT-R'}
        ]
    }

    handleClick = (cars) => {
        this.props.addCar(cars)
    }


    render() {
        const { coupes } = this.state
        const { cars }   = this.props
        let coupeList = coupes.map((coupe, i) => {
            let cName = cars.find(car => car.model === coupe.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={coupe.model}>
                    <p>{coupe.model} <button  className={cName} onClick={() => this.handleClick(coupe)}>{cName ? 'Added' : 'Add Car'}</button></p>
                </div>
                
            )
        });
        
        return (
            <div>
                <Bread3 title='Coupes' />
                <div className ='modelBody'>
                <h2>Coupes</h2>
                <h3>Select desired vehicles</h3>
                {coupeList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Coupes);