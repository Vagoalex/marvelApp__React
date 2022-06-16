import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Characters from '../Characters/Characters';
import Comics from '../Comics/Comics';

import './App.scss';

const App = () => {
  const [route, setRoute] = useState('Characters');

  const onSelectPage = (e) => {
    setRoute(e.target.textContent);
  };

  return (
    <Fragment>
      <header className='header'>
        <Header page={route} onSelectPage={onSelectPage} />
      </header>
      <main className='main'>
        {route === 'Characters' ? <Characters /> : <Comics />}
      </main>
    </Fragment>
  );
};

App.propTypes = {
  onCharSelected: PropTypes.func,
};

export default App;
