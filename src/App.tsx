import Navbar from './navbar';
import CellList from './components/cell-list';
import { Provider } from 'react-redux';
import { store } from './state';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <CellList />
    </Provider>
  );
};

export default App;
