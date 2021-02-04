import { combineReducers } from 'redux'

import clips from './clips/reducers'
import files from './files/reducers'

export default combineReducers({
    clips,
    files,
})
