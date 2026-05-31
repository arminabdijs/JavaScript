let $ = document;


const bodyElementSelect = $.body;
const iconSearch = $.querySelector(".form__icon-search")
const inputSearch = $.querySelector(".form__input")
const emptyTitle = $.querySelector(".empty__title")
const titleName = $.querySelector(".title__name")
const dataDate = $.querySelector(".data__date")
const dataRating = $.querySelector(".data__rating")
const genreItem = $.querySelector(".genre__item")
const contactDescription = $.querySelector(".contact__description")
const contactLoading = $.querySelector('.contact__loading')
const contactData = $.querySelector(".contact__data")
const emptySearchBox = $.querySelector(".empty__search-box")

const arrSrcImage = ['assets/images/a7244f3907a4b4a09e053f29dcf7cb02.jpg', 'assets/images/akaza-demon-slayer-3840x2160-25671.jpg', 'assets/images/black-asta-black-3840x2160-22972.jpg', 'assets/images/download (26).jfif', 'assets/images/goku-black-and-3840x2160-20871.png', 'assets/images/goku-perfected-3840x2160-25454.jpg', 'assets/images/goku-ultra-instinct-3840x2160-22575.png', 'assets/images/gon-freecss-green-3840x2160-22503.jpg', 'assets/images/guts-drawing-3840x2160-13853.jpg', 'assets/images/ichigo-kurosaki-3840x2160-10528.png', 'assets/images/igris-solo-leveling-3840x2160-14646.jpg', 'assets/images/itachi-uchiha-3840x2160-25576.png', 'assets/images/itachi-uchiha-dark-3840x2160-20031.jpg', 'assets/images/itachi-uchiha-red-3840x2160-25017.png', 'assets/images/kaiju-no-8-3d-model-3840x2160-20434.jpg', 'assets/images/kaiju-no-8-5k-fan-3840x2160-20504.jpg', 'assets/images/kaiju-no-8-anime-3840x2160-24391.jpg', 'assets/images/levi-ackerman-3840x2160-10446.jpg', 'assets/images/MIKASA.jfif', 'assets/images/minato-namikaze-3840x2160-24353.png', 'assets/images/muichiro-tokito-3840x2160-22499.png', 'assets/images/Nezuko Kamado ❤️.jfif', 'assets/images/saitama-ok-one-3840x2160-20909.jpg', 'assets/images/samurai-silhouette-3840x2160-24349.png', 'assets/images/satoru-gojo-pop-art-3840x2160-14158.jpg', 'assets/images/solo-leveling-3840x2160-14657.jpg', 'assets/images/solo-leveling-sung-jinwoo-3840x2160-14670.jpg', 'assets/images/straw-hat-luffy-one-3840x2160-22500.jpg', 'assets/images/sukuna-electric-3840x2160-22504.jpg', 'assets/images/sukuna-red-3840x2160-19862.jpg', 'assets/images/sung-jinwoo-3840x2160-21523.jpg', 'assets/images/sung-jinwoo-angry-3840x2160-21322.jpg', 'assets/images/sung-jinwoo-anime-3840x2160-22581.jpg', 'assets/images/sung-jinwoo-artwork-3840x2160-14671.jpg', 'assets/images/sung-jinwoo-blue-3840x2160-20312.jpg', 'assets/images/sung-jinwoo-dope-3840x2160-20241.jpg', 'assets/images/sung-jinwoo-hunter-3840x2160-14669.jpeg', 'assets/images/sung-jinwoo-movie-3840x2160-20245.jpg', 'assets/images/sung-jinwoo-purple-3840x2160-21363.jpg', 'assets/images/sung-jinwoo-season-3840x2160-23604.jpg', 'assets/images/tanjiro-kamado-4334x2160-20019.jpg', 'assets/images/tougen-anki-3840x2160-23222.jpg', 'assets/images/tougen-anki-anime-3840x2160-23052.jpg', 'assets/images/tougen-anki-dark-3840x2160-23269.jpg', 'assets/images/turbo-granny-okarun-3840x2160-19414.jpg', 'assets/images/uwp4977619.jpeg', 'assets/images/uwp4977627.jpeg', 'assets/images/uwp4977630.jpeg', 'assets/images/uwp4977632.jpeg', 'assets/images/uwp4977635.jpeg', 'assets/images/uwp4978710.jpeg', 'assets/images/uwp4978711.jpeg', 'assets/images/uwp4978712.jpeg', 'assets/images/uwp4978715.jpeg', 'assets/images/uwp4978718.jpeg', 'assets/images/uwp4978719.jpeg', 'assets/images/uwp4978721.jpeg', 'assets/images/uwp4978722.jpeg', 'assets/images/uwp4978723.jpeg', 'assets/images/uwp4978727.jpeg', 'assets/images/uwp4979169.jpeg', 'assets/images/uwp4979219.jpeg', 'assets/images/uwp4979221.jpeg', 'assets/images/uwp4979237.jpeg', 'assets/images/uwp4979245.jpeg', 'assets/images/uwp4980261.jpeg', 'assets/images/uwp4980265.jpeg', 'assets/images/uwp4980266.jpeg', 'assets/images/uwp4985552.jpeg', 'assets/images/wp9612420-4k-anime-computer-wallpapers.jpg', 'assets/images/wp13115877-anime-8k-city-wallpapers.jpg', 'assets/images/wp13665013-anime-pc-8k-wallpapers.jpg', 'assets/images/wriothesley-genshin-3840x2160-19470.jpg', 'assets/images/yu-nishinoya-3840x2160-14068.png', 'assets/images/yuji-itadori-choso-3840x2160-25230.jpg', 'assets/images/yuji-itadori-season-3840x2160-25220.jpg']

