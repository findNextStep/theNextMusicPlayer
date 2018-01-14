import { TheNextMusicPlayerBase } from "./theNextMusicPlayerBase";
export class TheNextSingleCycle extends TheNextMusicPlayerBase {
    private musicFile: string;
    constructor(name?: string) {
        super();
        this.musicPath = "D:\\the_next-app\\theNextMusicPlayer\\test";
        this.music = "test.mp3";
        this.musicFile = "test.mp3";
        if (name != null) {
            this.musicFile = name;
            this.music = name;
        }
        this.switchNextMusic = (file: string) => {
            console.log(file);
        };
    }
    public set music(name: string) {
        this.musicFile = name;
        this.setMusic(name);
    }
    public playMode() {
        return "singleCycle";
    }
    public next() { return this.musicFile; }
    public previous() { return this.musicFile; }
}
