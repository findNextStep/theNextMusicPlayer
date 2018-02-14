import { TheNextEmptyBase } from "./theNextEmptyBase";

export class TheNextMusicPlayerWindow extends TheNextEmptyBase {
    constructor() {
        super();
        this.registerOneShortcut("ctrl+e", () => {
            console.log("debug on");
            if (this.isFocused()) {
                this.mainWindow.webContents.openDevTools({ mode: "detach" });
            }
        });
    }
}
