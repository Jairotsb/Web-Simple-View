const { app, BrowserWindow, globalShortcut } = require('electron')

//const config = require('./config')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 500,
        height: 450,
        vibrancy: 'ultra-dark',
        titleBarStyle: 'hidden',
        backgroundColor: '',
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    })
    win.once('ready-to-show', () => {
        win.show()
    })

    win.loadFile('index.html')
    win.setMenuBarVisibility(false)

    
              

    //win.removeMenu(null) 
}

function toggleDevTools() {
    win.webContents.toggleDevTools()
}
function loadYoutube() {
  win.loadURL('https://www.youtube.com/')
}

function loadLocalhost(){
  win.loadURL('http://localhost:3000/')
}

function loadGoogle(){
  win.loadURL('https://www.google.com/')
}

function loadIndex(){
  win.loadFile('index.html')

}


function createShortcuts() {
    globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
    globalShortcut.register('CmdOrCtrl+Y', loadYoutube)
    globalShortcut.register('CmdOrCtrl+L', loadLocalhost)
    globalShortcut.register('CmdOrCtrl+G', loadGoogle)
    globalShortcut.register('CmdOrCtrl+B', loadIndex)
}





app.whenReady()
    .then(createWindow)
    .then(createShortcuts)
    //.then(config.setWindow())

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

