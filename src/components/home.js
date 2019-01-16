import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css';


const Home = () => {
  return (
    <div>
      <Header as='h2' textAlign='center'>
        Select Your Favorite Cars
      </Header>
      <Header as='h3' textAlign='center'>Start <Link to='/about'>Here</Link></Header>
    </div>
  );
}


export default Home;
