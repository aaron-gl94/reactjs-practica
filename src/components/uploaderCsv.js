import { Container, Paper, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const UploaderCsv = () => {
    const onDrop = useCallback((acceptedFiles) => {
        // Aquí podrías manejar la lógica de carga de archivos CSV
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.csv',
    });

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Upload CSV File</Typography>
            <Paper {...getRootProps()} sx={{ p: 2, border: '2px dashed #000', textAlign: 'center' }}>
                <input {...getInputProps()} />
                <Typography variant="body1">
                    Arrastra  y suelta el archivo CSV aquí, o da click y selecciona tu archivo CSV.
                </Typography>
            </Paper>
        </Container>
    );
};

export default UploaderCsv;
