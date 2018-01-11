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
    constructor() {
        this.switchFun = (name: string) => {
            return;
        };
    }
    public abstract play(name?: string);
    public abstract pause();
    public abstract stop();
    public abstract next();
    public abstract previous();
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
