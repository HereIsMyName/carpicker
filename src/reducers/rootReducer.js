const initState = {
  cars: []
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_CAR') {
    let newList = state.cars.filter(car => {
      return action.model !== car.model 
    })
    return {
      ...state, cars: newList
    }
  }
  else if(action.type === 'ADD_CAR'){
    let list = state.cars.filter(car => {
      if(action.cars.model !== car.model) {
        return car
      }
    })
    return {
      ...state, cars:[ ...list, action.cars]
    }
  }
  
  return state;
}

export default rootReducer;