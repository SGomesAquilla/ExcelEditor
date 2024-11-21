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

ipcMain.on('shareData', async (event, inputData) => {
    console.log(inputData);
    let accessExcel = new exceljs.Workbook();
    try {
        await accessExcel.xlsx.readFile(path.join(__dirname, 'LABMETRO-DQ.xlsx'));
        let worksheet = accessExcel.getWorksheet('sheet');
        worksheet.getCell('C12').value = 'MAFE EU TE AMO';
        await accessExcel.xlsx.writeFile(path.join(__dirname, 'LABMETRO-DQ.xlsx'));
    } catch (error) {
        console.error('ERROR!', error);
    }
});

app.whenReady().then(() => {
    createWindow();
});
