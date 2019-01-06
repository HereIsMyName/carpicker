import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Header, Image, Grid } from 'semantic-ui-react';
import sedan from '../images/sedan.jpeg';
import suv from '../images/suv.jpeg';
import coupe from '../images/coupe.jpeg';
import hatchback from '../images/hatchback.jpeg';
import exotic from '../images/exotic.jpeg';
import pickup from '../images/pickup.jpeg';
import luxury from '../images/luxury.jpeg';
import moto from '../images/moto.jpeg';
import van from '../images/van.jpeg';
import classic from '../images/classic.jpeg';
import "../styles/carPages.css";


const Cars = () => {
  return (
    <div className='groupItem'>
      <Breadcrumb size='large' id='bread'>
      <Link to=''>
        <Breadcrumb.Section>Home</Breadcrumb.Section>
      </Link>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Cars</Breadcrumb.Section>
      </Breadcrumb>
      <br />
      <div className='carBody'>
      <Header as="h2" textAlign='center'>Vehicle Class</Header>
      <Header as='h3' color='blue' textAlign='center'>
        <Link to='/car-finder'>Can't decide?</Link>
      </Header>
      <Grid stackable divided='vertically' celled='internally' align='center'>
        <Grid.Row columns={5} >
          <Grid.Column>
            <Link to='/cars/sedans'>
              <Image size='small' src={sedan}/>
              <Header as='h4' textAlign='center'>Sedan</Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
          <Link to='/cars/coupes'>
            <Image size='small' src={coupe} />
            <Header as='h4' textAlign='center'>Coupe</Header>
          </Link>
          </Grid.Column>
          <Grid.Column>
          <Link to='/cars/hatchbacks'>
            <Image size='small' src={hatchback} />
            <Header as='h4' textAlign='center'>Hatchback</Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
          <Link to='/cars/exotics'>
            <Image size='small' src={exotic} />
            <Header as='h4' textAlign='center'>Exotic</Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
          <Link to='/cars/vans'>
            <Image size='small' src={van} />
            <Header as='h4' textAlign='center'>Van</Header>
            </Link>
          </Grid.Column>
        </Grid.Row >
        <Grid.Row columns={5}>
          <Grid.Column>
          <Link to='/cars/pickups'>
            <Image size='small' src={pickup} />
            <Header as='h4' textAlign='center'>Pickup</Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
          <Link to='/cars/suvs'>
            <Image size='small' src={suv} />
            <Header as='h4' textAlign='center'>SUV</Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
          <Link to='/cars/luxurys'>
            <Image size='small' src={luxury} />
            <Header as='h4' textAlign='center'>Luxury</Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
          <Link to='/cars/classics'>
            <Image size='small' src={classic} />
            <Header as='h4' textAlign='center'>Classic</Header>
            </Link>
          </Grid.Column>
          <Grid.Column>
          <Link to='/cars/motos'>
            <Image size='small' src={moto} />
            <Header as='h4'textAlign='center'>Motorcycle</Header>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    </div>

  );
}

export default Cars;