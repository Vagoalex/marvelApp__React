import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ComicsBanner from '../../ComicsBanner/ComicsBanner';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Page404 from '../page404/Page404';
import useMarvelService from '../../../hooks/useMarvelService';
import LoadingSinglePage from './loadingSinglePage/LoadingSinglePage';

import './SingleComicPage.scss';

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const { getElementById, loading, error, clearError } = useMarvelService();

  useEffect(() => {
    updateComic();
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getElementById(comicId, 'comics').then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const loadingContent = loading ? <LoadingSinglePage /> : null;
  const errorContent = error ? <Page404 /> : null;
  const content = !(loading || error || !comic) ? (
    <SingleComicPageContent comic={comic} />
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

const SingleComicPageContent = ({ comic }) => {
  const { title, description, thumbnail, price, language, pages, homepage } =
    comic;

  return (
    <section className='SingleComicPage'>
      <a
        href={homepage}
        target='_blank'
        className='SingleComicPage-link'
        rel='noreferrer'
      >
        <img
          src={thumbnail}
          alt='comic'
          className='SingleComicPage-link__img'
        />
      </a>
      <div className='SingleComicPage-info'>
        <h3 className='SingleComicPage-info__title'>{title}</h3>
        <p className='SingleComicPage-info__desk'>{description}</p>
        <p className='SingleComicPage-info__comic-length'>
          {pages === 0 ? 0 : pages} pages
        </p>
        <p className='SingleComicPage-info__comic-lang'>
          language:{' '}
          <span className='SingleComicPage-info__comic-lang--inner'>
            {language}
          </span>
        </p>
        <h3 className='SingleComicPage-info__price'>
          {price > 0 ? `${price}$` : 'NOT AVAILABLE'}
        </h3>
      </div>
      <div className='SingleComicPage-btn-back'>
        <Link
          to='/comics'
          className='SingleComicPage-btn-back button button__long'
        >
          <div className='inner'>Back to all</div>
        </Link>
      </div>
    </section>
  );
};

export default SingleComicPage;
