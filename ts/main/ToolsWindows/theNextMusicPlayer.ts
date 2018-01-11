import { TheNextToolsBase } from "./theNextToolsBase";

export class TheNextMusicPlayerWindow extends TheNextToolsBase {
    constructor() {
        super();
        this.registerOneShortcut("ctrl+e", () => {
            console.log("debug on");
            if (this.isFocused()) {
                this.mainWindow.webContents.openDevTools({ mode: "detach" });
            }
        });
        this.mainWindow.loadURL("file://" + __dirname + "/../../../index/empty.html");
    }
}
