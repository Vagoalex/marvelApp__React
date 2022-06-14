import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadingMarvel from '../LoadingMarvel/LoadingMarvel';
import Skeleton from '../Skeleton/Skeleton';

import './CharInfo.scss';

import marvelIcon from '../../assets/icons/marvelIcon.jpg';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charID]);

  const updateChar = () => {
    const { charID } = props;
    if (!charID) {
      return;
    }

    onCharLoading();
    marvelService.getCharacterById(charID).then(onCharLoaded).catch(onError);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(() => false);
  };

  const onCharLoading = () => {
    setLoading(() => true);
  };

  const onError = () => {
    setLoading(() => false);
    setError(() => true);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const loadingContent = loading ? <LoadingMarvel /> : null;
  const errorContent = error ? <ErrorMessage /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <section className='CharInfo'>
      {skeleton}
      {loadingContent}
      {errorContent}
      {content}
    </section>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  const comicsContent = comics.map(({ name }, i) => {
    if (i > 10) {
      return null;
    }
    return <ComicsItem key={i} name={name} />;
  });

  const notAvailableImg = 'image_not_available.jpg';
  const image =
    thumbnail.slice(-23) === notAvailableImg ? marvelIcon : thumbnail;

  const availableComics = comics.length === 0 ? ' hidden' : '';

  return (
    <>
      <div className='char-info'>
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
