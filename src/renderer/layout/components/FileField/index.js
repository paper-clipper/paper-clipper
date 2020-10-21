import styled from 'styled-components'

import Input from './Input'
import Label from './Label'
import Tooltip from './Tooltip'
import Action from './Action'

const FileField = styled.div`
    display: inline-flex;
    width: 100%;
    height: 96px;
`

FileField.Input = Input
FileField.Label = Label
FileField.Tooltip = Tooltip
FileField.Action = Action

export default FileField
