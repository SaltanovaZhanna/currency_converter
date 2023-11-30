import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import '../../assets/scss/style.scss';
import Logo from '../../assets/img/logo.png';
import MainMenu from "../mainMenu/MainMenu";

const links = {
    class: 'main-menu',
    link: [
        {
            link:'NEWS',
            path: '/news',
        },
        {
            link:'BANKS',
            path: '/banks',
        },
    ],
}

function Header() {
    const [exchangeRates, setExchangeRates] = useState(null);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/UAH');
                setExchangeRates(response.data.rates);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchExchangeRates();
    }, []);

    return (
        <header>
            <div className="header">
                <Link to="/"><img src={Logo} alt="logo" className='logo'/></Link>
                <MainMenu links={links.link}/>
                <div className="currency">
                    <h2>Exchange Rates:</h2>
                    <ul>
                        {exchangeRates &&
                            <ul>
                                <li>USD: {(1 / exchangeRates.USD).toFixed(2)}</li>
                                <li>EUR: {(1 / exchangeRates.EUR).toFixed(2)}</li>
                            </ul>
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;