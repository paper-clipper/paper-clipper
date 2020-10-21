import styled from 'styled-components'
import {
    colorSecondaryDarker,
    colorSecondary,
    fontSecondary,
    borderRadius,
    colorPrimary,
} from '@paper/layout/mixins'

export default styled.input`
    display: inline-flex;
    width: 100%;
    outline: none;
    border: 1px solid ${colorSecondaryDarker};
    background: ${colorSecondary};
    padding: 0.75rem 1.5rem;
    box-sizing: border-box;
    font-family: ${fontSecondary};
    border-radius: ${borderRadius};
    font-size: 0.75rem;
    font-weight: 600;
    color: ${colorPrimary};
    appearance: none;

    ::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
`

