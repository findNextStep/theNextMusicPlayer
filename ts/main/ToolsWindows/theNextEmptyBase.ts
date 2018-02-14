import { ipcMain, nativeImage } from "electron";
import { TheNextToolsBase } from "./theNextToolsBase";

export class TheNextEmptyBase extends TheNextToolsBase {
    private show: boolean = false;
    constructor(icoPath?: string | nativeImage) {
        super(icoPath);
        this.mainWindow.loadURL("file://" + __dirname + "/../../../index/emptybase.html");
    }
    /**
     * 向窗口添加css文件
     *
     * @param {string} url 文件目录或网络地址
     * @memberof TheNextEmptyBase
     */
    public loadCss(url: string) {
        this.runRegardlessShowed(() => {
            console.log("add css\t" + url);
            this.mainWindow.webContents.send("load_css", url);
        });
    }
    /**
     * 删除窗口添加的css文件
     *
     * @param {string} url 文件目录或网络地址
     * @memberof TheNextEmptyBase
     */
    public removeCss(url: string) {
        this.runRegardlessShowed(() => {
            console.log("remove \t" + url);
            this.mainWindow.webContents.send("remove_css", url);
        });
    }
    /**
     * 添加窗口的执行回调
     *
     * @protected
     * @param {string} url 执行js文件的位置(require位置)
     * @memberof TheNextEmptyBase
     */
    protected execJs(url: string) {
        this.runRegardlessShowed(() => {
            this.mainWindow.webContents.send("exec_js", url);
        });
    }
    /**
     * 无论是否已经显示都在显示后运行函数
     *
     * @protected
     * @param {() => void} fun 待运行的函数
     * @memberof TheNextEmptyBase
     */
    protected runRegardlessShowed(fun: () => void) {
        if (this.show) {
            fun();
        } else {
            this.mainWindow.once("ready-to-show", fun);
        }
    }
}
