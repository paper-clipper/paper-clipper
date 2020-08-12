import styled from 'styled-components'

import Actions from './Actions'
import Title from './Title'
import Media from './Media'
import Subtitle from './Subtitle'
import Tags from './Tags'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 198px;
    height: 290px;
    box-sizing: border-box;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.elevations[0]};
    border-radius: 12px;
`

Card.Actions = Actions
Card.Media = Media
Card.Title = Title
Card.Subtitle = Subtitle
Card.Tags = Tags

export default Card