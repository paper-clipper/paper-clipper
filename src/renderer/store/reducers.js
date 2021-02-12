import { combineReducers } from 'redux'

import clips from './clips/reducers'
import files from './files/reducers'
import tags from './tags/reducers'

export default combineReducers({
    clips,
    files,
    tags,
})
