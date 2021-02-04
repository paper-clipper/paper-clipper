import styled from 'styled-components'
import {
    color,
    borderRadius,
} from '@paper-ui/mixins'

import File from './File'
import Info from './Info'
import Actions from './Actions'

const Upload = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.75rem;
    background: ${color('brand.secondary')};
    border: 1px solid ${color('grey.50')};
    width: 100%;
    height: 48px;
    padding: 0 1.5rem;
    border-radius: ${borderRadius('base')};
    box-sizing: border-box;
`

Upload.File = File
Upload.Info = Info
Upload.Actions = Actions

export default Upload
