import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import {Provider} from 'react-redux'
import store from './Components/Redux/store'
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header className='header'/>
      <Main/>
      </Provider>
    </div>
  );
}

export default App;
