import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcdhlKDuXQowab5JTTrxVboYbD1XnS4yo",
  authDomain: "catch-of-the-day-ovcos.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ovcos.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;