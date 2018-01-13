/**
 * 音乐播放器功能接口
 *
 * @interface ItheNextMusicPlayerBase
 */
export interface ItheNextMusicPlayerBase {
    /**
     * 开始播放音乐
     *
     * @param {string} [name] 可选参数，播放的音乐
     * @memberof ItheNextMusicPlayerBase
     */
    play(name?: string): void;
    /**
     * 暂停播放音乐
     *
     * @memberof ItheNextMusicPlayerBase
     */
    pause(): void;
    /**
     * 停止播放音乐
     * 包括暂停和时间归零
     *
     * @memberof ItheNextMusicPlayerBase
     */
    stop(): void;
    /**
     * 下一首
     *
     * @memberof ItheNextMusicPlayerBase
     */
    next(): void;
    /**
     * 上一首
     *
     * @memberof ItheNextMusicPlayerBase
     */
    previous(): void;
}
export abstract class TheNextMusicPlayerBase implements ItheNextMusicPlayerBase {
    protected switchFun: (name: string) => void;
    private player: HTMLAudioElement;
    constructor() {
        this.player = document.createElement("audio");
        this.switchFun = (name: string) => {
            return;
        };
        this.player.onended = () => {
            this.switchFun(this.next());
        };
    }
    public play(name?: string) {
        this.player.play();
    }
    public pause() {
        this.player.pause();
    }
    public stop() {
        this.pause();
        this.player.currentTime = 0;
    }
    /**
     * 设置播放音乐的路径
     *
     * @memberof TheNextMusicPlayerBase
     */
    protected set musicPath(path: string) {
        this.player.src = path;
    }

    public abstract next(): string;
    public abstract previous(): string;
    /**
     * 获取播放形式
     */
    public abstract playMode(): string;
    /**
     * 当歌曲切换时调用的函数
     *
     * @memberof TheNextMusicPlayerBase
     */
    public set switchNextMusic(fun: (name: string) => void) {
        this.switchFun = fun;
    }
}
