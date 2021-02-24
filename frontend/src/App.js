import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import {Provider} from 'react-redux'
import store from './Components/Redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Main/>
      </Provider>
    </div>
  );
}

export default App;
