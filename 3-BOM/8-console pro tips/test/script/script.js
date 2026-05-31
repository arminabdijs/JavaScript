let suggestions = [
  'Channel',
  'CodingLab',
  'CodingNepal',
  'YouTube',
  'YouTuber',
  'YouTube Channel',
  'Blogger',
  'Blogging',
  'Content Creator',
  'Influencer',
  'Creator',
  'Vlogger',
  'Vlogging',
  'Video Creator',
  'Streamer',
  'Gaming',
  'Gaming Channel',
  'Bollywood',
  'Entertainment',
  'Music',
  'Facebook',
  'Facebook Page',
  'Instagram',
  'Twitter',
  'Freelancer',
  'Freelancing',
  'Designer',
  'Graphic Designer',
  'Web Designer',
  'Developer',
  'Web Developer',
  'App Developer',
  'Frontend Developer',
  'Backend Developer',
  'Login Form in HTML & CSS',
  'Signup Form in HTML & CSS',
  'How to learn HTML & CSS',
  'How to learn JavaScript',
  'How to learn React',
  'How to learn Python',
  'How to become Freelancer',
  'How to become Web Designer',
  'How to start Gaming Channel',
  'How to start YouTube Channel',
  'What does HTML stands for?',
  'What does CSS stands for?',
  'What does JavaScript stands for?',
  'Tech Tips',
  'Programming',
  'Tutorial',
  'Education',
  'Online Learning',
];

let $ = document;

let _id = (id) => $.getElementById(id);
let _querySelector = (queryName) => $.querySelector(queryName);
let _createElement = (elementName) => $.createElement(elementName);
let _fragment = () => $.createDocumentFragment();

let autoComplateWrapper = _querySelector('.search-box');
let searchInput = _id('input-fild');
let autoComplateBox = _id('suggestions');

let suggestionsListfragment = _fragment();

searchInput.addEventListener('keyup', () => {
  let searchValue = searchInput.value.trim().toLowerCase();

  if (searchValue) {
    autoComplateBox.classList.add('active');

    let startsWithWords = suggestions.filter((word) => word.toLowerCase().startsWith(searchValue));

    let includesWords = suggestions.filter(
      (word) =>
        word.toLowerCase().includes(searchValue) && !word.toLowerCase().startsWith(searchValue),
    );

    let filteredWords = [...startsWithWords, ...includesWords];

    suggestionsWordsGenerator(filteredWords);
  } else {
    autoComplateBox.classList.remove('active');
  }
});

function suggestionsWordsGenerator(wordsArray) {
  let listItemArray = wordsArray.map((word) => {
    return `<li>${word}</li>`;
  });

  let customListItem;
  if (!listItemArray.length) {
    customListItem = `<li>${searchInput.value.trim()}</li>`;
  } else {
    customListItem = listItemArray.join('');
  }

  autoComplateBox.innerHTML = customListItem;
  select();
}

function select() {
  let allListItem = autoComplateBox.querySelectorAll('li');

  allListItem.forEach((wordItem) => {
    wordItem.addEventListener('click', (event) => {
      searchInput.value = event.target.innerText;
      autoComplateBox.classList.remove('active');
    });
  });
}
