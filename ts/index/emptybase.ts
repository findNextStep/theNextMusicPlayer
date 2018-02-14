const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;
export function main() {
    // 添加执行js的回调
    ipcRenderer.addListener("exec_js", (path: string) => {
        const exec = require(path);
        exec.main();
    });
    // 添加删除特定css的回调
    ipcRenderer.addListener("remove_css", (event, path: string) => {
        removeCss(path);
    });
    // 添加动态加载css的回调
    ipcRenderer.addListener("load_css", (event, path: string) => {
        loadCss(path);
    });
}
/**
 * 删除一个css加载项
 *
 * @param {string} url 需要删除的文件的URL
 */
function removeCss(url: string) {
    const list: NodeListOf<HTMLLinkElement> = document.getElementsByTagName("link");
    for (let i: number = 0; i < list.length; ++i) {
        if (list.item(i).getAttribute("href") === url) {
            list.item(i).parentNode.removeChild(list.item(i));
            --i;
        }
    }
}
/**
 * 添加一个css加载项
 *
 * @param {string} url 需要添加的加载项URL
 */
function loadCss(url: string) {
    const head = document.getElementsByTagName("head")[0];
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    head.appendChild(link);
}
