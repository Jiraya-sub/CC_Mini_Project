const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5500;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample stock data (Static JSON)
const stocks = [
    { name: 'TCS', symbol: 'TCS', price: '₹4,120.50', change: '+1.2%' },
    { name: 'Infosys', symbol: 'INFY', price: '₹1,650.00', change: '-0.5%' },
    { name: 'Reliance', symbol: 'RELIANCE', price: '₹2,980.20', change: '+2.1%' },
    { name: 'HDFC Bank', symbol: 'HDFCBANK', price: '₹1,540.00', change: '+0.8%' },
    { name: 'Wipro', symbol: 'WIPRO', price: '₹480.15', change: '-1.1%' }
];

// API Route to get stocks data (for potential future dynamic use)
app.get('/api/stocks', (req, res) => {
    res.json(stocks);
});

// Route for the About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Main Route (Dashboard)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Stocks Dashboard is running at http://localhost:${PORT}`);
});
