import { Fragment, Component } from 'react';
import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import CharList from '../CharList/CharList';
import CharInfo from '../CharInfo/CharInfo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import decorationVision from '../../assets/images/decorations/decorationVision.png';
import decorationFalcon from '../../assets/images/decorations/decorationFalcon.png';
import decorationIronMan from '../../assets/images/decorations/ironMan.png';
import decorationSpiderMan from '../../assets/images/decorations/decorationSpiderMan.png';

import './App.scss';

export class App extends Component {
  state = {
    selectedChar: null,
  };

  onScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  onCharSelected = (id) => {
    this.setState({ selectedChar: id });
    this.onScrollToTop();
  };

  render() {
    const { selectedChar } = this.state;
    return (
      <Fragment>
        <header className='header'>
          <Header />
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
        </header>
        <main className='main'>
          <div className='container wrapper'>
            <div className='main__content char-content'>
              <ErrorBoundary>
                <CharList onCharSelected={this.onCharSelected} />
              </ErrorBoundary>
              <ErrorBoundary>
                <CharInfo charID={selectedChar} />
              </ErrorBoundary>
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
