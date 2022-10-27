import '.././App.css';
import React from 'react';
import Button from '@mui/material/Button';
import logo from '../images/logo_cropped.png'
import sponser from '../images/sponser.png'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Team Enigma</h1>
                <img style={{ marginLeft: 30 }} width={200} height={200} src={logo} />
                <h3>Sponsered By</h3>
                <img style={{ marginLeft: 10 }} width={100} height={100} src={sponser} />
                <Link to="/order">
                    <Button style={{ marginTop: 30 }} variant="outlined">Order Food Now !</Button>
                </Link>
            </header>
        </div>
    );
}

export default HomePage;
