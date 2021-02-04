import styled from 'styled-components'
import {
    color,
    elevation,
    borderRadius,
} from '@paper-ui/mixins'

import Actions from './Actions'
import Menu from './Menu'
import Title from './Title'
import Subtitle from './Subtitle'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    background: ${color('brand.secondary')};
    box-shadow: ${elevation('base')};
    border: 1px solid ${color('grey.50')};
    border-radius: ${borderRadius('base')};
`

Card.Actions = Actions
Card.Menu = Menu
Card.Title = Title
Card.Subtitle = Subtitle

export default Card
