import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const UploaderCsv: React.FC = () => {
  const onDrop = (acceptedFiles: File[]) => {
    // Aquí se maneja el archivo CSV cargado
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
        'text/csv': ['.csv']
    },
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
