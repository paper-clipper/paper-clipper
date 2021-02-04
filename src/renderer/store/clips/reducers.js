import {
    FETCH_CLIPS_REQUEST,
    FETCH_CLIPS_SUCCESS,
    FETCH_CLIPS_FAILURE,
    FETCH_CLIPS_LIKE_REQUEST,
    FETCH_CLIPS_LIKE_SUCCESS,
    FETCH_CLIPS_LIKE_FAILURE,
    CREATE_CLIP_REQUEST,
    CREATE_CLIP_SUCCESS,
    CREATE_CLIP_FAILURE,
    DELETE_CLIP_REQUEST,
    DELETE_CLIP_SUCCESS,
    DELETE_CLIP_FAILURE,
    OPEN_ADD_CLIP_MODAL,
    CLOSE_ADD_CLIP_MODAL,
} from './actions'

const addClipModalInitialState = {
    isOpen: false,
    initialValues: {},
}

const initialState = {
    loading: false,
    error: null,
    data: [],
    addClipModal: addClipModalInitialState,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_CLIPS_REQUEST:
            return { ...state, loading: true, error: null }

        case FETCH_CLIPS_SUCCESS:
            return { ...state, data: payload, loading: false, error: null }

        case FETCH_CLIPS_FAILURE:
            return { ...state, error: payload, loading: false }

        case FETCH_CLIPS_LIKE_REQUEST:
            return { ...state, loading: true, error: null }

        case FETCH_CLIPS_LIKE_SUCCESS:
            return { ...state, data: payload, loading: false, error: null }

        case FETCH_CLIPS_LIKE_FAILURE:
            return { ...state, error: payload, loading: false }

        case CREATE_CLIP_REQUEST:
            return { ...state, loading: true, error: null }

        case CREATE_CLIP_SUCCESS:
            return { ...state, loading: false, data: [...state.data, payload] }

        case CREATE_CLIP_FAILURE:
            return { ...state, loading: false, error: payload }

        case DELETE_CLIP_REQUEST:
            return { ...state, loading: true, error: null }

        case DELETE_CLIP_SUCCESS:
            return { ...state, loading: false, data: state.data.filter(item => item.id !== payload.id) }

        case DELETE_CLIP_FAILURE:
            return { ...state, loading: false, error: payload }

        case OPEN_ADD_CLIP_MODAL:
            return { ...state, addClipModal: { isOpen: true, initialValues: payload } }

        case CLOSE_ADD_CLIP_MODAL:
            return { ...state, addClipModal: addClipModalInitialState }

        default:
            return state
    }
}
