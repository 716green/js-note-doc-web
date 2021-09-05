import ReactDOM from 'react-dom';
import App from './App';

import { UserAuthContextProvider } from './context/user-state';

ReactDOM.render(
  <UserAuthContextProvider>
    <App />
  </UserAuthContextProvider>,
  document.querySelector('#root')
);
