let h1elem = document.querySelector('h1')

window.addEventListener('online', () => {
  h1elem.className = 'online';
  h1elem.innerText = 'OnLine';
})

window.addEventListener('offline', () => {
  h1elem.className = 'offline';
  h1elem.innerText = 'OffLine';
})