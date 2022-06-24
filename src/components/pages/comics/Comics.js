import ComicsBanner from '../../ComicsBanner/ComicsBanner';
import ComicsList from '../../ComicsList/ComicsList';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

import decorationVision from '../../../assets/images/decorations/decorationVision.png';
// import decorationFalcon from '../../../assets/images/decorations/decorationFalcon.png';
// import decorationIronMan from '../../../assets/images/decorations/ironMan.png';

import './Comics.scss';

const Comics = () => {
  return (
    <>
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
          {/* <img
            className='decoration-falcon'
            src={decorationFalcon}
            alt='decorationFalcon'
          />
          <img
            className='decoration-iron-Man'
            src={decorationIronMan}
            alt='decorationIronMan'
          /> */}
        </div>
      </section>
    </>
  );
};

export default Comics;
