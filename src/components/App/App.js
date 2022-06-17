import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Characters from '../Characters/Characters';
import Comics from '../Comics/Comics';

import './App.scss';

const App = () => {
  return (
    <Router>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Characters />
          </Route>
          <Route exact path='/comics'>
            <Comics />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

App.propTypes = {
  onCharSelected: PropTypes.func,
};

export default App;
