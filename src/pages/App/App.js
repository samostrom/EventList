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
import EventDetailPage from '../EventDetailPage/EventDetailPage';
import EditEventPage from '../EditEventPage/EditEventPage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: userService.getUser(),
      profile: null,
      events: [],
      inputValue: '',
      SearchResults: [], 
    };
  }

  componentDidMount = async() => {
    if(!this.state.user) return;
    const profile = await profileService.getOne()
      this.setState({profile})
    const events = await eventService.getAll()
      this.setState({events});
  }

  handleOnChangeSearch = (e) => {
    this.setState({  
      inputValue: e.target.value
    })
    
  }


  handleSignupOrLogin = async() => {
    this.setState({user: userService.getUser()});
    const profile = await profileService.getOne()
    this.setState({profile})
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

  handleDeleteEvent = async(id) => {
    await eventService.deleteOne(id);
    this.setState((state) => ({
      events: state.events.filter((e) => e._id !== id),
    }),
    () => this.props.history.push("/events")
    );
  };


  handleAddEvent = async(eventData) => {
    const newEvent = await eventService.create(eventData);

    this.setState((state) => ({
      events: [...state.events, newEvent]
      }),
      () => this.props.history.push("/events")
    );
  };

  handleUpdateEvent = async(eventData) => {
    const updatedEvent = await eventService.update(eventData);
    const newEventArray = this.state.events.map((e) => 
      e._id === updatedEvent._id ? updatedEvent : e
    );
    this.setState(
      {events: newEventArray}, () => this.props.history.push("/events")
    );
    
  };

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-3">
        
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleOnChangeSearch={this.handleOnChangeSearch}
          inputValue={this.state.inputValue}
          />
          </div>
          <div className="col-9 py-4 align-items-md-start">
          <h1 className="Header"><u>
          Event&nbsp;List
          </u></h1>
          <br/>
        <Switch>
          <Route exact path='/editEvent' render={({location}) =>
            <EditEventPage
              location={location}
              handleUpdateEvent={this.handleUpdateEvent}
              />
            }/>
          <Route
              exact
              path="/eventDetails"
              render={({ location }) => <EventDetailPage location={location} />}
            />
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
              handleDeleteEvent={this.handleDeleteEvent}
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
        </div>
      </div>
      
    )
  }
}


export default App;