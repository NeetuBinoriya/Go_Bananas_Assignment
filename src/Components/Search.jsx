import React from 'react'
import { TextField, Box } from '@mui/material'


const Search = ({ setSearchItems }) => {
    return (
        <Box mb={4}>
        <TextField label="Search"  variant='outlined' fullWidth onChange={(e) => setSearchItems(e.target.value)} />
         </Box>
    );
};

export default Search;