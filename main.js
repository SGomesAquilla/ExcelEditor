const {app, BrowserWindow} = require('electron');

function createWindow() {
    const Window = new BrowserWindow({
        title: 'LCR APP',
        width: 1000,
        height: 700
    });

    Window.loadFile("C:/Users/aquil/Desktop/Dev Study/LCR_Excel/frontend/index.html");
}

app.whenReady().then(() => {
    createWindow();
});