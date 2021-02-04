import styled from 'styled-components'

import Card from '@paper-ui/card'

import Media from './Media'
import Tags from './Tags'

const ClipCard = styled(Card)`
    height: 261px;
    width: 178px;
`

ClipCard.Title = Card.Title
ClipCard.Subtitle = Card.Subtitle
ClipCard.Menu = Card.Menu
ClipCard.Media = Media
ClipCard.Tags = Tags

export default ClipCard
