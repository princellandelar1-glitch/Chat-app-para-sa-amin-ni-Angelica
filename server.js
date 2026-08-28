
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// I-set ang public folder para basahin ang index.html at style.css
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Dito natin ilalagay ang tamang username at password ninyong dalawa
const COUPLES = {
    "Prince": "pampam123", // Palitan mo ng gusto mo
    "Angelica": "angel123"  // Palitan mo ng gusto mo
};

// API para sa Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (COUPLES[username] && COUPLES[username] === password) {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Mali ang pangalan o password, mahal!' });
    }
});

io.on('connection', (socket) => {
    console.log('May naka-connect sa P and A app');

    socket.on('chat_message', (data) => {
        io.emit('chat_message', data);
    });

    socket.on('disconnect', () => {
        console.log('Nag-disconnect ang user');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Ang P and A app ay tumatakbo sa http://localhost:${PORT}`);
});