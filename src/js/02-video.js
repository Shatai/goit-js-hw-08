import throttle from "lodash.throttle";
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const keyStorage = "videoplayer-current-time";

function onPlay(data) {
    const time = data.seconds;
    localStorage.setItem(keyStorage, time);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(keyStorage)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});