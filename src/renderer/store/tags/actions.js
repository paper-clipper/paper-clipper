import { ipcRenderer } from 'electron'

export const FETCH_TAGS_LIKE_REQUEST = 'FETCH_TAGS_LIKE_REQUEST'
export const FETCH_TAGS_LIKE_SUCCESS = 'FETCH_TAGS_LIKE_SUCCESS'
export const FETCH_TAGS_LIKE_ERROR = 'FETCH_TAGS_LIKE_ERROR'

const fetchTagsLikeRequest = (payload) => ({
    type: FETCH_TAGS_LIKE_REQUEST,
    payload,
})

const fetchTagsLikeSuccess = (payload) => ({
    type: FETCH_TAGS_LIKE_SUCCESS,
    payload,
})

const fetchTagsLikeError = (payload) => ({
    type: FETCH_TAGS_LIKE_ERROR,
    payload,
})

export const fetchTagsLike = (query) => (dispatch) => {
    dispatch(fetchTagsLikeRequest())
    return ipcRenderer.invoke('fetch-tags-like', query)
        .then(data => dispatch(fetchTagsLikeSuccess(data)))
        .catch(error => dispatch(fetchTagsLikeError(error)))
}
