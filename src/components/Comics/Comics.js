import { Fragment, useState } from 'react';

import ComicsBanner from '../ComicsBanner/ComicsBanner';
import ComicsList from '../ComicsList/ComicsList';
import CharInfo from '../CharInfo/CharInfo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import decorationVision from '../../assets/images/decorations/decorationVision.png';
import decorationFalcon from '../../assets/images/decorations/decorationFalcon.png';
import decorationIronMan from '../../assets/images/decorations/ironMan.png';
import decorationSpiderMan from '../../assets/images/decorations/decorationSpiderMan.png';

import './Comics.scss';

const Comics = () => {
  return (
    <Fragment>
      <ComicsBanner />

      <section className='container wrapper'>
        <div className='main__content'>
          <ErrorBoundary>
            <ComicsList />
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
      </section>
    </Fragment>
  );
};

export default Comics;
