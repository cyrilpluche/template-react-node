import Api from './Api'

const url = 'member/'

const Member = {
    create(body){
        return Api.post(url + 'create', body).then(res => res.data)
    },

    findAll (idProject) {
        return Api.get(url + 'find_all').then(res => res.data)
    },
}

export default Member