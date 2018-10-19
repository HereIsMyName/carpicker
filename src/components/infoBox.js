import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/carPages.css';



class InfoBox extends Component {
  constructor(props) {
    super(props);
      this.state = {
        car: ''
      }
  }

  cars =   [
    'classic',
    'coupe',
    'exotic',
    'hatchback',
    'luxury',
    'moto',
    'pickup',
    'sedan',
    'suv',
    'van'
  ]
  
  componentDidMount() {
    document.body.appendChild(document.getElementById('infoPop'));
    let randCar = this.cars[Math.floor(Math.random() * 9)];
    this.randomImage(randCar);
  }

  randomImage = (rand) => {
    this.setState({
      car:  <Link to={`/cars/${rand}s`}>
              <Image size='small' src={require(`../images/${rand}.jpeg`)}  />
              <p>{rand}</p>
            </Link>
    })
  }

  componentWillUnmount() {
    document.body.removeChild(document.getElementById('infoPop'));
  }

  exitBox = (e) => {
   e.target.parentElement.style.display = 'none';
  }

  render() {
    return (
      <div>
        <div id ='infoPop'>
          <Icon className='closeIcon' name='close' onClick={this.exitBox} />
          <h3>Recommended Cars</h3>
          <div className='carRecommend'>
            {this.state.car}
          </div>  
        </div>
      </div>
    );
  }
}

export default InfoBox;