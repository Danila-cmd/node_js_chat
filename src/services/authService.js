import API from './api'

const AuthService = {
    login: (data) => {
        return API.post('/login', data)
            .then(({data}) => {
                API.defaults.headers['Authorization'] = `Bearer ${data.token}`
                return data
            })
            .catch(err => {
                console.log("Auth service err", err)
                throw err
            })
    },

    register: (data) => {

        console.log(data)

        return API.post('/register', data)
            .then(({data}) => {
                API.defaults.headers['Authorization'] = `Bearer ${data.token}`
                return data
            })
            .catch(err => {
                console.log("Auth service err", err)
                throw err
            })
    },

    logout: () => {

    }
}

export default AuthService