import { ipcRenderer } from 'electron'

export const OPEN_FILE_REQUEST = 'OPEN_FILE_REQUEST'
export const OPEN_FILE_SUCCESS = 'OPEN_FILE_SUCCESS'
export const OPEN_FILE_FAILURE = 'OPEN_FILE_FAILURE'

export const openFileRequest = payload => ({
    type: OPEN_FILE_REQUEST,
    payload,
})

export const openFileSuccess = payload => ({
    type: OPEN_FILE_SUCCESS,
    payload,
})

export const openFileFailure = payload => ({
    type: OPEN_FILE_FAILURE,
    payload,
})

export const openFile = file =>
    dispatch => {
        dispatch(openFileRequest())
        ipcRenderer.invoke('open-file', file)
            .then(payload => dispatch(openFileSuccess(payload)))
            .catch(error => dispatch(openFileFailure(error)))
    }

export const OPEN_FILES_REQUEST = 'OPEN_FILES_REQUEST'
export const OPEN_FILES_SUCCESS = 'OPEN_FILES_SUCCESS'
export const OPEN_FILES_FAILURE = 'OPEN_FILES_FAILURE'

export const openFilesRequest = payload => ({
    type: OPEN_FILES_REQUEST,
    payload,
})

export const openFilesSuccess = payload => ({
    type: OPEN_FILES_SUCCESS,
    payload,
})

export const openFilesFailure = payload => ({
    type: OPEN_FILES_FAILURE,
    payload,
})

export const openFiles = files =>
    dispatch => {
        dispatch(openFilesRequest())
        return ipcRenderer.invoke('open-files', files)
            .then(payload => dispatch(openFilesSuccess(payload)))
            .catch(error => dispatch(openFilesFailure(error)))
    }
