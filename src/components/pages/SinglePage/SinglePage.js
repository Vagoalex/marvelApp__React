import { useState, useEffect, lazy } from 'react';
import { useParams } from 'react-router-dom';
import ComicsBanner from '../../ComicsBanner/ComicsBanner';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Page404 from '../page404/Page404';
import useMarvelService from '../../../hooks/useMarvelService';

const LoadingPage = lazy(() => import('./loadingSinglePage/LoadingSinglePage'));

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { getElementById, loading, error, clearError } = useMarvelService();

  useEffect(() => {
    updateData();
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const updateData = () => {
    clearError();

    // eslint-disable-next-line default-case
    switch (dataType) {
      case 'characters':
        getElementById(id, 'characters').then(onDataLoaded);
        break;
      case 'comics':
        getElementById(id, 'comics').then(onDataLoaded);
        break;
    }
  };

  const onDataLoaded = (element) => {
    setData(element);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const loadingContent = loading ? <LoadingPage /> : null;
  const errorContent = error ? <Page404 /> : null;
  const content = !(loading || error || !data) ? (
    <Component data={data} />
  ) : null;

  return (
    <>
      <ComicsBanner />

      <section className='container wrapper'>
        <div className='main__content'>
          <ErrorBoundary>
            {loadingContent}
            {errorContent}
            {content}
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
