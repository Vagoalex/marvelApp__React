import { useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import CharListItem from '../CharListItem/CharListItem';

import './CharList.scss';

import charItemLoadingGif from '../../assets/gifs/CharListItemLoading.gif';
import ironMan404 from '../../assets/gifs/ironMan404.gif';

const CharList = (props) => {
  const [chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newCharsLoading, setNewCharsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [charEnded, setCharEnded] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    onRequestChars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequestChars = (offset) => {
    onNewCharsLoading();
    marvelService.getAllCharacters(offset).then(onCharsLoaded).catch(onError);
  };

  const onCharsLoaded = (newChars) => {
    let ended = false;
    if (newChars.length < 9) {
      ended = true;
    }

    setChars((chars) => [...chars, ...newChars]);
    setLoading(() => false);
    setNewCharsLoading(() => false);
    setOffset((offset) => offset + 9);
    setCharEnded(() => ended);
  };

  const onNewCharsLoading = () => {
    setNewCharsLoading(() => true);
  };

  const onScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const onError = () => {
    setLoading(() => false);
    setError(() => true);
  };

  const { onCharSelected } = props;

  const heroes = chars.map(({ id, ...data }) => (
    <CharListItem
      onCharSelected={onCharSelected}
      key={id}
      data={data}
      id={id}
    />
  ));

  const statusArray = [...Array(9)].map((x, i) => (
    <CharItemStatus loading={loading} error={error} key={i} />
  ));

  const status = error || loading ? statusArray : null;
  const content = !(loading || error) ? heroes : null;

  return (
    <section className='CharList'>
      <ul className='CharList-cards'>
        {status}
        {content}
      </ul>

      <button
        disabled={newCharsLoading}
        onClick={() => onRequestChars(offset)}
        className='CharList-cards-more button button__main button__long'
        style={{ visibility: charEnded ? 'hidden' : '' }}
      >
        <div className='inner'>Load More</div>
      </button>

      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onScrollToTop();
          }
        }}
        onClick={onScrollToTop}
        className='scroll'
      >
        <span className='scroll-up'>
          <span className='mouse-wheel'></span>
        </span>
      </div>
    </section>
  );
};

const CharItemStatus = (props) => {
  const { loading } = props;
  const loadData = {
    src: charItemLoadingGif,
    alt: 'loading gif',
    title: 'Loading...',
  };

  const errorData = {
    src: ironMan404,
    alt: 'error gif',
    title: 'Load Error!',
  };

  return (
    <div className='CharList-cards-item '>
      <img
        className='CharList-cards-item__img'
        src={loading ? loadData.src : errorData.src}
        alt={loading ? loadData.alt : errorData.alt}
      />
      <h3 className='CharList-cards-item__title'>
        {loading ? loadData.title : errorData.title}
      </h3>
    </div>
  );
};

export default CharList;
