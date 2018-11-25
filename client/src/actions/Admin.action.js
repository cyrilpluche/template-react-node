import _service from '../services'

const labels = {
    LOAD: 'Admin : load',
    LOAD_MEMBERS_SUCCESS: 'Admin : loadMembers success',
    LOAD_MEMBERS_ERROR: 'Admin : loadMembers error'
}

const loadObject = {
    type: labels.LOAD
}

function errorObject (type) {
    return { type: type }
}

function loadMembers () {
    return (dispatch) => {
        dispatch(loadObject)
        _service.Member.findAll()
            .then(members => {
                dispatch({
                    type: labels.LOAD_MEMBERS_SUCCESS,
                    payload: {
                        members: members,
                        labels: Object.keys(members[0])
                    }
                })
            })
            .catch(error => {
                console.log(error)
                dispatch(errorObject(labels.LOAD_MEMBERS_ERROR))
            })
    }
}

export const adminAction = {
    labels,
    loadMembers
}