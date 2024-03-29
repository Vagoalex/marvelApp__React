import { useState, useEffect } from 'react';

import useMarvelService from '../../hooks/useMarvelService';
import ErrorMessageComponent from '../ErrorMessage/ErrorMessage';
import LoadingMarvel from '../LoadingMarvel/LoadingMarvel';
import Skeleton from '../Skeleton/Skeleton';

import './CharInfo.scss';

import marvelIcon from '../../assets/icons/marvelIcon.jpg';
import CharForm from '../CharForm/CharForm';

const CharInfo = (props) => {
  const { getElementById, loading, error, clearError } = useMarvelService();

  const [char, setChar] = useState(null);

  useEffect(() => {
    updateChar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.charID]);

  const updateChar = () => {
    const { charID } = props;
    if (!charID) {
      return;
    }

    clearError();
    getElementById(charID, 'characters').then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const loadingContent = loading ? <LoadingMarvel /> : null;
  const errorContent = error ? <ErrorMessageComponent /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <>
      <section className='CharInfo'>
        <div className='CharInfo__content'>
          {skeleton}
          {loadingContent}
          {errorContent}
          {content}
        </div>
        <div className='CharInfo__form'>
          <CharForm />
        </div>
      </section>
    </>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  const onScrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const comicsContent = comics.map(({ name }, i) => {
    return <ComicsItem key={i} name={name} />;
  });

  const notAvailableImg = 'image_not_available.jpg';
  const image =
    thumbnail.slice(-23) === notAvailableImg ? marvelIcon : thumbnail;

  const availableComics = comics.length === 0 ? ' hidden' : '';

  return (
    <>
      <div className='char-info'>
        <button
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onScrollToBottom();
            }
          }}
          onClick={onScrollToBottom}
          className='CharInfo-scroll'
        >
          <span className='CharInfo-scroll__bottom'>
            <span className='mouse-wheel'></span>
          </span>
        </button>
        <img className='char-info__img' src={image} alt={name} />
        <div className='char-info-inner'>
          <h3 className='char-info-inner__title'>{name}</h3>
          <a
            className='char-info-inner__link button button__main'
            href={homepage}
          >
            <div className='inner'>Homepage</div>
          </a>
          <a
            className='char-info-inner__link button button__secondary'
            href={wiki}
          >
            <div className='inner'>Wiki</div>
          </a>
        </div>
      </div>
      <div className='char-info-desc'>
        <p className='char-info-desc__paragraph'>{description}</p>
      </div>
      <div className={`char-info-comics ${availableComics}`}>
        <h4 className='char-info-comics__title'>Comics:</h4>
        <ul className='comics-list'>{comicsContent}</ul>
      </div>
    </>
  );
};

const ComicsItem = ({ name }) => {
  return <li className='comics-list__item'>{name}</li>;
};

export default CharInfo;
