import React from 'react';
import {Link} from 'react-router-dom';
import './EventListItem.css';

function EventListItem({e}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{e.name}</h3>
      </div>
      <div className='panel-footer PuppyListItem-action-panel'>
        <Link
          className='btn btn-xs btn-info'
          to={{
            pathname: '/event/details',
            state: {e}
          }}
        >
          DETAILS
        </Link>
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: {e}
          }}
        >
          EDIT
        </Link>
        <button
        //   className='btn btn-xs btn-danger margin-left-10'
        //   onClick={() => handleDeletePuppy(puppy._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default EventListItem;