import tokenService from './tokenService'
const BASE_URL = '/api/eventList/profiles'



function getOne() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: tokenService.getAuthMethods(),
    }).then(res => {
        if (res.ok) return res.json()
        throw new Error('user not authenticated')
    }).then(profile => profile)
}

function update(profile){
    return fetch(`${BASE_URL}/${profile._id}`, {
        method: 'PUT',
        headers: tokenService.getAuthMethods(),
        body: JSON.stringify(profile)
    }).then(res => {
        if (res.ok) return res.json()
        throw new Error('user not authenticated')
    }).then(profile => profile)
}


export default {
    getOne,
    update,

}
