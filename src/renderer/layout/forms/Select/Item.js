import styled from 'styled-components'
import {
    colorPrimary,
    fontSecondary,
    colorSecondary,
    colorSecondaryDarker,
    transition1,
} from '@paper/layout/mixins'

export default styled.li`
    display: inline-flex;
    width: 100%;
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
    background: ${colorSecondary};
    font-family: ${fontSecondary};
    color: ${colorPrimary};
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all ${transition1};

    &:hover {
        background: ${colorSecondaryDarker};
    }
`
