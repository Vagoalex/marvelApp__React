import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoadingSinglePage from '../pages/singleComic/loadingSinglePage/LoadingSinglePage';

import '../App/App.scss';

const Characters = lazy(() => import('../pages/characters/Characters'));
const Comics = lazy(() => import('../pages/comics/Comics'));
const Page404 = lazy(() => import('../pages/page404/Page404'));
const SingleComicPage = lazy(() =>
  import('../pages/singleComic/SingleComicPage')
);

const Content = () => {
  return (
    <Fragment>
      <Suspense fullback={<LoadingSinglePage />}>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/comics' element={<Comics />} />
          <Route path={`/comics/:comicId`} element={<SingleComicPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default Content;
