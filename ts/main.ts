import { app } from "electron";
import { TheNextMusicPlayerWindow } from "./main/ToolsWindows/theNextMusicPlayer";
import { TheNextToolsBase } from "./main/ToolsWindows/theNextToolsBase";
let musicWindow: TheNextToolsBase = null;
app.on("ready", () => {
    musicWindow = new TheNextMusicPlayerWindow();
});
