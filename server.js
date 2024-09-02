// server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để phục vụ các tệp tĩnh
app.use(express.static(path.join(__dirname)));

// Route chính để hiển thị trang index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route cho trang player.html
app.get('/player', (req, res) => {
    res.sendFile(path.join(__dirname, 'player.html'));
});

// Bắt đầu server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

