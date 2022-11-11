import Player from '@vimeo/player';
const _ = require('lodash');

const videoPlayerCurrentTime = "videoplayer-current-time";

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});
const localStorage = window.localStorage;

console.log(localStorage);

player.setCurrentTime(localStorage.getItem(videoPlayerCurrentTime)).then(function (seconds) {
}).catch(function (error) {
    console.log(error);
});

player.on('timeupdate', _.throttle((data) => {
    localStorage.setItem(videoPlayerCurrentTime, data.seconds)
}, 1000));










