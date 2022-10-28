import '.././App.css';
import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react'

import OrderPage0 from './OrderPage0';
import OrderPage1 from './OrderPage1';
import Cart from './Cart';
import FinalPage from './FinalPage';

function OrderPage() {

    const [page, setPage] = useState(0);
    const [location, setLocation] = useState('');
    const [n, setN] = useState(1);

    const [menu1, setMenu1] = useState([])
    const [menu2, setMenu2] = useState([])



    const nextPage = () => {
        if (page < 4) {
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

                {page === 1 && <OrderPage1 menu1={menu1} setMenu1={setMenu1} />}

                {page === 2 && (
                    <div>
                        <h1>Menu Desert: </h1>
                    </div>
                )}

                {page === 3 && <Cart menu1={menu1} menu2={menu2} />}

                {page === 4 && <FinalPage />}

                <Button onClick={prevPage} style={{ marginTop: 30, color: 'white' }} variant="outlined">Prev Page</Button>
                {page !== 4 && <Button onClick={nextPage} style={{ marginTop: 30, color: 'white' }} variant="outlined">Next Page</Button>}

            </header>
        </div>
    );
}

export default OrderPage;
