import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, TextField, List, ListItem, ListItemText, Paper } from '@mui/material';
import axios from 'axios';
import ProductList from './Components/ProductList';
import Search from './Components/Search';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [searchItems, setSearchItems] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setfilteredItems(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      })
  }, []);

  useEffect(() => {
    setfilteredItems(
      data.filter(item =>
        item.title.toLowerCase().includes(searchItems.toLowerCase())
      )
    );

  }, [searchItems, data])

  return (
    <>
      <Container maxWidth='md' sx={{mt: 4}}>
      <Box textAlign={'center'} mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          API Data Fetching with Material-UI Showing as Assignment
        </Typography>
        </Box>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchItems(e.target.value)}
        />
        <Paper>
          <List>
            {filteredItems.map(item => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.title}
                  secondary={item.body}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Search setSearchItems={setSearchItems} />
        <ProductList filteredItems={filteredItems} />
      </Container>

    </>
  )
}

export default App