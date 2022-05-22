// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import formApp from '../components/structure';
import lyricsOnDom from '../components/lyricsOnDom';
import events from './events';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

// USE WITH FIREBASE AUTH
// checkLoginStatus();
const startApp = () => {
  formApp();
  events();
  lyricsOnDom();
};
startApp();
