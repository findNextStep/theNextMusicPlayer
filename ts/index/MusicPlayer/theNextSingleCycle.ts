import { TheNextMusicPlayerBase } from "./theNextMusicPlayerBase";
export class TheNextSingleCycle extends TheNextMusicPlayerBase {
    constructor() {
        super();
        this.musicPath = "../test/test.mp3";
    }
    public playMode() {
        return "singleCycle";
    }
    public next() { return; }
    public previous() { return; }
}
