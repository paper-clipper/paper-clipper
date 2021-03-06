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
    OPEN_DELETE_CLIP_POPUP,
    CLOSE_DELETE_CLIP_POPUP,
    OPEN_EDIT_CLIP_MODAL,
    CLOSE_EDIT_CLIP_MODAL,
    UPDATE_CLIP_REQUEST,
    UPDATE_CLIP_SUCCESS,
    UPDATE_CLIP_FAILURE,
} from './actions'

const addClipModalInitialState = {
    isOpen: false,
    initialValues: {},
}

const editClipModalInitialState = {
    isOpen: false,
    clip: {},
}

const deleteClipPopupInitialState = {
    isOpen: false,
    clip: {},
}

const initialState = {
    loading: false,
    error: null,
    data: [],
    search: false,
    addClipModal: addClipModalInitialState,
    editClipModal: editClipModalInitialState,
    deleteClipPopup: deleteClipPopupInitialState,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_CLIPS_REQUEST:
            return { ...state, loading: true, search: false, error: null }

        case FETCH_CLIPS_SUCCESS:
            return { ...state, data: payload, loading: false, error: null }

        case FETCH_CLIPS_FAILURE:
            return { ...state, error: payload, loading: false }

        case FETCH_CLIPS_LIKE_REQUEST:
            return { ...state, loading: true, search: true, error: null }

        case FETCH_CLIPS_LIKE_SUCCESS:
            return { ...state, data: payload, loading: false, error: null }

        case FETCH_CLIPS_LIKE_FAILURE:
            return { ...state, error: payload, loading: false }

        case CREATE_CLIP_REQUEST:
            return { ...state, loading: true, error: null }

        case CREATE_CLIP_SUCCESS:
            return { ...state, loading: false, data: [...state.data, payload ] }

        case UPDATE_CLIP_REQUEST:
            return { ...state, loading: true, error: null }

        case UPDATE_CLIP_SUCCESS:
            return { ...state, loading: false, data: state.data.map(item => item.id !== payload.id ? item : payload) }

        case UPDATE_CLIP_FAILURE:
            return { ...state, loading: false, error: payload }

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

        case OPEN_EDIT_CLIP_MODAL:
            return { ...state, editClipModal: { isOpen: true, clip: payload } }

        case CLOSE_EDIT_CLIP_MODAL:
            return { ...state, editClipModal: editClipModalInitialState }

        case OPEN_DELETE_CLIP_POPUP:
            return { ...state, deleteClipPopup: { isOpen: true, clip: payload } }

        case CLOSE_DELETE_CLIP_POPUP:
            return { ...state, deleteClipPopup: deleteClipPopupInitialState }

        default:
            return state
    }
}
