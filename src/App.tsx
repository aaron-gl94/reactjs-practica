import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CsvPage from './pages/UploaderCsvPage';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>React.js - Práctica</Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/contact">Contacto</Button>
          <Button color="inherit" component={Link} to="/upload-csv">Carga CSV</Button>
        </Toolbar>
      </AppBar>

      <br /><br />

      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/upload-csv" element={<CsvPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;