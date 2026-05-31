let $ = document;

let audio = $.querySelector('audio');
let time = $.getElementById('time');

function playHandler() {
  audio.play();
  console.log('play shod :)');

  setInterval(() => {
    time.innerHTML =  Math.floor(audio.currentTime);
  }, 1000);
}

function pauseHandler() {
  audio.pause();
  console.log('pause shod :)');
}

function durationHandler() {
  console.log('duration :)', audio.duration);
}

function playbackRateHandler() {
  audio.playbackRate = 2;
  console.log('music Rate 2x');
}

function currentTimeHandler() {
  console.log('music currentTime', Math.floor(audio.currentTime));
}

// audio.duration //second time music
//
// audio.playbackRate=5 //spaed music
