import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination
} from '@mui/material';

const CompanyList = ({ companies, total, page, rowsPerPage, onPageChange, onRowsPerPageChange }) => {
  const displayedCompanies = companies.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="companies table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Location</strong></TableCell>
            <TableCell><strong>Industry</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedCompanies.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Typography variant="h6">No companies found.</Typography>
              </TableCell>
            </TableRow>
          ) : (
            displayedCompanies.map((company) => (
              <TableRow key={company._id}>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.industry}</TableCell>
                <TableCell>{company.description || 'N/A'}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={total}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={onRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </TableContainer>
  );
};

export default CompanyList;