import React from 'react'
import { List, ListItem, ListItemText, Paper } from '@mui/material'

const ProductList = ({ filteredItems }) => {
    return (
        <>
            <Paper>
                <List>
                    {filteredItems.map(item => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item.title}
                                secondary={item.body} />
                        </ListItem>
                    ))}
                </List>
            </Paper>

        </>
    )
}

export default ProductList