const animeData = [
    {
        name: "Jujutsu Kaisen",
        year: 2020,
        genre: ["Action", "Supernatural", "Shonen"],
        description: "The story follows Yuji Itadori as he enters the world of curses and sorcerers to save his friends.",
        rating: 8.7
    },
    {
        name: "Tokyo Revengers",
        year: 2021,
        genre: ["Action", "Drama", "Fantasy"],
        description: "The story revolves around a young man who travels back in time to prevent the death of his girlfriend and change his life.",
        rating: 8.4
    },
    {
        name: "Hunter x Hunter",
        year: 2011,
        genre: ["Action", "Adventure", "Fantasy"],
        description: "The story follows a boy named Gon as he searches for his father and strives to become a Hunter.",
        rating: 9.0
    },
    {
        name: "Fullmetal Alchemist: Brotherhood",
        year: 2009,
        genre: ["Action", "Adventure", "Fantasy"],
        description: "Two brothers, Edward and Alphonse Elric, use alchemy in their quest to find the Philosopher's Stone to restore their bodies after a failed experiment.",
        rating: 9.1
    },
    {
        name: "Sword Art Online",
        year: 2012,
        genre: ["Action", "Adventure", "Fantasy"],
        description: "Players of a virtual reality MMORPG find themselves trapped in the game, where dying in the game means dying in real life.",
        rating: 7.9
    },
    {
        name: "Tokyo Ghoul",
        year: 2014,
        genre: ["Action", "Horror", "Supernatural"],
        description: "In a world where flesh-eating ghouls exist, college student Ken Kaneki becomes a half-ghoul and must navigate his new life.",
        rating: 7.8
    },
    {
        name: "Steins Gate",
        year: 2011,
        genre: ["Sci-Fi", "Thriller", "Drama"],
        description: "A group of friends accidentally discover a method of time travel, leading to unforeseen consequences.",
        rating: 9.0
    },
    {
        name: "Your Name",
        year: 2016,
        genre: ["Romance", "Fantasy", "Drama"],
        description: "Two teenagers, Taki and Mitsuha, find themselves mysteriously swapping bodies, leading to a journey of self-discovery and connection.",
        rating: 8.9
    },
    {
        name: "Attack on Titan",
        year: 2013,
        genre: ["Action", "Drama", "Fantasy"],
        description: "In a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans, Eren Yeager joins the military to fight back.",
        rating: 9.3
    },
    {
        name: "My Hero Academia",
        year: 2016,
        genre: ["Action", "Comedy", "Superhero"],
        description: "In a world where almost everyone has superpowers, a boy without powers dreams of becoming a hero and enrolls in a prestigious hero academy.",
        rating: 8.5
    },
    {
        name: "Demon Slayer: Kimetsu no Yaiba",
        year: 2019,
        genre: ["Action", "Adventure", "Fantasy"],
        description: "After his family is slaughtered by demons, Tanjiro Kamado becomes a demon slayer to avenge his family and save his sister Nezuko, who has turned into a demon.",
        rating: 8.6
    },
    {
        name: "Death Note",
        year: 2006,
        genre: ["Mystery", "Psychological", "Thriller"],
        description: "A high school student discovers a notebook that allows him to kill anyone by writing their name in it, leading to a cat-and-mouse game with law enforcement.",
        rating: 9.0
    },
    {
        name: "Neon Genesis Evangelion",
        year: 1995,
        genre: ["Mecha", "Psychological", "Drama"],
        description: "Teenagers pilot giant robots to protect humanity from mysterious beings known as Angels while dealing with their own psychological struggles.",
        rating: 8.5
    }
]

const srcRandom = Math.floor(Math.random() * arrSrcImage.length)




iconSearch.addEventListener("click", () => {
   checkExitAnime()
})

inputSearch.addEventListener("keydown",(event)=>{
    if (event.key==="Enter"){
        checkExitAnime()
    }
})

function checkExitAnime(){
    let valueSearch = inputSearch.value.trim();

    genreItem.innerHTML = ''


    if (valueSearch === undefined || valueSearch === null || valueSearch === '') {
        contactLoading.style.display = "none"

        contactData.style.display = "none"

        emptySearchBox.style.display = "block"

        emptyTitle.innerHTML = "please enter name anime in search box"

        emptyTitle.style.color = "red"


    } else {

        const findAnime = animeData.find((nameAnime) => {
            return nameAnime.name.toLowerCase() === valueSearch.toLowerCase()
        })


        if (!findAnime) {

            contactLoading.style.display = "none"

            contactData.style.display = "none"

            emptySearchBox.style.display = "block"

            emptyTitle.innerHTML = `Sorry , There is no anime specifications called ${valueSearch} , Please enter the name of another anime .`

            emptyTitle.style.color = "yellow"

        } else {

            contactLoading.style.display = "none"

            contactData.style.display = "block"

            emptySearchBox.style.display = "none"

            titleName.innerHTML = findAnime.name

            dataDate.innerHTML = findAnime.year

            dataRating.innerHTML = findAnime.rating

            contactDescription.innerHTML = findAnime.description

            findAnime.genre.forEach(genreIndex => {

                genreItem.innerHTML += `<li>${genreIndex}</li>`

            })
        }

    }
}

function randomImg() {

    bodyElementSelect.style.backgroundImage = `url(${arrSrcImage[srcRandom]})`
}


window.onload = randomImg

