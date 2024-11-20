const { ipcRenderer } = require("electron");

const rendererScripts = {
    test: () => {
        let div = document.getElementById("test");
        let text = `
        hello sir !
        <button></button>`;
        div.innerHTML = text;
    },

    // Gets the information on the inputs and then prints them on the excel file
    exportToSheetValues: () => {
        let getInputValue = (id) => document.getElementById(id).value;
        const inputData = {
            eletrometro: getInputValue('eletrometro'),
            camara: getInputValue('camara'),
            krLCR: getInputValue('KR(LCR)'),
            dataKr: getInputValue('DataKR'),
            proprietario: getInputValue('proprietario'),
            fabricante: getInputValue('fabricante'),
            modelo: getInputValue('modelo'),
            serie: getInputValue('serie'),
            inserto: getInputValue('inserto'),
            nkFab: getInputValue('NK(Fab)'),
            tempRefCert: getInputValue('TempRefCert'),
            nkCorrigido: getInputValue('NKCorrigido')
        };

        // If one of the input boxes is empty, this line of code will send a IPC message to the main.js 
        for (let inputBox in inputData) {
            if (!inputData[inputBox]) {
                ipcRenderer.send('show-warning');
                return;
            }
        }
        // send the information about inputData on the channel called 'shareData'
        console.log(inputData);
        ipcRenderer.send('shareData', inputData);
        return;
    }
}

module.exports = rendererScripts;