import styled from 'styled-components'

import Input from './Input'
import Label from './Label'
import Tooltip from './Tooltip'
import Action from './Action'

const FileInput = styled.div`
    display: inline-flex;
    width: 100%;
    height: 96px;
`

FileInput.Input = Input
FileInput.Label = Label
FileInput.Tooltip = Tooltip
FileInput.Action = Action

export default FileInput
