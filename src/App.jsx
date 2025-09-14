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
import CursorFollower from './components/CursorFollower';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [mounted, setMounted] = useState(false);

    const theme = createMonochromeTheme(isDarkMode);

    const getSystemTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    useEffect(() => {
        setIsDarkMode(getSystemTheme());
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            const handleSystemThemeChange = (e) => {
                setIsDarkMode(e.matches);
            };

            mediaQuery.addEventListener('change', handleSystemThemeChange);

            return () => {
                mediaQuery.removeEventListener('change', handleSystemThemeChange);
            };
        }
    }, [mounted]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const profileData = {
        name: 'Dmytro Tatarynov',
        bio: 'Software Engineer with 5+ years experience',
        avatar: 'public/photo_2025-09-14_21-30-33.jpg',
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
                ariaLabel: 'Visit Dmytro Tatarynov Telegram'
            },
        ]
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: isDarkMode
                        ? 'radial-gradient(circle at 15% 50%, rgba(33, 33, 33, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)'
                        : 'radial-gradient(circle at 15% 50%, rgba(245, 245, 245, 0.9) 0%, rgba(224, 224, 224, 0.95) 100%)',
                    zIndex: -1,
                }}
            />

            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    overflow: 'hidden',
                    opacity: 0.3,
                }}
            >
                {[...Array(5)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: 'absolute',
                            width: 100 + i * 50,
                            height: 100 + i * 50,
                            borderRadius: '50%',
                            background: isDarkMode
                                ? `rgba(128, 128, 128, ${0.1 + i * 0.1})`
                                : `rgba(128, 128, 128, ${0.05 + i * 0.1})`,
                            top: `${20 + i * 10}%`,
                            left: `${5 + i * 5}%`,
                            animation: 'float 15s ease-in-out infinite',
                            animationDelay: `${i * 2}s`,
                            '@keyframes float': {
                                '0%': {
                                    transform: 'translateY(0) rotate(0deg)',
                                },
                                '50%': {
                                    transform: `translateY(${20 + i * 5}px) rotate(${90 + i * 30}deg)`,
                                },
                                '100%': {
                                    transform: 'translateY(0) rotate(0deg)',
                                },
                            },
                        }}
                    />
                ))}
            </Box>

            <CursorFollower isDarkMode={isDarkMode} />

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
                        backdropFilter: 'blur(10px)',
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
                    position: 'relative',
                }}
            >
                <Fade in={mounted} timeout={1000}>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 450,
                            textAlign: 'center',
                            background: isDarkMode
                                ? 'rgba(18, 18, 18, 0.7)'
                                : 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 4,
                            p: 4,
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                            border: isDarkMode
                                ? '1px solid rgba(255, 255, 255, 0.1)'
                                : '1px solid rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <Stack spacing={3} alignItems="center" sx={{ mb: 4 }}>
                            <Avatar
                                src={profileData.avatar}
                                alt={`${profileData.name} profile picture`}
                                sx={{
                                    width: 140,
                                    height: 140,
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    mb: 2,
                                    border: isDarkMode
                                        ? '3px solid rgba(255, 255, 255, 0.2)'
                                        : '3px solid rgba(0, 0, 0, 0.1)',
                                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                                    transform: 'rotate(-25deg)',
                                }}
                            >
                                {profileData.name.split(' ').map(name => name[0]).join('')}
                            </Avatar>

                            <Typography
                                variant="h4"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    background: isDarkMode
                                        ? 'linear-gradient(45deg, #fff, #aaa)'
                                        : 'linear-gradient(45deg, #000, #444)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {profileData.name}
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    opacity: 0.9,
                                    maxWidth: 300,
                                    fontSize: '1.1rem',
                                }}
                            >
                                {profileData.bio}
                            </Typography>
                        </Stack>

                        <Stack spacing={1.5} sx={{ width: '100%' }}>
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