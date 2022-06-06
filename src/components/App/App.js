import { Fragment, Component } from 'react';
import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import CharList from '../CharList/CharList';
import CharInfo from '../CharInfo/CharInfo';
import decorationElement from '../../assets/images/decorationElement.png';

import './App.scss';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className='main wrapper'>
          <RandomChar />
          <div className='main__content char-content'>
            <CharList />
            <CharInfo />
          </div>
          <img
            className='main__decoration'
            src={decorationElement}
            alt='decoration-element'
          />
          <div className='main__scroll'>
            Scroll up
            <span className='scroll-up'>
              <span className='mouse-wheel'></span>
            </span>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
