# LCR Excel App

## Project Overview
This project is a desktop application built using **Electron** to automate the process of filling out Excel forms for work-related tasks. The app is designed to streamline data entry for colleagues by simplifying interactions with Excel files through an intuitive graphical interface.

## Features
- **Automatic Excel Form Filling**: The app reads and writes data to Excel files using the **ExcelJS** library.
- **Customizable UI**: The interface allows users to input data into specific fields related to calibration and measurement, and the app processes this information into the Excel forms.
- **Automation**: Tasks such as updating existing Excel files and creating new ones are automated, reducing human error and saving time.
- **Notifications**: User notifications and feedback are handled via **ToastifyJS** to ensure smooth interactions.

## Folder Structure
- **frontend/index.html**: The main user interface for the application. It contains the form fields where users input data.
- **frontend/styles.css**: The stylesheet that defines the layout and design of the app's interface.
- **package.json**: The configuration file for the Electron project, which includes metadata such as the project name, version, and dependencies.
- **update.js**: Script for updating existing Excel files, modifying specific cells with new data.
- **create.js**: Script for creating new Excel files, generating a simple template with test values.
- **main.js**: The main Electron process responsible for creating the application window and loading the user interface.
