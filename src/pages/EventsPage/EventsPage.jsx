import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';
import EventListItem from '../../components/EventListItem/EventListItem';


const ProfilePage = (props) => {
    return (
        props.events ? 
            <>
                <div className="PageContainer">
                <br/>
                <h1>Events List</h1>
                <br/>
                    {props.events.map(e => 
                        <EventListItem
                            e={e}
                            key={e._id}
                            handleDeleteEvent={props.handleDeleteEvent}
                        />
                    )}
                    
                </div>
            </>
            :
            <div className="loading">"Loading"</div>
        
    )
}



export default ProfilePage;
