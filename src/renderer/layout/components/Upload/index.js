import styled from 'styled-components'
import {
    colorSecondary,
    colorSecondaryDarker,
    borderRadius,
} from '@paper/layout/mixins'

import File from './File'
import Info from './Info'
import Title from './Title'
import Meta from './Meta'
import Actions from './Actions'
import Action from './Action'

const Upload = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.75rem;
    background: ${colorSecondary};
    border: 1px solid ${colorSecondaryDarker};
    width: 100%;
    height: 48px;
    padding: 0 1.5rem;
    border-radius: ${borderRadius};
    box-sizing: border-box;
`

Upload.File = File
Upload.Info = Info
Upload.Title = Title
Upload.Actions = Actions
Upload.Action = Action
Upload.Meta = Meta

export default Upload
