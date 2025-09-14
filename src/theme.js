import { createTheme } from '@mui/material/styles';

export const createMonochromeTheme = (isDarkMode) => {
    const backgroundColor = isDarkMode ? '#000000' : '#ffffff';
    const textColor = isDarkMode ? '#ffffff' : '#000000';
    const borderColor = isDarkMode ? '#ffffff' : '#000000';

    return createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: textColor,
                contrastText: backgroundColor,
            },
            secondary: {
                main: textColor,
                contrastText: backgroundColor,
            },
            background: {
                default: backgroundColor,
                paper: backgroundColor,
            },
            text: {
                primary: textColor,
                secondary: textColor,
            },
            divider: borderColor,
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h5: {
                fontWeight: 600,
                fontSize: '1.5rem',
                lineHeight: 1.334,
                letterSpacing: '0em',
            },
            body2: {
                fontSize: '0.875rem',
                lineHeight: 1.43,
                letterSpacing: '0.01071em',
                opacity: 0.8,
            },
        },
        spacing: 8,
        shape: {
            borderRadius: 8,
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        backgroundColor: backgroundColor,
                        color: textColor,
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        fontWeight: 500,
                        borderRadius: 8,
                        padding: '12px 24px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: isDarkMode
                                ? '0 8px 25px rgba(255, 255, 255, 0.15)'
                                : '0 8px 25px rgba(0, 0, 0, 0.15)',
                        },
                        '&:focus-visible': {
                            outline: `2px solid ${textColor}`,
                            outlineOffset: '2px',
                        },
                    },
                    contained: {
                        backgroundColor: textColor,
                        color: backgroundColor,
                        border: `1px solid ${textColor}`,
                        '&:hover': {
                            backgroundColor: textColor,
                            backgroundImage: isDarkMode
                                ? 'linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)'
                                : 'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
                            opacity: 0.95,
                        },
                    },
                    outlined: {
                        backgroundColor: 'transparent',
                        color: textColor,
                        border: `1px solid ${textColor}`,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            backgroundImage: isDarkMode
                                ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.08) 100%)'
                                : 'linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 50%, rgba(0, 0, 0, 0.08) 100%)',
                            borderColor: textColor,
                        },
                    },
                },
            },
            MuiAvatar: {
                styleOverrides: {
                    root: {
                        border: `2px solid ${textColor}`,
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: textColor,
                        '&:hover': {
                            backgroundColor: isDarkMode
                                ? 'rgba(255, 255, 255, 0.08)'
                                : 'rgba(0, 0, 0, 0.04)',
                        },
                        '&:focus-visible': {
                            outline: `2px solid ${textColor}`,
                            outlineOffset: '2px',
                        },
                    },
                },
            },
        },
    });
};