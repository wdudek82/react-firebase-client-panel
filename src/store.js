import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// TODO:

// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyDNMSg0wyBCCSFn-NeareCvtEPgcw2VYbU',
  authDomain: 'react-client-panel-8f65c.firebaseapp.com',
  databaseURL: 'https://react-client-panel-8f65c.firebaseio.com',
  projectId: 'react-client-panel-8f65c',
  storageBucket: 'react-client-panel-8f65c.appspot.com',
  messagingSenderId: '1059824864312',
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// initialize firestore service instance
firebase.firestore();

// add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

// add Firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

export default store;
