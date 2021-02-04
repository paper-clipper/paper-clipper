import styled from 'styled-components'
import {
    color,
    borderRadius,
} from '@paper-ui/mixins'

export default styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.75rem 0;
    box-sizing: border-box;
    background: ${color('brand.secondary')};
    border-radius: ${borderRadius('base')};
    border: 1px solid ${color('grey.50')};
`
