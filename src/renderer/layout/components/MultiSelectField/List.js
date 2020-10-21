import styled from 'styled-components'
import {
    colorSecondary,
    borderRadius,
    colorSecondaryDarker,
} from '@paper/layout/mixins'

export default styled.ul`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.75rem 0;
    background: ${colorSecondary};
    border-radius: ${borderRadius};
    border: 1px solid ${colorSecondaryDarker};
    z-index: 99;
`
