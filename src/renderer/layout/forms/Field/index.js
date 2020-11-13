import styled from 'styled-components'

import Input from './Input'
import Group from './Group'
import Label from './Label'
import Inside from './Inside'
import Message from './Message'

const Field = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    margin: 0.25rem 0;
`

Field.Input = Input
Field.Group = Group
Field.Label = Label
Field.Inside = Inside
Field.Message = Message

export default Field
