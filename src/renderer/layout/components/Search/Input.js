import styled from 'styled-components'
import {
    colorSecondaryDarker,
    fontSecondary,
    colorNeutral,
    borderRadius,
} from '@paper/layout/mixins'

export default styled.input`
    /* text-align: center; */
    padding: 0 0 0 1.5rem;
    color: ${colorNeutral};
    font-family: ${fontSecondary};
    font-size: 0.75rem;
    background: ${colorSecondaryDarker};
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
    font-weight: 600;
    border: none;
    outline: none;
    width: 100%;

    &::placeholder {
        color: ${colorNeutral};
    }
`
