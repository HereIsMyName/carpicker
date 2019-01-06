import React, { Component } from 'react';
import Bread3 from '../../components/bread3.js';
import { connect } from 'react-redux';

class Exotics extends Component {
    state= {
        exotics: [
            {carClass: 'exotic', model: 'Ferrari'},
            {carClass: 'exotic', model: 'Lamborghini'},
            {carClass: 'exotic', model: 'Mazerati'},
            {carClass: 'exotic', model: 'Bugatti'},
            {carClass: 'exotic', model: 'Lotus'}
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
        const { exotics } = this.state
        const { cars }   = this.props
        let exoticList = exotics.map((exotic, i) => {
            let cName = cars.find(car => car.model === exotic.model) ? 'picked': ''
            return (
                <div style={{margin: '0 auto', width: '60%',textAlign: 'center'}} key={exotic.model}>
                    <p>{exotic.model} <button className={cName} onClick={() => this.handleClick(exotic)}>{cName ? 'Remove' : 'Add Car'}</button></p>
                </div>      
            )
        });
        
        return (
            <div>
                <Bread3 title='Exotics' />
                <div className ='modelBody'>
                <h2>Exotics</h2>
                <h3>Examples</h3>
                {exoticList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Exotics);
