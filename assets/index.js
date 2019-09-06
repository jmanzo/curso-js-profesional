import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playButton = document.querySelector('button#play-button');
const unmuteButton = document.querySelector('button#unmute-button');
playButton.onclick = () => player.togglePlay();
unmuteButton.onclick = () => player.toggleMute();