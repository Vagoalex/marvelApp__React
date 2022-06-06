import { Component } from 'react';
import './RandomChar.scss';

import randomizerDecorate from '../../assets/icons/RandomChar-mjolnerShild.png';
import thorImg from '../../assets/images/RandomThor.jpg';

const thor = {
  icon: thorImg,
  name: 'thor',
  desc: "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...",
};

export class RandomChar extends Component {
  render() {
    return (
      <section className='RandomChar wrapper'>
        <div className='RandomChar__character-info'>
          <img className='character-img' src={thor.icon} alt={thor.name} />
          <div className='character-info'>
            <h3 className='character-info__title'>{thor.name}</h3>
            <p className='character-info__desc'>{thor.desc}</p>
            <div className='character-links'>
              <a
                className='character-links__link button button__main'
                href='#!'
              >
                <div className='inner'>Homepage</div>
              </a>
              <a
                className='character-links__link button button__secondary'
                href='#!'
              >
                <div className='inner'>Wiki</div>
              </a>
            </div>
          </div>
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

export default RandomChar;
