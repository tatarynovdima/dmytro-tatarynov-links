import React, { useState, useEffect } from 'react';
import {
    ThemeProvider,
    CssBaseline,
    Container,
    Avatar,
    Typography,
    Box,
    IconButton,
    Stack,
    Fade,
    Switch,
    FormControlLabel,
} from '@mui/material';
import {
    GitHub,
    LinkedIn,
    LightMode,
    DarkMode,
    Code,
    Article,
    Telegram,
    AutoMode,
} from '@mui/icons-material';

import { createMonochromeTheme } from './theme';
import LinkButton from './components/LinkButton';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isAutoMode, setIsAutoMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    const theme = createMonochromeTheme(isDarkMode);

    // Load preferences from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('themePreference');
        const savedAutoMode = localStorage.getItem('autoTheme') === 'true';

        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
        setIsAutoMode(savedAutoMode);
        setMounted(true);
    }, []);

    // Auto theme based on time of day
    useEffect(() => {
        if (!isAutoMode) return;

        const updateThemeByTime = () => {
            const now = new Date();
            const hour = now.getHours();
            // Dark mode from 7 PM to 6 AM (19:00 - 06:00)
            const shouldBeDark = hour >= 19 || hour < 6;
            setIsDarkMode(shouldBeDark);
        };

        // Update immediately
        updateThemeByTime();

        // Set up interval to check every minute
        const interval = setInterval(updateThemeByTime, 60000);

        return () => clearInterval(interval);
    }, [isAutoMode]);

    // Save preferences to localStorage
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('themePreference', isDarkMode ? 'dark' : 'light');
        }
    }, [isDarkMode, mounted]);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('autoTheme', isAutoMode.toString());
        }
    }, [isAutoMode, mounted]);

    const toggleTheme = () => {
        if (isAutoMode) {
            setIsAutoMode(false);
        }
        setIsDarkMode(prev => !prev);
    };

    const toggleAutoMode = () => {
        setIsAutoMode(prev => !prev);
    };

    const getCurrentTimeBasedIcon = () => {
        const now = new Date();
        const hour = now.getHours();

        if (isAutoMode) {
            return <AutoMode />;
        }

        return isDarkMode ? <LightMode /> : <DarkMode />;
    };

    const profileData = {
        name: 'Dmytro Tatarynov',
        bio: 'Software Engineer with 5+ years experience',
        avatar: 'src/assets/photo_2023-02-19_19-07-52.jpg',
        links: [
            {
                href: 'https://www.linkedin.com/in/tatarynov-dmytro/',
                icon: <LinkedIn />,
                text: 'LinkedIn',
                variant: 'contained',
                ariaLabel: 'Visit Dmytro Tatarynov LinkedIn profile'
            },
            {
                href: 'https://github.com/tatarynovdima',
                icon: <GitHub />,
                text: 'GitHub',
                variant: 'outlined',
                ariaLabel: 'Visit Dmytro Tatarynov GitHub profile'
            },
            {
                href: 'https://leetcode.com/u/tatarynovdima/',
                icon: <Code />,
                text: 'LeetCode',
                variant: 'outlined',
                ariaLabel: 'Visit Dmytro Tatarynov LeetCode profile'
            },
            {
                href: 'https://medium.com/@dmytro.tatarynov',
                icon: <Article />,
                text: 'Medium',
                variant: 'outlined',
                ariaLabel: 'Visit Dmytro Tatarynov Medium blog'
            },
            {
                href: 'https://t.me/dmytro_tatarynov',
                icon: <Telegram />,
                text: 'Telegram',
                variant: 'outlined',
                ariaLabel: 'Contact Dmytro Tatarynov on Telegram'
            },
        ]
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* Theme Controls */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'flex-end',
                }}
            >
                {/* Auto Mode Toggle */}
                <FormControlLabel
                    control={
                        <Switch
                            checked={isAutoMode}
                            onChange={toggleAutoMode}
                            size="small"
                            sx={{
                                '& .MuiSwitch-thumb': {
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                                },
                            }}
                        />
                    }
                    label={
                        <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                            Auto
                        </Typography>
                    }
                    sx={{
                        margin: 0,
                        '& .MuiFormControlLabel-label': {
                            color: isDarkMode ? '#ffffff' : '#000000',
                        },
                    }}
                />

                {/* Manual Theme Toggle */}
                <IconButton
                    onClick={toggleTheme}
                    disabled={isAutoMode}
                    aria-label={
                        isAutoMode
                            ? 'Auto theme mode is enabled'
                            : `Switch to ${isDarkMode ? 'light' : 'dark'} mode`
                    }
                    size="large"
                    sx={{
                        backgroundColor: 'rgba(128, 128, 128, 0.1)',
                        opacity: isAutoMode ? 0.5 : 1,
                        '&:hover': {
                            backgroundColor: isAutoMode
                                ? 'rgba(128, 128, 128, 0.1)'
                                : 'rgba(128, 128, 128, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    {getCurrentTimeBasedIcon()}
                </IconButton>

                {/* Time Display for Auto Mode */}
                {isAutoMode && (
                    <Typography
                        variant="caption"
                        sx={{
                            fontSize: '0.6rem',
                            opacity: 0.7,
                            textAlign: 'center',
                            color: isDarkMode ? '#ffffff' : '#000000',
                        }}
                    >
                        {new Date().toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </Typography>
                )}
            </Box>

            <Container
                maxWidth={false}
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4,
                }}
            >
                <Fade in={mounted} timeout={1000}>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 420,
                            textAlign: 'center',
                        }}
                    >
                        <Stack spacing={3} alignItems="center" sx={{ mb: 4 }}>
                            <Avatar
                                src={profileData.avatar}
                                alt={`${profileData.name} profile picture`}
                                sx={{
                                    width: 120,
                                    height: 120,
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    mb: 1,
                                }}
                            >
                                {profileData.name.split(' ').map(name => name[0]).join('')}
                            </Avatar>

                            <Typography
                                variant="h5"
                                component="h1"
                                sx={{
                                    fontWeight: 600,
                                    mb: 1,
                                }}
                            >
                                {profileData.name}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    opacity: 0.8,
                                    maxWidth: 300,
                                }}
                            >
                                {profileData.bio}
                            </Typography>
                        </Stack>

                        <Stack spacing={0} sx={{ width: '100%' }}>
                            {profileData.links.map((link, index) => (
                                <LinkButton
                                    key={index}
                                    href={link.href}
                                    icon={link.icon}
                                    variant={link.variant}
                                    ariaLabel={link.ariaLabel}
                                >
                                    {link.text}
                                </LinkButton>
                            ))}
                        </Stack>

                        <Box sx={{ mt: 4, opacity: 0.6 }}>
                            <Typography variant="caption" display="block">
                                Built with React & Material-UI
                            </Typography>
                            {isAutoMode && (
                                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                    Theme changes automatically: Dark (7 PM - 6 AM) • Light (6 AM - 7 PM)
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Fade>
            </Container>
        </ThemeProvider>
    );
}

export default App;