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
        worksheet.getCell('C12').value = inputData.eletrometro;
        worksheet.getCell('C13').value = inputData.camara;
        worksheet.getCell('I12').value = inputData.krLCR;
        worksheet.getCell('I13').value = inputData.datar;
        worksheet.getCell('B19').value = inputData.proprietario;
        worksheet.getCell('B22').value = inputData.fabricante;
        worksheet.getCell('D22').value = inputData.modelo;
        worksheet.getCell('F22').value = inputData.serie;
        worksheet.getCell('G22').value = inputData.inserto;
        worksheet.getCell('H22').value = inputData.nkFab;
        worksheet.getCell('I22').value = inputData.tempRefCert;
        worksheet.getCell('J22').value = inputData.nkCorrigido;
        await accessExcel.xlsx.writeFile(path.join(__dirname, 'LABMETRO-DQ.xlsx'));
    } catch (error) {
        console.error('ERROR!', error);
    }
});

app.whenReady().then(() => {
    createWindow();
});
