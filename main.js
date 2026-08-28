<<<<<<< HEAD
const { app, BrowserWindow } = require('electron');
require('./server.js'); // Pinapaandar ang server sa background

function createWindow() {
    const win = new BrowserWindow({
        width: 450,
        height: 700,
        title: "P and A App"
    });

    win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
    createWindow();
=======
const { app, BrowserWindow } = require('electron');
const path = require('path');
require('./server.js'); // Pinapaandar nito ang server sa background

function createWindow() {
    const win = new BrowserWindow({
        width: 450,
        height: 700,
        title: "P and A App"
    });

    win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
    createWindow();
>>>>>>> b4af5385995fcfaeb8f81bc5e4e52adde2bae40e
});