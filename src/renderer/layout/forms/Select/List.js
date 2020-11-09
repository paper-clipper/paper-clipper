import styled from 'styled-components'
import {
    colorSecondary,
    borderRadius,
    colorSecondaryDarker,
} from '@paper/layout/mixins'

export default styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.75rem 0;
    box-sizing: border-box;
    background: ${colorSecondary};
    border-radius: ${borderRadius};
    border: 1px solid ${colorSecondaryDarker};
`
