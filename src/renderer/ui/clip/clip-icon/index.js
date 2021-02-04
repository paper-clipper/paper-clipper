import styled from 'styled-components'

import Icon from './Icon'
import Extension from './Extension'

const ClipIcon = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

ClipIcon.Icon = Icon
ClipIcon.Extension = Extension

export default ClipIcon
