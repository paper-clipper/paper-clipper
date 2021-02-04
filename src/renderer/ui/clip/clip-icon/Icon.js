import styled from 'styled-components'
import {
    color,
} from '@paper-ui/mixins'

export default styled.span`
    display: inline-flex;
    color: ${({ color: c, theme }) => c || color('brand.neutral')(theme)};
    text-align: center;
`
