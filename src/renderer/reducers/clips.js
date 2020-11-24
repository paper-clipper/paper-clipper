import {
    FETCH_CLIPS_REQUEST,
    FETCH_CLIPS_SUCCESS,
    FETCH_CLIPS_FAILURE,
    CREATE_CLIP_REQUEST,
    CREATE_CLIP_SUCCESS,
    CREATE_CLIP_FAILURE,
} from '@paper/actions/clips'

const initialState = {
    loading: false,
    error: null,
    data: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_CLIPS_REQUEST:
        return { ...state, loading: true, error: null }

    case FETCH_CLIPS_SUCCESS:
        return { ...state, data: payload, loading: false, error: null }

    case FETCH_CLIPS_FAILURE:
        return { ...state, error: payload, loading: false }

    case CREATE_CLIP_REQUEST:
        return { ...state, loading: true, error: null }

    case CREATE_CLIP_SUCCESS:
        return { ...state, loading: false, data: [ ...state.data, payload ]}

    case CREATE_CLIP_FAILURE:
        return { ...state, loading: false, error: payload }

    default:
        return state
    }
}
