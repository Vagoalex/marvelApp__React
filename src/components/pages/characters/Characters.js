import { Fragment, useState } from 'react';

import RandomChar from '../../RandomChar/RandomChar';
import CharList from '../../CharList/CharList';
import CharInfo from '../../CharInfo/CharInfo';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

import decorationVision from '../../../assets/images/decorations/decorationVision.png';
import decorationFalcon from '../../../assets/images/decorations/decorationFalcon.png';
import decorationIronMan from '../../../assets/images/decorations/ironMan.png';
import decorationSpiderMan from '../../../assets/images/decorations/decorationSpiderMan.png';

const Characters = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onScrollToTop = () => {
    window.scrollTo({ top: 150 });
  };

  const onCharSelected = (id) => {
    setSelectedChar(id);
    onScrollToTop();
  };

  return (
    <Fragment>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className='container wrapper'>
        <div className='main__content'>
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
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
    </Fragment>
  );
};

export default Characters;
