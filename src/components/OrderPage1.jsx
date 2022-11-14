import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
        field: 'DishName',
        headerName: 'Dish Name',
        width: 200,
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
    { id: 1, DishName: 'Savor Party Bread', Price: 299 },
    { id: 2, DishName: 'Fruit Charcuterie Board', Price: 359 },
    { id: 3, DishName: 'Hot Spinach Artichoke Dip', Price: 499 },
    { id: 4, DishName: 'Fried Prosciutto Tortellini', Price: 199 },
];

export default function OrderPage1({menu1, setMenu1}) {

    return (
        <div>
            <h1>Menu Appetizer</h1>
            <Box sx={{ height: 400, width: 430, color: 'white' }}>
                <DataGrid
                    style={{ color: 'white' }}
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={(newSelection) => {
                        setMenu1(newSelection);
                    }}
                    rowsPerPageOptions={[6]}
                    hideFooter={true}
                />
            </Box>
        </div>
    );
}


