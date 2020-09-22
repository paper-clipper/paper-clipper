import { css } from 'styled-components'

export const colorPrimary = ({ theme }) => theme.newTheme.colors.primary
export const colorPrimary80 = ({ theme }) => theme.newTheme.colors.primary80
export const colorPrimary10 = ({ theme }) => theme.newTheme.colors.primary10
export const colorSecondary = ({ theme }) => theme.newTheme.colors.secondary
export const colorSecondaryDarker = ({ theme }) => theme.newTheme.colors.secondaryDarker
export const colorNeutral = ({ theme }) => theme.newTheme.colors.neutral

export const elevation1 = ({ theme }) => css`
    box-shadow: ${theme.newTheme.elevations[0]};
`
export const elevation2 = ({ theme }) => css`
    box-shadow: ${theme.newTheme.elevations[1]};
`

export const fontPrimary = ({ theme }) => theme.newTheme.fonts.primary
export const fontSecondary = ({ theme }) => theme.newTheme.fonts.secondary

export const transition1 = ({ theme }) => theme.newTheme.transitions[0]
