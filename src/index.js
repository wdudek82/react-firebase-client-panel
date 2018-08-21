import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faUsers,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(faPlus, faUsers, faArrowAltCircleRight, faArrowAltCircleLeft);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
