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
    height: 261px;
    width: 178px;
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    margin: 0.75rem;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.elevations[0]};
    border-radius: 12px;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
        transform: translate(0, -4px);
        box-shadow: 0 8px 24px rgba(90, 90, 90, 0.15);
    }
`

Card.Actions = Actions
Card.Media = Media
Card.Title = Title
Card.Subtitle = Subtitle
Card.Tags =Tags

export default Card
