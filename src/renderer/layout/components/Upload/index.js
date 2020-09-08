import styled from 'styled-components'

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
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.whiteDarker};
    width: 100%;
    height: 48px;
    padding: 0 1.5rem;
    border-radius: 12px;
    box-sizing: border-box;
`

Upload.File = File
Upload.Info = Info
Upload.Title = Title
Upload.Actions = Actions
Upload.Action = Action
Upload.Meta = Meta

export default Upload
