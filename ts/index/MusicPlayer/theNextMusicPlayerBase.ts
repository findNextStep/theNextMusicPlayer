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
    private musicSrc: string;
    constructor() {
        this.player = document.createElement("audio");
        this.switchFun = (name: string) => {
            console.log("test");
        };
        this.player.onended = () => {
            this.music = this.next();
            this.play();
            console.log("test");
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
     * 设置播放的文件
     *
     * @memberof TheNextMusicPlayerBase
     */
    public set music(name: string) {
        console.log("super" + name);
        this.setMusic(name);
    }
    /**
     * 设置播放的速度，默认的速度为1
     *
     * @memberof TheNextMusicPlayerBase
     */
    public set playSpeed(speed: number) {
        this.player.playbackRate = speed;
    }
    /**
     * 设置播放音乐的路径
     *
     * @memberof TheNextMusicPlayerBase
     */
    protected set musicPath(path: string) {
        this.musicSrc = path;
    }
    /**
     * 下一首播放的歌曲的文件名
     *
     * @abstract
     * @returns {string} 下一首歌曲的文件名
     * @memberof TheNextMusicPlayerBase
     */
    public abstract next(): string;
    /**
     * 上一首歌曲的文件名
     *
     * @abstract
     * @returns {string} 上一首歌曲文件名
     * @memberof TheNextMusicPlayerBase
     */
    public abstract previous(): string;
    /**
     * 获取播放形式
     */
    public abstract playMode(): string;

    /**
     * 设置播放的音乐
     *
     * @protected
     * @param {string} name 播放的文件的文件名
     * @memberof TheNextMusicPlayerBase
     */
    protected setMusic(name: string) {
        this.player.src = this.musicSrc + "/" + name;
    }
    /**
     * 音乐播放结束时的调用
     *
     * @protected
     * @memberof TheNextMusicPlayerBase
     */
    protected whenEndMusic(): void {
        this.music = this.next();
        this.play();
        this.switchFun(this.next());
    }
    /**
     * 当歌曲切换时调用的函数
     *
     * @memberof TheNextMusicPlayerBase
     */
    public set switchNextMusic(fun: (name: string) => void) {
        this.switchFun = fun;
    }
}
