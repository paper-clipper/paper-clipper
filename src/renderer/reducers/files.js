import {
    OPEN_FILES_REQUEST,
    OPEN_FILES_SUCCESS,
    OPEN_FILES_FAILURE,
} from '@paper/actions/FILESs'

const initialState = {
    loading: false,
    error: null,
    data: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case OPEN_FILES_REQUEST:
        return { ...state, ...payload, loading: true }

    case OPEN_FILES_SUCCESS:
        return { ...state, loading: false, error: null, data: payload }

    case OPEN_FILES_FAILURE:
        return { ...state, loading: false, error: payload }

    default:
        return state
    }
}
