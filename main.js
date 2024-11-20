const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const fs = require('fs');
const exceljs = require('exceljs');

//Creates app window
function createWindow() {
    const Window = new BrowserWindow({
        title: 'LCR APP',
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    Window.loadFile(path.join(__dirname, './frontend/index.html'));
}

function createWarningWindow() {
    warningWindow = new BrowserWindow({
        width:300,
        height: 300,
        title: "WARNING",
        icon: `${__dirname}/assets/images/icon1.png`
    });


    warningWindow.loadFile(path.join(__dirname, './frontend/warning.html'));
}

ipcMain.on('show-warning', () => {
    createWarningWindow();
});

ipcMain.on('shareData', (event, inputData) => {
    console.log(inputData);
})

app.whenReady().then(() => {
    createWindow();
});
