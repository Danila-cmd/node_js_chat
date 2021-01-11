import {LOGIN} from "../actions/auth";

const initialState = {
    user: {},
    token: '',
    isLoggedIn: false
}

const authReducer = (state = initialState, action) => {

    const {type, payload} = action

    switch (type) {
        case LOGIN:
            return {
                ...initialState,
                user: payload,
                token: payload.token,
                isLoggedIn: true
            }

        default:
            return initialState
    }
}

export default authReducer