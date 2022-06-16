import { useState } from 'react';

import './ComicsBanner.scss';

const ComicsBanner = () => {
  return (
    <section className='Comics wrapper'>
      <div className='Comics-box'>
        <div className='Comics-box-logo'>
          <img
            src='https://i.giphy.com/media/9r75CL4HcusetkC3d4/giphy.webp'
            alt='logo-stanLee'
            className='Comics-box-logo__img'
          />
        </div>
        <div className='Comics-box-titles'>
          <h3 className='Comics-box-titles__title'>New comics every week!</h3>
          <h3 className='Comics-box-titles__title'>Stay tuned!</h3>
        </div>
        <div className='Comics-box-logo'>
          <img
            src='https://i.giphy.com/media/13kajTax0GCg0g/giphy.webp'
            alt='logo-Avengers'
            className='Comics-box__logo-avengers'
          />
        </div>
      </div>
    </section>
  );
};

export default ComicsBanner;
