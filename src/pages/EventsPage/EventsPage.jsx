import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';
import EventListItem from '../../components/EventListItem/EventListItem';


const ProfilePage = (props) => {
    return (
        props.events ? 
            <>
                <h1>Your Events List</h1>
                <div className="PageContainer">
                    {props.events.map(e => 
                        <EventListItem
                            e={e}
                            key={e._id}
                        />
                    )}
                    
                </div>
            </>
            :
            <div className="loading">"Loading"</div>
        
    )
}



export default ProfilePage;
