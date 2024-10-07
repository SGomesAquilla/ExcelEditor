// Import the necessary modules
const FS = require('fs');
const exceljs = require('exceljs');
let path = "C:/Users/aquil/Desktop/Dev Study/LCR_Excel/LABMETRO-DQ.xlsx";

// Updates an existing Excel file
async function updateExcel() {
    let accessExcel = new exceljs.Workbook();
    try {
        await accessExcel.xlsx.readFile(path);
        let worksheet = accessExcel.getWorksheet('sheet');
        worksheet.getCell('C12').value = 'UPDATED';
        await accessExcel.xlsx.writeFile(path);
        console.log('FILE UPDATED');
    } catch (error) {
        console.error('ERROR!', error);
    }
}

// Calls the function
updateExcel();