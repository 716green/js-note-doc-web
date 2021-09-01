import ReactDOM from 'react-dom';
import App from './App';
import UserAuth from './auth/user-auth';
import { firebaseConfig } from './auth/firebase';
import { FirebaseApp, initializeApp } from 'firebase/app';

const app: FirebaseApp = initializeApp(firebaseConfig);
console.log(app);

type UserCreds = any | null;

// todo - setting up fake creds
const userObject = localStorage.getItem('user');
let userCreds: UserCreds;

if (userObject) {
  userCreds = JSON.parse(userObject);
} else {
  userCreds = null;
}

ReactDOM.render(
  userCreds ? <App /> : <UserAuth />,
  document.querySelector('#root')
);
