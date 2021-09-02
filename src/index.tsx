import ReactDOM from 'react-dom';
import App from './App';
import { firebaseConfig } from './auth/firebase';
import { initializeApp } from 'firebase/app';
// import { FirebaseApp, initializeApp } from 'firebase/app';

// const app: FirebaseApp =
initializeApp(firebaseConfig);
// console.log(app);

ReactDOM.render(<App />, document.querySelector('#root'));
