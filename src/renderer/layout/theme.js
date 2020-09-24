export const theme = {
    colors: {
        primary: '#000000',
        primary80: 'rgba(0, 0, 0, 0.8)',
        primary50: 'rgba(0, 0, 0, 0.5)',
        primary10: 'rgba(0, 0, 0, 0.1)',
        secondary: '#ffffff',
        secondary90: 'rgba(255, 255, 255, 0.9)',
        secondary75: 'rgba(255, 255, 255, 0.75)',
        secondaryDarker: '#f7f7f9',
        neutral: '#a7a6ab',
    },
    borderRadius: '12px',
    elevations: [
        '0 2px 16px rgba(90, 90, 90, 0.1)',
        '0 2px 8px rgba(90, 90, 90, 0.20)',
    ],
    effects: {
        backgrounBlur: [
            'blur(50px) brightness(100%) opacity(50%)',
            // 'blur(20px) brightness(50%) opacity(70%)',
            'blur(50px) brightness(0.95) opacity(100%)',
            'blur(25px) brightness(50%) opacity(50%)',
        ],
    },
    transitions: [
        '200ms ease-in-out',
    ],
    fonts: {
        primary: 'Lato, sans-serif',
        secondary: '\'Open Sans\', sans-serif',
    },
}

export default {
    colors: {
        black: '#000000',
        blackLighter: '#a7a6ab',
        white: '#ffffff',
        whiteDarker: '#f7f7f9',
        highlight: '#0287fe',
    },
    elevations: [
        '0 2px 16px rgba(90, 90, 90, 0.1)',
    ],
    fonts: {
        main: 'Lato, sans-serif',
        secondary: '\'Open Sans\', sans-serif',
    },
    newTheme: theme,
}
