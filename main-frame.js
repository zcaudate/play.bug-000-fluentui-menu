const electron = require("electron");

const contextMenu = require("electron-context-menu");

const BrowserWindow = electron.BrowserWindow;

const electron_create_window = function () {
  let frame = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });
  frame.loadURL(MAIN_INNER_WEBPACK_ENTRY);
  frame.webContents.openDevTools();
};

const electron_main_frame = function () {
  let app = electron.app;
  contextMenu({});
  app.on("ready", electron_create_window);
  app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows.length === 0) {
      electron_create_window();
    }
  });
};

electron_main_frame()