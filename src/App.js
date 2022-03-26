import React from 'react';
import Movies from './Components/Movies';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customer from './Components/customer';
import Rentals from './Components/rentals';
import NotFound from './Components/notFound';
import MovieForm from './Components/movieForm';
import NavBar from './Components/navBar';
import LoginForm from './Components/loginForm';
import RegisterForm from './Components/registerForm';

function App() {
  return (
    <React.Fragment> 
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/movies/:id' component={MovieForm}/>
          <Route path='/login' component={LoginForm}/>
          <Route path='/register' component={RegisterForm}/>
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customer} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to="/movies" />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
