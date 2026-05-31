const $ = document;

function _id(idName) {
    return document.getElementById(idName);
}

const music = _id('audio');
const playBtn = _id('play');
const prevBtn = _id('prev');
const nextBtn = _id('next');
const cover = _id('cover');
const title = _id('title');
const artist = _id('artist');
const progress = _id('progress');
const progressContainer = _id('progress-container');
const playIcon = _id('play-icon');
const pauseIcon = _id('pause-icon');
const durationEl = _id('duration');
const currentTimeEl = _id('current-time');

const songs = [
    {
    path: '/assets/audio/Baba_Bah_Bah_FT_Mahyar.mp3',
    name: 'Baba_Bah_Bah_FT_Mahyar',
    artist: 'شایع',
    cover: '/assets/images/Baba_Bah_Bah_FT_Mahyar.png',
}, {
    path: '/assets/audio/_nazanm_chon.mp3',
    name: 'nazanm_chon',
    artist: 'nazanm',
    cover: '/assets/images/nazanm_chon.png',
}, {
    path: '/assets/audio/@jezhw4n__جێژوان_–_Dinmeyen__Dam_Üstüne_Çul_serer.mp3',
    name: 'jezhw4n__جێژوان_–_Dinmeyen__Dam_Üstüne_Çul_serer',
    artist: ' جێژوان',
    cover: '/assets/images/@jezhw4n__جێژوان_–_Dinmeyen__Dam_Üstüne_Çul_serer.png',
}, {
    path: '/assets/audio/@musicallkurdi_حسن_حیاس_ئەم_شەوە_چەند_درێژە.mp3',
    name: '@musicallkurdi_حسن_حیاس_ئەم_شەوە_چەند_درێژە',
    artist: 'حسن حیاسی',
    cover: '/assets/images/@musicallkurdi.png',
}, {
    path: '/assets/audio/@RapRelease_-_Faghat_Bash_-_Mahyar.mp3',
    name: '@RapRelease_-_Faghat_Bash_-_Mahyar',
    artist: 'Mahyar',
    cover: '/assets/images/@RapRelease_-_Faghat_Bash_-_Mahyar.png',
},];

let songIndex = 0;
let isPlaying = false;


// function

(function () {
    updateProgressBar()
    loadSong(songs[songIndex]);

})()

function loadSong(song) {
    title.textContent = song.name;
    artist.textContent = song.artist;
    music.src = song.path;
    cover.src = song.cover;
    $.body.style.backgroundImage = `url(${song.cover})`;
}

function playSong() {
    isPlaying = true;
    music.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
}

function pauseSong() {
    isPlaying = false;
    music.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
}

function updateProgressBar(event) {
    if (isPlaying) {
        const duration = event.srcElement.duration
        const currentTime = event.srcElement.currentTime

        const progressPercent = (currentTime / duration) * 100
        progress.style.width = progressPercent + '%'

        const durationMinutes = Math.floor(duration / 60)
        let durationSeconds = Math.floor(duration % 60)

        if (durationSeconds < 10) {
            durationSeconds = '0' + durationSeconds
        }

        if (durationSeconds) {
            durationEl.textContent = durationMinutes + ':' + durationSeconds
        }

        let currentMinutes = Math.floor(currentTime / 60)
        let currentSeconds = Math.floor(currentTime % 60)

        if (currentSeconds < 10) {
            currentSeconds = '0' + currentSeconds
        }

        currentTimeEl.textContent = currentMinutes + ":" + currentSeconds
    }
}

function setProgressBar(event) {
    const width = this.clientWidth;
    const clientX = event.offsetX;
    const duration = music.duration;
    music.currentTime = (clientX / width) * duration

    playSong()
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}


// event Listener

playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong)
music.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', setProgressBar)