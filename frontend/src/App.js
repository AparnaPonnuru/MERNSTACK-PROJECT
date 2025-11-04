import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { 
  Container, 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box, 
  Grid, 
  Button, 
  Paper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import CompanyList from './components/CompanyList';
import SettingsDialog from './components/SettingsDialog';
import './styles/global.css';
import './styles/components.css';

// Module-scoped API base and stable axios instance.
// This prevents recreating the axios instance on every render and satisfies hook lint rules.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';
const api = axios.create({
  baseURL: API_BASE_URL,
  // headers: { 'Content-Type': 'application/json' } // add if needed
});

function App() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [locations, setLocations] = useState([]);
  const [industries, setIndustries] = useState([]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3b82f6',
      },
    },
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
    shape: {
      borderRadius: 12,
    },
  });

  const fetchCompanies = useCallback(async () => {
    try {
      setLoading(true);
      const params = {};
      if (search) params.search = search;
      if (locationFilter) params.location = locationFilter;
      if (industryFilter) params.industry = industryFilter;

      const response = await api.get('/companies', { params });
      setCompanies(response.data);
      setTotal(response.data.length);
      if (!search && !locationFilter && !industryFilter) {
        const uniqueLocations = [...new Set(response.data.map(c => c.location).filter(Boolean))].sort();
        const uniqueIndustries = [...new Set(response.data.map(c => c.industry).filter(Boolean))].sort();
        setLocations(uniqueLocations);
        setIndustries(uniqueIndustries);
      }
    } catch (error) {
      console.error('Error fetching companies:', error);
    } finally {
      setLoading(false);
    }
  }, [search, locationFilter, industryFilter]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  useEffect(() => {
    setPage(0);
  }, [search, locationFilter, industryFilter]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAboutOpen = () => {
    setShowAbout(true);
  };

  const handleAboutClose = () => {
    setShowAbout(false);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const clearAllFilters = () => {
    setSearch('');
    setLocationFilter('');
    setIndustryFilter('');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
        {/* Header */}
        <AppBar position="fixed" className="app-header">
          <Toolbar className="flex-between">
            <div className="flex-center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleSidebarToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                CorpFinder
              </Typography>
            </div>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {total} companies found
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Sidebar
          open={sidebarOpen}
          onClose={handleSidebarToggle}
          onSettingsOpen={handleSettingsOpen}
          onAboutOpen={handleAboutOpen}
          darkMode={darkMode}
        />
        
        {/* Main Content */}
        <Box component="main" className="main-content">
          <Container maxWidth="xl">
            {showAbout ? (
              <Paper className="modern-card" sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom className="text-gradient" align="center">
                  About CorpFinder
                </Typography>
                <div style={{ lineHeight: '1.8' }}>
                  <Typography variant="body1" paragraph>
                    CorpFinder is a comprehensive platform designed to help users discover and explore companies from around the world.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Our mission is to provide an intuitive and efficient way to search, filter, and learn about various businesses across different industries and locations.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Features include advanced search capabilities, location and industry filters, and a clean, responsive interface built with modern web technologies.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Whether you're a researcher, investor, or just curious about the business landscape, CorpFinder aims to be your go-to resource for company information.
                  </Typography>
                </div>
                <Box textAlign="center" mt={3}>
                  <Button 
                    variant="contained" 
                    onClick={handleAboutClose}
                    className="modern-btn"
                  >
                    Back to Companies
                  </Button>
                </Box>
              </Paper>
            ) : (
              <>
                {/* Hero Section */}
                <div className="hero-section">
                  <Typography variant="h3" component="h1" className="hero-title">
                    Find Your Perfect Company Match
                  </Typography>
                  <Typography variant="h6" className="hero-subtitle">
                    Discover thousands of companies worldwide. Filter by location, industry, and more to find exactly what you're looking for.
                  </Typography>
                </div>

                {/* Search and Filter Section */}
                <Paper className="search-section">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                      <SearchBar search={search} setSearch={setSearch} darkMode={darkMode} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FilterDropdown
                        label="Location"
                        options={locations}
                        value={locationFilter}
                        onChange={setLocationFilter}
                        darkMode={darkMode}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FilterDropdown
                        label="Industry"
                        options={industries}
                        value={industryFilter}
                        onChange={setIndustryFilter}
                        darkMode={darkMode}
                      />
                    </Grid>
                  </Grid>
                  
                  {/* Active Filters */}
                  {(search || locationFilter || industryFilter) && (
                    <div style={{ marginTop: '16px' }}>
                      <div className="flex-between" style={{ marginBottom: '8px' }}>
                        <Typography variant="body2" fontWeight="medium">
                          Active Filters:
                        </Typography>
                        <Button size="small" onClick={clearAllFilters}>
                          Clear All
                        </Button>
                      </div>
                      <div>
                        {search && (
                          <button className="filter-tag blue" onClick={() => setSearch('')}>
                            Search: "{search}" ×
                          </button>
                        )}
                        {locationFilter && (
                          <button className="filter-tag green" onClick={() => setLocationFilter('')}>
                            Location: "{locationFilter}" ×
                          </button>
                        )}
                        {industryFilter && (
                          <button className="filter-tag purple" onClick={() => setIndustryFilter('')}>
                            Industry: "{industryFilter}" ×
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </Paper>

                {/* Company List */}
                {loading ? (
                  <div style={{ textAlign: 'center', padding: '48px' }}>
                    <div className="loading-spinner"></div>
                    <Typography variant="h6" style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                      Loading companies...
                    </Typography>
                  </div>
                ) : (
                  <CompanyList 
                    companies={companies} 
                    total={total} 
                    page={page} 
                    rowsPerPage={rowsPerPage} 
                    onPageChange={handlePageChange} 
                    onRowsPerPageChange={handleRowsPerPageChange}
                    darkMode={darkMode}
                  />
                )}
              </>
            )}
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" className="app-footer">
          <Typography variant="body2" align="center" color="text.secondary">
            © {new Date().getFullYear()} CorpFinder. All rights reserved. CorpFinder is a registered trademark.
          </Typography>
        </Box>

        <SettingsDialog
          open={settingsOpen}
          onClose={handleSettingsClose}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
