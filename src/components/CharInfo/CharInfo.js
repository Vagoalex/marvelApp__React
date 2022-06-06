import { Component } from 'react';
import './CharInfo.scss';

export class CharInfo extends Component {
  render() {
    const { characters } = this.props;
    const { name, src } = characters[1];
    return (
      <section className='CharInfo'>
        <div className='char-info'>
          <img className='char-info__img' src={src} alt={name} />
          <div className='char-info-inner'>
            <h3 className='char-info-inner__title'>{name}</h3>
            <a className='char-info-inner__link button button__main' href='#!'>
              <div className='inner'>Homepage</div>
            </a>
            <a
              className='char-info-inner__link button button__secondary'
              href='#!'
            >
              <div className='inner'>Wiki</div>
            </a>
          </div>
        </div>
        <div className='char-info-desc'>
          <p className='char-info-desc__paragraph'>
            In Norse mythology, Loki is a god or jötunn (or both). Loki is the
            son of Fárbauti and Laufey, and the brother of Helblindi and
            Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the
            wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is
            the father of Nari and/or Narfi and with the stallion Svaðilfari as
            the father, Loki gave birth—in the form of a mare—to the
            eight-legged horse Sleipnir. In addition, Loki is referred to as the
            father of Váli in the Prose Edda.
          </p>
        </div>
        <div className='char-info-comics'>
          <h4 className='char-info-comics__title'>Comics:</h4>
          <ul className='comics-list'>
            <li className='comics-list__item'>
              All-Winners Squad: Band of Heroes (2011) #3
            </li>
            <li className='comics-list__item'>Alpha Flight (1983) #50</li>
            <li className='comics-list__item'>
              Amazing Spider-Man (1999) #503
            </li>
            <li className='comics-list__item'>
              Amazing Spider-Man (1999) #504
            </li>
            <li className='comics-list__item'>
              AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
            </li>
            <li className='comics-list__item'>
              Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
            </li>
            <li className='comics-list__item'>
              Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade
              Paperback)
            </li>
            <li className='comics-list__item'>Vengeance (2011) #4</li>
            <li className='comics-list__item'>Avengers (1963) #1</li>
            <li className='comics-list__item'>Avengers (1996) #1</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default CharInfo;
