import React from 'react';
import {Link} from 'react-router-dom';

function EventCard({event}){
    return (
        <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{event.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
            <dt className="EventImage"><img src={event.picture} alt="event picture"></img></dt>
          <dt>Date</dt>
          <dd>{event.date}</dd>
          <dt>Location</dt>
          <dd>{event.location}</dd>
          <dt>Host</dt>
          <dd>{event.host.name}</dd>
          <dt>Event Details</dt>
          <dd>{event.description}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/events'>RETURN TO MY EVENTS</Link>
      </div>
    </div>
    )
}

export default EventCard;