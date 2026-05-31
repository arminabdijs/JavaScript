const $ = document;

function _querySelectorAll(queryName) {
    return document.querySelectorAll(queryName);
}

const players = _querySelectorAll('.play')
const audios = _querySelectorAll('audio')


let musicName

players.forEach(player => {
    player.addEventListener('click', (event) => {
        musicName = event.target.dataset.name

        audios.forEach(audio => {

            if (audio.dataset.name === musicName) {
                audio.play()
            } else {
                audio.pause()
            }
        })
    })
})

