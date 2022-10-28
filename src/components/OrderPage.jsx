import '.././App.css';
import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react'

import OrderPage0 from './OrderPage0';

function OrderPage() {

    const [page, setPage] = useState(0);
    const [location, setLocation] = useState('');
    const [n, setN] = useState(1);


    const nextPage = () => {
        if (page < 2) {
            const temp = page + 1;
            setPage(temp);
        }
    }

    const prevPage = () => {
        if (page >= 0) {
            const temp = page - 1;
            setPage(temp);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                {page === 0 && <OrderPage0 location={location} n={n} setLocation={setLocation} setN={setN} />}

                {page === 1 && (
                    <div>
                        <h1>This is menu page 1</h1>
                    </div>
                )}

                {page === 2 && (
                    <div>
                        <h1>This is menu page 2</h1>
                    </div>
                )}

                <Button onClick={prevPage} style={{ marginTop: 30 }} variant="outlined">Prev Page</Button>
                <Button onClick={nextPage} style={{ marginTop: 30 }} variant="outlined">Next Page</Button>

            </header>
        </div>
    );
}

export default OrderPage;
