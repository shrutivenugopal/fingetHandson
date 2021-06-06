import EBookHome from "./components/EBookHome";
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import bookReducer from "./store/reducer"

const store = createStore(bookReducer);
function App() {
  return (
    <Provider store={store}>
      <EBookHome />
    </Provider>
  );
}

export default App;
