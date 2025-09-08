import React from 'react';
import { Button, Box } from '@mui/material';

const LinkButton = ({
                        href,
                        icon,
                        children,
                        variant = 'outlined',
                        ariaLabel,
                        ...otherProps
                    }) => {
    const handleClick = () => {
        window.open(href, '_blank', 'noopener,noreferrer');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    };

    return (
        <Button
            variant={variant}
            fullWidth
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            aria-label={ariaLabel || `Open ${children} in new tab`}
            role="button"
            tabIndex={0}
            startIcon={icon}
            sx={{
                mb: 2,
                justifyContent: 'flex-start',
                textAlign: 'left',
                '& .MuiButton-startIcon': {
                    marginRight: 2,
                },
            }}
            {...otherProps}
        >
            <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
                {children}
            </Box>
        </Button>
    );
};

export default LinkButton;