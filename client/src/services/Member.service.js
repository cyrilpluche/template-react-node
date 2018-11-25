import Api from './Api'
import _helper from '../helpers'

const url = 'member/'

const Member = {
    create(body){
        return Api.post(url + 'create', body).then(res => res.data)
    },

    findAll () {
        return Api.get(url + 'find_all').then(res => res.data)
    },

    update (member) {
        let where = _helper.Request.urlFromObject({_id: member._id})
        return Api.put(url + 'update' + where, member).then(res => res.data)
    },

    delete (members) {
        return Api.post(url + 'delete', members).then(res => res.data)
    },
}

export default Member