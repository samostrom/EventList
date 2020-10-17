const BASE_URL = '/api/eventList/events'

export default {
    getAll,
    create,
    update,
    deleteOne,
}

function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

function create(event) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(event)
    }).then(res => res.json());
}

export function update(event) {
    return fetch(`${BASE_URL}/${event._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(event)
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }
  