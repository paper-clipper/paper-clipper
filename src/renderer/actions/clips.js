import { ipcRenderer } from 'electron'

export const FETCH_CLIPS_REQUEST = 'FETCH_CLIPS_REQUEST'
export const FETCH_CLIPS_SUCCESS = 'FETCH_CLIPS_SUCCESS'
export const FETCH_CLIPS_FAILURE = 'FETCH_CLIPS_FAILURE'

export const fetchClipsRequest = (payload) => ({
    type: FETCH_CLIPS_REQUEST,
    payload,
})

export const fetchClipsSuccess = (payload) => ({
    type: FETCH_CLIPS_SUCCESS,
    payload,
})

export const fetchClipsFailure = (payload) => ({
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
