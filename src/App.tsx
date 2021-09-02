import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Navbar from './navbar';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <CellList />
      </div>
    </Provider>
  );
};

export default App;

// const Navbar = () => {
//   return (
//     <nav>
//       <button>Log Out</button>
//     </nav>
//   );
// };
