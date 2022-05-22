import lyricsOnDom from '../components/lyricsOnDom';

const events = () => {
  const formApp = document.querySelector('form');
  formApp.addEventListener('submit', (e) => {
    e.preventDefault();
    const artistName = document.querySelector('#artistInput').value;
    const songName = document.querySelector('#songInput').value;
    lyricsOnDom(artistName, songName);
    formApp.reset();
    document.querySelector('#artistTitle').innerHTML = artistName;
  });
};

export default events;
