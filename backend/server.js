

const express = require('express');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = 3000;

const API_URL = 'https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/en.1.json';

app.get('/api/matches', async (req, res) => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', response.status, errorText);
            return res.status(response.status).json({ error: 'Failed to fetch matches from external API' });
        }

        const data = await response.json();
        console.log('API Response:', data);
        res.json(data);
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use(express.static('../frontend'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
