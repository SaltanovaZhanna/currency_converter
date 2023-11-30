import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Converter = () => {
    const [amountFrom, setAmountFrom] = useState(1);
    const [currencyFrom, setCurrencyFrom] = useState('UAH');
    const [amountTo, setAmountTo] = useState(null);
    const [currencyTo, setCurrencyTo] = useState('USD');
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${currencyFrom}`;

        axios.get(apiUrl)
            .then(response => {
                const rates = response.data.rates;
                setExchangeRate(rates[currencyTo]);
            })
            .catch(error => console.error('Error fetching exchange rates:', error));
    }, [currencyFrom, currencyTo]);

    useEffect(() => {
        if (exchangeRate !== null) {
            const convertedAmount = (amountFrom * exchangeRate).toFixed(2);
            setAmountTo(convertedAmount);
        }
    }, [amountFrom, exchangeRate]);

    const handleAmountFromChange = (e) => {
        const inputAmount = parseFloat(e.target.value);
        if (!isNaN(inputAmount)) {
            setAmountFrom(inputAmount.toFixed(2));
        }
    };

    const handleCurrencyFromChange = (e) => {
        setCurrencyFrom(e.target.value);
    };

    const handleAmountToChange = (e) => {
        const inputAmount = parseFloat(e.target.value);
        if (!isNaN(inputAmount)) {
            setAmountTo(inputAmount.toFixed(2));
            const newAmountFrom = (inputAmount / exchangeRate).toFixed(2);
            setAmountFrom(newAmountFrom);
        }
    };

    const handleCurrencyToChange = (e) => {
        setCurrencyTo(e.target.value);
    };

    return (
        <div>
            <div>
                <label>Amount:</label>
                <input type="number" value={amountFrom} onChange={handleAmountFromChange} />
                <select value={currencyFrom} onChange={handleCurrencyFromChange}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <div>
                <label>Converted Amount:</label>
                <input type="number" value={amountTo || ''} onChange={handleAmountToChange} />
                <select value={currencyTo} onChange={handleCurrencyToChange}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        </div>
    );
};

export default Converter;
