import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import {Provider} from 'react-redux';
import store from './Components/Redux/store'
import Header from './Components/Header/Header';
import {NavLink , Link , BrowserRouter, Route} from 'react-router-dom';
import CreatePage from './Components/CreatePage/CreatePage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Link to='/'><Header className='header'/></Link>
      <Route exact path='/'> <CreatePage/></Route>
      <Route path='/:id'><Main/></Route>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
