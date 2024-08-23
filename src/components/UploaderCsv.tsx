import { Box, Container, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { saveCSVData } from "../services/localStorageService";

const UploaderCsv: React.FC = () => {
   const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        
        reader.onload = () => {
            const text = reader.result as string;
            saveCSVData('csvData', text); // Guardar los datos en localStorage
            console.log(' - [onDrop] - Mensaje: Archivo CSV guardado en localstorage');
        };

        reader.onerror = (error) => {
            throw new Error(" - [reader] - Error al leer el arcchivo: "+error);
        };

        reader.readAsText(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'text/csv': ['.csv'] },
        onDrop,
    });

  return (

    <Container>
        <Typography variant="h4" gutterBottom>Upload CSV File</Typography>

        <Box {...getRootProps()} sx={{ border: '2px dashed grey', padding: 2, textAlign: 'center' }}>
        <input {...getInputProps()} />
        <Typography variant="h6">
            Arrastra y suelta aquí tu archivo CSV, o da click aquí y selecciona tu archivo.
        </Typography>
    </Box>
    </Container>
  );
}

export default UploaderCsv;
