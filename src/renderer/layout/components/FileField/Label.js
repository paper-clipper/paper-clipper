import styled from 'styled-components'
import {
    colorSecondaryDarker,
    colorSecondary,
    borderRadius,
} from '@paper/layout/mixins'

export default styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px dashed ${colorSecondaryDarker};
    background: ${colorSecondary};
    border-radius: ${borderRadius};
    pointer-events: none;
`
