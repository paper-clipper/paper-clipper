import { ipcRenderer } from 'electron'

export const FETCH_CLIPS_REQUEST = 'FETCH_CLIPS_REQUEST'
export const FETCH_CLIPS_SUCCESS = 'FETCH_CLIPS_SUCCESS'
export const FETCH_CLIPS_FAILURE = 'FETCH_CLIPS_FAILURE'

export const fetchClipsRequest = payload => ({
    type: FETCH_CLIPS_REQUEST,
    payload,
})

export const fetchClipsSuccess = payload => ({
    type: FETCH_CLIPS_SUCCESS,
    payload,
})

export const fetchClipsFailure = payload => ({
    type: FETCH_CLIPS_FAILURE,
    payload,
})

export const fetchClips = (query = {}) =>
    dispatch => {
        dispatch(fetchClipsRequest())
        return ipcRenderer.invoke('fetch-clips', query)
            .then(payload => dispatch(fetchClipsSuccess(payload)))
            .catch(error => dispatch(fetchClipsFailure(error)))
    }

export const FETCH_CLIPS_LIKE_REQUEST = 'FETCH_CLIPS_LIKE_REQUEST'
export const FETCH_CLIPS_LIKE_SUCCESS = 'FETCH_CLIPS_LIKE_SUCCESS'
export const FETCH_CLIPS_LIKE_FAILURE = 'FETCH_CLIPS_LIKE_FAILURE'

export const fetchClipsLikeRequest = payload => ({
    type: FETCH_CLIPS_LIKE_REQUEST,
    payload,
})

export const fetchClipsLikeSuccess = payload => ({
    type: FETCH_CLIPS_LIKE_SUCCESS,
    payload,
})

export const fetchClipsLikeFailure = payload => ({
    type: FETCH_CLIPS_LIKE_FAILURE,
    payload,
})

export const fetchClipsLike = (query = {}) =>
    dispatch => {
        dispatch(fetchClipsLikeRequest())
        return ipcRenderer.invoke('fetch-clips-like', query)
            .then(payload => dispatch(fetchClipsLikeSuccess(payload)))
            .catch(error => dispatch(fetchClipsLikeFailure(error)))
    }

export const CREATE_CLIP_REQUEST = 'CREATE_CLIP_REQUEST'
export const CREATE_CLIP_SUCCESS = 'CREATE_CLIP_SUCCESS'
export const CREATE_CLIP_FAILURE = 'CREATE_CLIP_FAILURE'

export const createClipRequest = (payload) => ({
    type: CREATE_CLIP_REQUEST,
    payload,
})

export const createClipSuccess = (payload) => ({
    type: CREATE_CLIP_SUCCESS,
    payload,
})

export const createClipFailure = (payload) => ({
    type: CREATE_CLIP_FAILURE,
    payload,
})

export const createClip = clip =>
    dispatch => {
        dispatch(createClipRequest())
        return ipcRenderer.invoke('create-clip', clip)
            .then(payload => dispatch(createClipSuccess(payload)))
            .catch(error => dispatch(createClipFailure(error)))
    }

export const UPDATE_CLIP_REQUEST = 'UPDATE_CLIP_REQUEST'
export const UPDATE_CLIP_SUCCESS = 'UPDATE_CLIP_SUCCESS'
export const UPDATE_CLIP_FAILURE = 'UPDATE_CLIP_FAILURE'

export const updateClipRequest = (payload) => ({
    type: UPDATE_CLIP_REQUEST,
    payload,
})

export const updateClipSuccess = (payload) => ({
    type: UPDATE_CLIP_SUCCESS,
    payload,
})

export const updateClipFailure = (payload) => ({
    type: UPDATE_CLIP_FAILURE,
    payload,
})

export const updateClip = (clip) =>
    dispatch => {
        dispatch(updateClipRequest())
        return ipcRenderer.invoke('update-clip', clip)
            .then(payload => dispatch(updateClipSuccess(payload)))
            .catch(error => dispatch(updateClipFailure(error)))
    }

export const DELETE_CLIP_REQUEST = 'DELETE_CLIP_REQUEST'
export const DELETE_CLIP_SUCCESS = 'DELETE_CLIP_SUCCESS'
export const DELETE_CLIP_FAILURE = 'DELETE_CLIP_FAILURE'

export const deleteClipRequest = (payload) => ({
    type: DELETE_CLIP_REQUEST,
    payload,
})

export const deleteClipSuccess = (payload) => ({
    type: DELETE_CLIP_SUCCESS,
    payload,
})

export const deleteClipFailure = (payload) => ({
    type: DELETE_CLIP_FAILURE,
    payload,
})

export const deleteClip = ({ id }) =>
    dispatch => {
        dispatch(deleteClipRequest())
        return ipcRenderer.invoke('delete-clip', { id })
            .then(() => dispatch(deleteClipSuccess({ id })))
            .catch(error => dispatch(deleteClipFailure(error)))
    }

export const OPEN_ADD_CLIP_MODAL = 'OPEN_ADD_CLIP_MODAL'
export const CLOSE_ADD_CLIP_MODAL = 'CLOSE_ADD_CLIP_MODAL'

export const openAddClipModal = (payload) => ({
    type: OPEN_ADD_CLIP_MODAL,
    payload,
})

export const closeAddClipModal = (payload) => ({
    type: CLOSE_ADD_CLIP_MODAL,
    payload,
})

export const OPEN_EDIT_CLIP_MODAL = 'OPEN_EDIT_CLIP_MODAL'
export const CLOSE_EDIT_CLIP_MODAL = 'CLOSE_EDIT_CLIP_MODAL'

export const openEditClipModal = (payload) => ({
    type: OPEN_EDIT_CLIP_MODAL,
    payload,
})

export const closeEditClipModal = (payload) => ({
    type: CLOSE_EDIT_CLIP_MODAL,
    payload,
})

export const OPEN_DELETE_CLIP_POPUP = 'OPEN_DELETE_CLIP_POPUP'
export const CLOSE_DELETE_CLIP_POPUP = 'CLOSE_DELETE_CLIP_POPUP'

export const openDeleteClipPopup = (payload) => ({
    type: OPEN_DELETE_CLIP_POPUP,
    payload,
})

export const closeDeleteClipPopup = (payload) => ({
    type: CLOSE_DELETE_CLIP_POPUP,
    payload,
})
