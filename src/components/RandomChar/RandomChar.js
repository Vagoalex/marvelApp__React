import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LoadingMarvel from '../LoadingMarvel/LoadingMarvel';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useMarvelService from '../../hooks/useMarvelService';

import './RandomChar.scss';

import randomizerDecorate from '../../assets/icons/RandomChar-mjolnerShild.png';
import marvelIcon from '../../assets/icons/marvelIcon.jpg';

const RandomChar = (props) => {
  const [char, setChar] = useState(null);

  const { getElementById, loading, error, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
    const timerId = setInterval(updateChar, 120000);

    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getElementById(id, 'characters').then(onCharLoaded);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <LoadingMarvel /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <section className='RandomChar wrapper'>
      <div className='RandomChar__character-info'>
        {errorMessage}
        {spinner}
        {content}
      </div>
      <div className='RandomChar__randomizer'>
        <div className='randomizer-top'>
          <h3 className='randomizer-top__title random-title'>
            Random character for today!
          </h3>
          <h3 className='randomizer-top__title  random-title'>
            Do you want to get to know him better?
          </h3>
        </div>
        <div className='randomizer-bottom'>
          <h3 className='randomizer-bottom__title  random-title'>
            Or choose another one
          </h3>
          <button
            onClick={updateChar}
            className='randomizer-bottom__button button'
            type='button'
          >
            <div className='inner'>Try it</div>
          </button>
        </div>
        <img
          className='randomizer-img'
          src={randomizerDecorate}
          alt='mjolnir'
        />
      </div>
    </section>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;

  const notAvailableImg = 'image_not_available.jpg';
  const image =
    thumbnail.slice(-23) === notAvailableImg ? marvelIcon : thumbnail;
  return (
    <>
      <img className='character-img' src={image} alt={name} />
      <div className='character-info'>
        <h3 className='character-info__title'>{name}</h3>
        <p className='character-info__desc'>{description}</p>
        <div className='character-links'>
          <a
            className='character-links__link first-link button'
            href={homepage}
            target='_blank'
            rel='noreferrer'
          >
            <div className='inner'>Homepage</div>
          </a>
          <a
            className='character-links__link second-link button button__secondary'
            href={wiki}
            target='_blank'
            rel='noreferrer'
          >
            <div className='inner'>Wiki</div>
          </a>
        </div>
      </div>
    </>
  );
};

RandomChar.propTypes = {
  onCharLoaded: PropTypes.func,
  onCharLoading: PropTypes.func,
  onError: PropTypes.func,
  updateChar: PropTypes.func,
};

export default RandomChar;
