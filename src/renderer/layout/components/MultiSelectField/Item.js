import styled from 'styled-components'
import {
    colorPrimary,
    colorSecondary,
    colorSecondaryDarker,
    fontSecondary,
    transition1,
} from '@paper/layout/mixins'

export default styled.li`
    display: inline-flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    background: ${colorSecondary};
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
    font-family: ${fontSecondary};
    font-weight: 600;
    font-size: 0.75rem;
    color: ${colorPrimary};
    transition: all ${transition1};
    cursor: pointer;

    &:hover {
        background: ${colorSecondaryDarker};
    }
`
