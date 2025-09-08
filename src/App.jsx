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
} from '@mui/material';
import {
    GitHub,
    LinkedIn,
    LightMode,
    DarkMode,
    Code,
    Article,
    Telegram,
} from '@mui/icons-material';

import { createMonochromeTheme } from './theme';
import LinkButton from './components/LinkButton';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [mounted, setMounted] = useState(false);

    const theme = createMonochromeTheme(isDarkMode);

    // Load preferences from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('themePreference');

        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
        setMounted(true);
    }, []);

    // Save preferences to localStorage
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('themePreference', isDarkMode ? 'dark' : 'light');
        }
    }, [isDarkMode, mounted]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
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
                }}
            >
                <IconButton
                    onClick={toggleTheme}
                    aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    size="large"
                    sx={{
                        backgroundColor: 'rgba(128, 128, 128, 0.1)',
                        '&:hover': {
                            backgroundColor: 'rgba(128, 128, 128, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    {isDarkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
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
                        </Box>
                    </Box>
                </Fade>
            </Container>
        </ThemeProvider>
    );
}

export default App;