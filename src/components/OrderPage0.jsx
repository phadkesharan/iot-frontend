import React from 'react';
import { TextField } from '@mui/material';

export default function OrderPage0({location, n, setLocation, setN}) {

    return (
        <div style={{ width: 300, color: 'white' }}>
            <h1 style={{}}>Team Enigma</h1>
            <TextField
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                style={{ marginTop: 30 }}
                fullWidth
                label="Enter number of people dining"
                variant="outlined"
                focused
                onChange={({target})=>{
                    setN(target.value)
                }}
            />

            <br />

            <TextField
                style={{ marginTop: 30 }}
                label="Enter Location"  
                fullWidth
                variant="outlined"
                focused
                onChange={({target})=>{
                    setLocation(target.value)
                }}
            />
        </div>
    );
}
