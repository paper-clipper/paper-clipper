import styled from 'styled-components'

import Field from './Field'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

Form.Field = Field

export default Form
