import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { Route, Switch, Link } from "react-router-dom";
import Home from "../components/home";
import CarPage from '../components/carPage';
import InfoPage from "../components/infoPage";
import Solutions from "../components/solutions";
import LoginPage from "../components/loginPage";
import SignupPage from "../components/signupPage";
import CarFinderPage from "../components/carFinderPage";
import CarSelector from './carSelector';
import InfoBox from "../components/infoBox";
import '../styles/sidebar_css.css';

class Side extends Component {
  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <div className='sidebar'>
          <Icon name='content' size='big' onClick={this.handleButtonClick} />
        </div>
        <Sidebar.Pushable>
        
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='thin'          
            >
              <Link to='/'>
              <Menu.Item>
                <Icon name='home' />
                Home
              </Menu.Item>
              </Link>
              <Link to='/cars'>
              <Menu.Item>
                <Icon name='car' />
                Vehicles
              </Menu.Item>
              </Link>
              <Link to='/selections'>
              <Menu.Item>
                <Icon name='list' />
                Your Selection
              </Menu.Item>
              </Link>
              <Link to='solutions'>
              <Menu.Item>
                <Icon name='road' />
                Solutions
              </Menu.Item>
              </Link>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <div className='stretch'>
                <Switch>
                  <Route path="/carpicker/" component={Home} exact />
                  <Route path="/selections" component={CarSelector} />
                  <Route path="/solutions" component={Solutions} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/signup" component={SignupPage} />
                  <Route path="/car-finder" component={CarFinderPage} />
                  <CarPage />
                </Switch>
                </div>
              </Segment>
            </Sidebar.Pusher>
          
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Side;
