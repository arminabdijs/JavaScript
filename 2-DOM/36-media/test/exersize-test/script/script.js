let $ = document;

let audio = $.querySelector('audio');
let time = $.getElementById('time');

let MusicSrc = [
  '/assets/audio/_nazanm_chon.mp3',
  '/assets/audio/@jezhw4n__جێژوان_–_Dinmeyen__Dam_Üstüne_Çul_serer.mp3',
  '/assets/audio/@musicallkurdi_حسن_حیاس_ئەم_شەوە_چەند_درێژە.mp3',
  '/assets/audio/Baba_Bah_Bah_FT_Mahyar.mp3',
  '/assets/audio/@RapRelease_-_Faghat_Bash_-_Mahyar.mp3',
];

let audioIndex = 0;

function previousMusicHandler() {
  audioIndex--;
  if (audioIndex < 0) {
    audioIndex = MusicSrc.length - 1;
  }

  audio.src = MusicSrc[audioIndex];
}

function playHandler() {
  audio.play();
  
  console.log('play shod :)');
  setInterval(() => {
    time.innerHTML = Math.floor(audio.currentTime);
  }, 1000);
}

function pauseHandler() {
  audio.pause();
  console.log('pause shod :)');
}

function nextMusicHandler() {
  audioIndex++;
  if (audioIndex > MusicSrc.length - 1) {
    audioIndex = 0;
  }
  audio.src = MusicSrc[audioIndex];
}

function speed2XHandler() {
  audio.playbackRate = 2;
}

function normalSpeedHandler() {
  audio.playbackRate = 1;
}

function timeMinusHandler() {
  audio.currentTime -= 5;
}

function timePlusHandler() {
  audio.currentTime += 5;
}
