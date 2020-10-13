import styled from 'styled-components'
import {
    colorSecondaryDarker,
    colorNeutral,
    borderRadius,
} from '@paper/layout/mixins'

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    font-size: 0.75rem;
    box-sizing: border-box;
    background: ${colorSecondaryDarker};
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    color: ${colorNeutral};
    height: 100%;
`
