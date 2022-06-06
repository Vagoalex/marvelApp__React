import { Fragment, Component } from 'react';
import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import CharList from '../CharList/CharList';
import CharInfo from '../CharInfo/CharInfo';
import decorationVision from '../../assets/images/decorations/decorationVision.png';
import decorationFalcon from '../../assets/images/decorations/decorationFalcon.png';
import decorationIronMan from '../../assets/images/decorations/ironMan.png';
import decorationSpiderMan from '../../assets/images/decorations/decorationSpiderMan.png';

import './App.scss';

import abyssIcon from '../../assets/images/CharList/abyss.jpg';
import adamWarlockIcon from '../../assets/images/CharList/adamWarlock.jpg';
import boomBoomIcon from '../../assets/images/CharList/boomBoom.jpg';
import calypsoIcon from '../../assets/images/CharList/calypso.jpg';
import colleenWingIcon from '../../assets/images/CharList/colleenWing.jpg';
import daimonHellstromIcon from '../../assets/images/CharList/daimonHellstrom.jpg';
import damageControlIcon from '../../assets/images/CharList/damageControl.jpg';
import hulkIcon from '../../assets/images/CharList/hulk.jpg';
import lokiIcon from '../../assets/images/CharList/loki.jpg';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        { name: 'abyss', src: abyssIcon },
        { name: 'Loki', src: lokiIcon },
        { name: 'Adam Warlock', src: adamWarlockIcon },
        { name: 'Boom Boom', src: boomBoomIcon },
        { name: 'Calypso', src: calypsoIcon },
        { name: 'Colleen Wing', src: colleenWingIcon },
        { name: 'Daimon Hellstrom', src: daimonHellstromIcon },
        { name: 'Damage Control', src: damageControlIcon },
        { name: 'Hulk', src: hulkIcon },
      ],
    };
  }
  render() {
    const { characters } = this.state;
    return (
      <Fragment>
        <header className='header'>
          <Header />
          <RandomChar />
        </header>
        <main className='main'>
          <div className='container wrapper'>
            <div className='main__content char-content'>
              <CharList characters={characters} />
              <CharInfo characters={characters} />
              <img
                className='decoration-vision'
                src={decorationVision}
                alt='decoration-vision'
              />
              <img
                className='decoration-falcon'
                src={decorationFalcon}
                alt='decorationFalcon'
              />
              <img
                className='decoration-iron-Man'
                src={decorationIronMan}
                alt='decorationIronMan'
              />
              <img
                className='decoration-spider-man'
                src={decorationSpiderMan}
                alt='decorationSpiderMan'
              />
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
