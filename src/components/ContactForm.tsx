 import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validar formulario aquí
    if (name === '') {
      setErrors({ ...errors, name: 'Nombre es requerido' });
    } else if (email === '') {
      setErrors({ ...errors, email: 'Email es requerido' });
    } else if (phone === '') {
      setErrors({ ...errors, phone: 'Teléfono es requerido' });
    } else {
      // Procesar envío
      alert(' - Datos enviados correctamente');
    }
  };

  return (
    <Container>
        <Typography variant="h4" gutterBottom>Contacto</Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                fullWidth
                label="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
            />
            <TextField
                margin="normal"
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
            />
            <TextField
                margin="normal"
                fullWidth
                label="Teléno"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={!!errors.phone}
                helperText={errors.phone}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
                Enviar
            </Button>
        </Box>
    </Container>

  );
}

export default ContactForm;
