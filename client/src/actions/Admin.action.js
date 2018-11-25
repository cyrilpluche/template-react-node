import _service from '../services'
import _helper from '../helpers'

const labels = {
    LOAD: 'Admin : load',
    LOAD_DATA_SUCCESS: 'Admin : load data success',
    LOAD_DATA_ERROR: 'Admin : load data error',
    UPDATE_DATA_SUCCESS: 'Admin : update data success',
    UPDATE_DATA_ERROR: 'Admin : update data error',
    DELETE_DATA_SUCCESS: 'Admin : delete data success',
    DELETE_DATA_ERROR: 'Admin : delete data error'
}

const loadObject = {
    type: labels.LOAD
}

function errorObject (type) {
    return { type: type }
}

function loadData (table) {
    return (dispatch) => {
        if (table === 'Member') {
            loadMember(dispatch)
        } else {
            console.log('No Table')
        }
    }
}

function updateElement (table, element) {
    return (dispatch) => {
        if (table === 'Member') {
            updateMember(dispatch, element)
        } else {
            console.log('No Table')
        }
    }
}

function deleteData (table, data) {
    return (dispatch) => {
        if (table === 'Member') {
            deleteMember(dispatch, data)
        } else {
            console.log('No Table')
        }
    }
}

function loadMember (dispatch) {
    dispatch(loadObject)
    _service.Member.findAll()
        .then(members => {
            dispatch({
                type: labels.LOAD_DATA_SUCCESS,
                payload: {
                    data: members,
                    labels: Object.keys(members[0])
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.LOAD_DATA_ERROR))
        })
}

function updateMember (dispatch, member) {
    dispatch(loadObject)
    _service.Member.update(member)
        .then(isUpdated => {
            dispatch({
                type: labels.UPDATE_DATA_SUCCESS,
                payload: {
                    isUpdated: isUpdated
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.UPDATE_DATA_ERROR))
        })
}

function deleteMember (dispatch, members) {
    dispatch(loadObject)
    let body = _helper.Request.convertToArrayObject(members, '_id')
    _service.Member.delete(body)
        .then(isDeleted => {
            dispatch({
                type: labels.DELETE_DATA_SUCCESS,
                payload: {
                    isDeleted: isDeleted
                }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch(errorObject(labels.DELETE_DATA_ERROR))
        })
}

export const adminAction = {
    labels,
    loadData,
    deleteData,
    updateElement
}