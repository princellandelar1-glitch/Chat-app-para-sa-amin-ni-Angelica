<<<<<<< HEAD
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// I-set ang public folder para basahin ang index.html at style.css
app.use(express.static(path.join(__dirname, 'public')));

// O kaya kung nasa root folder ang index.html mo:
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log('Server is running...');
=======
<<<<<<< HEAD
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
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

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Ang P and A app ay tumatakbo sa http://localhost:${PORT}`);
=======
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
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

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Ang P and A app ay tumatakbo sa http://localhost:${PORT}`);
>>>>>>> ae491bf4dfc89ea1852d34c03541f11f348f053d
>>>>>>> b4af5385995fcfaeb8f81bc5e4e52adde2bae40e
});