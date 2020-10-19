import React from 'react';
import {Link} from 'react-router-dom';
import './EventListItem.css';

function EventListItem({e, handleDeleteEvent}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{e.name}</h3>
      </div>
      <div className='panel-footer PuppyListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/eventDetails',
            state: {e}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/editEvent',
            state: {e}
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeleteEvent(e._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default EventListItem;