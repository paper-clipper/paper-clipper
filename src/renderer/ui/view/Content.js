import styled from 'styled-components'
import {
    color,
    zIndex,
} from '@paper-ui/mixins'

export default styled.div`
    grid-area: content;
    width: 100%;
    min-height: calc(100vh - 64px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    background: ${color('brand.secondary')};
    z-index: ${zIndex('base')};
`
