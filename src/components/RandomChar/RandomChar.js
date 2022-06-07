import { Component } from 'react';

import LoadingMarvel from '../LoadingMarvel/LoadingMarvel';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './RandomChar.scss';

import randomizerDecorate from '../../assets/icons/RandomChar-mjolnerShild.png';
import marvelIcon from '../../assets/icons/marvelIcon.jpg';

export class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onCharLoading = () => {
    this.setState({ loading: true });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.onCharLoading();
    this.marvelService
      .getCharacterById(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  componentDidMount() {
    this.updateChar();
    // this.timerId = setInterval(this.updateChar, 60000); // TO DO: update this Interval
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { char, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <LoadingMarvel /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

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
              onClick={this.updateChar}
              className='randomizer-bottom__button button button__main'
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
  }
}

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
            className='character-links__link first-link button button__main'
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

export default RandomChar;
