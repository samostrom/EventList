import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import profileService from '../../utils/profileService';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import CreateEventPage from '../CreateEventPage/CreateEventPage';
import EventsPage from '../EventsPage/EventsPage';
import eventService from '../../utils/eventService';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: userService.getUser(),
      profile: null,
      events: [],
    };
  }

  componentDidMount = async() => {
    if(!this.state.user) return;
    const profile = await profileService.getOne()
    this.setState({profile})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user:null, profile: null});
  }

  handleUpdateProfile = async(profileData) => {
      await profileService.update(profileData);
      this.setState(
        {profile: profileData },
        () => this.props.history.push("/profiles")
      );
  };

  handleAddEvent = async(eventData) => {
    const newEvent = await eventService.create(eventData);
    console.log(eventData)
    this.setState((state) => ({
      events: [...state.events, newEvent]
      }),
      () => this.props.history.push("/events")
    );
  };

  render(){
    return(
      <div className="AppContainer">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
          
        />
        <Switch>
          <Route exact path='/createEvent' render={() =>
            <CreateEventPage
              user={this.state.user}
              profile={this.state.profile}
              handleAddEvent={this.handleAddEvent}
            />
          }/>
          <Route exact path='/events' render={() =>
            <EventsPage
              user={this.state.user}
              profile={this.state.profile}
              events={this.state.events}
            />
          }/>
          <Route exact path='/editProfiles' render={({history}) =>
            <EditProfilePage
              history={history}
              user={this.state.user}
              profile={this.state.profile}
              handleUpdateProfile={this.handleUpdateProfile}
            />
          }/>
          <Route exact path='/profiles' render={() =>
            <ProfilePage
              user={this.state.user}
              profile={this.state.profile}
            />
          }/>
          <Route exact path='/' render={() => 
            <LandingPage
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history = {history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage 
              history = {history}
              handleSignupOrLogin={this.handleSignupOrLogin} 
            />
          }/>
        </Switch>
      </div>
      
    )
  }
}


export default App;