import React from 'react';
import Movies from './Components/Movies';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customer from './Components/customer';
import Rentals from './Components/rentals';
import NotFound from './Components/notFound';
import MoviesTable from './Components/moviesTable';

function App() {
  return (
    <main className='container'>
      <Switch>
        <Route path='/movies' component={Movies} />
        <Route path='/customers' component={Customer} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/not-found' component={NotFound} />
        <Redirect from='/' exact to="/movies" />
        <Redirect to='/not-found' />
      </Switch>
    </main>
  );
}

export default App;
