const instagramButton = document.querySelector('.button.instagram');
const instagramPopup = document.querySelector('.popup.instagram');
const instagramCover = document.querySelector('.instagram-cover');

const twitterButton = document.querySelector('.button.twitter');
const twitterPopup = document.querySelector('.popup.twitter');

const facebookButton = document.querySelector('.button.facebook');
const facebookPopup = document.querySelector('.popup.facebook');

const snapchatButton = document.querySelector('.button.snapchat');
const snapchatPopup = document.querySelector('.popup.snapchat');

const githubButton = document.querySelector('.button.github');
const githubPopup = document.querySelector('.popup.github');
const githubCover = document.querySelector('.github-cover');

instagramButton.addEventListener('mouseenter', () => {
  instagramPopup.classList.add('shown');
  instagramCover.classList.add('shown');
})

instagramButton.addEventListener('mouseleave', () => {
  instagramPopup.classList.remove('shown');
  instagramCover.classList.remove('shown');
})

twitterButton.addEventListener('mouseenter', () => {
  twitterPopup.classList.add('shown');
})

twitterButton.addEventListener('mouseleave', () => {
  twitterPopup.classList.remove('shown');
})

facebookButton.addEventListener('mouseenter', () => {
  facebookPopup.classList.add('shown');
})

facebookButton.addEventListener('mouseleave', () => {
  facebookPopup.classList.remove('shown');
})

snapchatButton.addEventListener('mouseenter', () => {
  snapchatPopup.classList.add('shown');
})

snapchatButton.addEventListener('mouseleave', () => {
  snapchatPopup.classList.remove('shown');
})

githubButton.addEventListener('mouseenter', () => {
  githubPopup.classList.add('shown');
  githubCover.classList.add('shown');
})

githubButton.addEventListener('mouseleave', () => {
  githubPopup.classList.remove('shown');
  githubCover.classList.remove('shown');
})
