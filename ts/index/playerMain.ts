import { TheNextMusicPlayerBase } from "./MusicPlayer/theNextMusicPlayerBase";
import { TheNextSingleCycle } from "./MusicPlayer/theNextSingleCycle";

export function main() {
    console.log("test");
    const aaa: TheNextMusicPlayerBase = new TheNextSingleCycle();
    aaa.music = "test.mp3";
    console.log("end music");
    aaa.play();
    aaa.playSpeed = 4;
}
