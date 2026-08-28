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
});