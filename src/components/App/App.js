import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { Characters, Comics, Page404, SingleComicPage } from '../pages';

import './App.scss';

const path = '/marvelApp__React';

const App = () => {
  return (
    <Router>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Routes>
          <Route path={`${path}/`} element={<Characters />} />
          <Route path={`${path}/comics`} element={<Comics />} />
          <Route
            path={`${path}/comics/:comicId`}
            element={<SingleComicPage />}
          />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </main>
    </Router>
  );
};

App.propTypes = {
  onCharSelected: PropTypes.func,
};

export default App;
