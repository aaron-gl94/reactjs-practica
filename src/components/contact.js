import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías manejar la lógica de envío del formulario
        console.log('Form data:', formData);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Contacto</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <Button variant="contained" color="primary" type="submit">Enviar</Button>
            </Box>
        </Container>
    );
};

export default Contact;
