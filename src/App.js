import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './components/contact';
import Home from './components/home';
import UploaderCsv from './components/uploaderCsv';

function App() {
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

      <br/><br/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload-csv" element={<UploaderCsv />} />
      </Routes>
    </Router>
  );
}

export default App;
