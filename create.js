// Import the necessary modules
const Excel = require('exceljs');
const FS = require('fs');

// Create a new Excel file
async function createExcel(fileName) {
    try {
        const workbook = new Excel.Workbook();
        const sheet = workbook.addWorksheet('Sheet1', {
            headerFooter:{firstHeader: "HI!", firstFooter:"Bye!!!"}
        });
        sheet.getCell('A1').value = 'Excel';
        sheet.getCell('B1').value = 'Test';
        await workbook.xlsx.writeFile(fileName);
        console.log(`${fileName.toUpperCase()} CREATED SUCCESSFULLY.`);
    } catch (error) {
        console.error('Error creating Excel file:', error);
    }
}

// Calls the function
createExcel('example.xlsx');