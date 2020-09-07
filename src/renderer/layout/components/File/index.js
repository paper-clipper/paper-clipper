import styled from 'styled-components'

import Icon from './Icon'
import Extension from './Extension'

const File = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

File.Icon = Icon
File.Extension = Extension

export default File
