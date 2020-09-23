import styled from 'styled-components'
import {
    colorPrimary,
    fontSecondary,
    transition1,
    colorPrimary10,
} from '@paper/layout/mixins'

export default styled.li`
    display: inline-flex;
    align-items: center;
    font-family: ${fontSecondary};
    font-weight: 600;
    font-size: 0.75rem;
    color: ${colorPrimary};
    min-height: 32px;
    transition: all ${transition1};

    &:hover {
        background: ${colorPrimary10};
    }
`
