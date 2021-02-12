import {
    FETCH_TAGS_LIKE_REQUEST,
    FETCH_TAGS_LIKE_SUCCESS,
    FETCH_TAGS_LIKE_ERROR,
} from './actions'

const initialState = {
    loading: false,
    error: null,
    data: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_TAGS_LIKE_REQUEST:
            return { ...state, loading: true, error: null }

        case FETCH_TAGS_LIKE_SUCCESS:
            return { ...state, data: payload, loading: false }

        case FETCH_TAGS_LIKE_ERROR:
            return { ...state, error: payload, loading: false }

        default:
            return state
    }
}
