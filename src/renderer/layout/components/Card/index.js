import styled from 'styled-components'
import {
    colorSecondary,
    elevation1,
    transition1,
    borderRadius,
    colorSecondaryDarker,
} from '@paper/layout/mixins'

import Actions from './Actions'
import Dropdown from './Dropdown'
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
    background: ${colorSecondary};
    box-shadow: ${elevation1};
    border: 1px solid ${colorSecondaryDarker};
    border-radius: ${borderRadius};
    cursor: pointer;
    transition: all ${transition1};

    &:hover {
        transform: translate(0, -4px);
        box-shadow: 0 8px 24px rgba(90, 90, 90, 0.15);
    }
`

Card.Actions = Actions
Card.Dropdown = Dropdown
Card.Media = Media
Card.Title = Title
Card.Subtitle = Subtitle
Card.Tags =Tags

export default Card
