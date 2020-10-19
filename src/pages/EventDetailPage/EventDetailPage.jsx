import React from 'react';
import EventCard from '../../components/EventCard/EventCard.jsx';

function EventDetailPage(props){
    const event = props.location.state.e
    return (
        <>
            <h1>Event Details</h1>
            <EventCard
                key={event._id}
                event={event}
            />
        </>
    );
}

export default EventDetailPage;