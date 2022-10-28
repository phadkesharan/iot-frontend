import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

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

export default function OrderPage1() {

    const [selection, setSelection] = useState(null)

    return (
        <div>
            <h1>Menu Appetizer</h1>
            <Box sx={{ height: 400, width: 300, color: 'white' }}>
                <DataGrid
                    style={{ color: 'white' }}
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    disableSelectionOnClick
                    onSelectionModelChange={(newSelection) => {
                        setSelection(newSelection);
                    }}
                    rowsPerPageOptions={[6]}
                    hideFooter={true}
                />
            </Box>
        </div>
    );
}


