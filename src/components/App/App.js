import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import LoadingSinglePage from '../pages/singleComic/loadingSinglePage/LoadingSinglePage';

import './App.scss';

const Characters = lazy(() => import('../pages/characters/Characters'));
const Comics = lazy(() => import('../pages/comics/Comics'));
const Page404 = lazy(() => import('../pages/page404/Page404'));
const SingleComicPage = lazy(() =>
  import('../pages/singleComic/SingleComicPage')
);

const App = () => {
  return (
    <Router>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Suspense fullback={<LoadingSinglePage />}>
          <Routes>
            <Route path='/' element={<Characters />} />
            <Route path='/comics' element={<Comics />} />
            <Route path={`/comics/:comicId`} element={<SingleComicPage />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

App.propTypes = {
  onCharSelected: PropTypes.func,
};

export default App;
