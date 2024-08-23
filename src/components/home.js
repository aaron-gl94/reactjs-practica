import { Container, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>Bienvenido a "React.js - Práctica"</Typography>
            <Typography variant="body1">Esta es una página de práctica para reforzar conocimientos.</Typography>
        </Container>
    );
};

export default Home;