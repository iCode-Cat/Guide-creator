import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import {Provider} from 'react-redux';
import store from './Components/Redux/store'
import Header from './Components/Header/Header';
import {NavLink , Link , BrowserRouter, Route, Switch,} from 'react-router-dom';
import CreatePage from './Components/CreatePage/CreatePage';
import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login';

function App() {


 

  //  return  (
  //    <BrowserRouter>
  //    <Link to='/'><Header className='header'/></Link>
  //    <Route exact path='/register' component={Register} />
  //    <Route exact path='/login' component={Login} />
  //    </BrowserRouter>
  //  )
   


  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Route exact path='/login' component={Login} />
      <Link to='/'><Header className='header'/></Link>
      <Switch>

      <Route exact path='/'> <CreatePage/></Route>
      <Route path='/:id'><Main/></Route>
      </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
