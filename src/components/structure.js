import renderToDom from '../scripts/helpers/renderToDom';

// HTML STRUCTURE
const formApp = () => {
  const domString = `
  <form id = 'formInput' class="row g-3">
  <div class="col-auto">
    <label for="artistName" class="visually-hidden">Artist</label>
    <input type="text" class="form-control" id="artistInput" placeholder="Artist Name">
  </div>
  <div class="col-auto">
    <label for="songName" class="visually-hidden">Song Name</label>
    <input type="text" class="form-control" id="songInput" placeholder="Song Name">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Get Lyrics</button>
  </div>
  <div id = "lyricsContainer"><hr></div>
</form>
  `;
  renderToDom('#login-form-container', domString);
};

export default formApp;
