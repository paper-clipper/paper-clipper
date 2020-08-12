import styled from 'styled-components'

import Icon from './Icon'
import Extension from './Extension'

const File = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

File.Icon = Icon
File.Extension = Extension

export default File