import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
        field: 'DishName',
        headerName: 'Dish Name',
        width: 100,
        editable: true,
    },
    {
        field: 'Price',
        headerName: 'Price',
        type: 'number',
        width: 100,
        editable: true,
    }
];

const rows = [
    { id: 1, DishName: 'Fish', Price: 299 },
    { id: 2, DishName: 'Fish', Price: 299 },
    { id: 3, DishName: 'Fish', Price: 299 },
    { id: 4, DishName: 'Fish', Price: 299 },
    { id: 5, DishName: 'Fish', Price: 299 },
    { id: 6, DishName: 'Fish', Price: 299 },
];

export default function Cart({ menu1, menu2 }) {

    const netRows = []
    menu1.forEach(i => {
        netRows.push(rows[i-1])
        console.log(rows[i-1])
    })

    console.log(netRows.length)

    let total = 0;
    netRows.forEach(i=>{
        total += i['Price']
    })

    return (
        <div>
            <h1>Your Cart</h1>
            <Box sx={{ height: 400, width: 300, color: 'white' }}>
                <DataGrid
                    style={{ color: 'white' }}
                    rows={netRows}
                    columns={columns}
                    rowsPerPageOptions={[6]}
                    hideFooter={true}
                />
            </Box>
            <h4>Total : {total}</h4>
        </div>
    )
}
