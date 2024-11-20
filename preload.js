const os = require('os');
const path = require('path');
const { contextBridge, ipcRenderer } = require('electron');
const renderer = require('./frontend/renderer.js');

contextBridge.exposeInMainWorld('run', renderer);
