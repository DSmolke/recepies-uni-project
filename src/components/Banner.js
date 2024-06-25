import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
    background-color: #3f51b5;  // Możesz dostosować kolor tła
    color: white;
`;

const CenteredToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;  // Center horizontally
  align-items: center;      // Center vertically
`;

const Banner = () => {
    return (
        <StyledAppBar position="static">
            <CenteredToolbar>
                <Typography variant="h6">
                    Find recepies, that will match your preferences:
                </Typography>
            </CenteredToolbar>
        </StyledAppBar>
    );
};

export default Banner;
