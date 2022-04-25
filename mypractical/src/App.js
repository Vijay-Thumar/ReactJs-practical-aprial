
import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import User from './components/Users';
import Header from './components/Header';

function App() {

  const onUserLoad = () => {};

  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact> <Redirect to='/home' /> </Route>
        <Route path='/home' exact> <Home onLoad={onUserLoad}/> </Route>
        <Route path='/post' exact><Post /></Route>
        <Route path='/users' exact><User /></Route>
      </Switch>
    </div>
  );
}

export default App;
