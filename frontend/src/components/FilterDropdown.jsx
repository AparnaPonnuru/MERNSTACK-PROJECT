import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterDropdown = ({ label, options, value, onChange }) => {
  return (
    <FormControl sx={{ mb: 2, minWidth: 200, width: '100%' }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterDropdown;