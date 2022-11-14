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
    { id: 5, DishName: 'Newyork Cheese Cake', Price: 299 },
    { id: 6, DishName: 'Lemon Meringue Pie', Price: 199 },
    { id: 7, DishName: 'Warm bread pudding', Price: 449 },
    { id: 8, DishName: 'Red Velvet Cake', Price: 999 },
];

export default function OrderPage2({menu2, setMenu2}) {

    return (
        <div>
            <h1>Menu Dessert</h1>
            <Box sx={{ height: 400, width: 430, color: 'white' }}>
                <DataGrid
                    style={{ color: 'white' }}
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={(newSelection) => {
                        setMenu2(newSelection);
                    }}
                    rowsPerPageOptions={[6]}
                    hideFooter={true}
                />
            </Box>
        </div>
    );
}


