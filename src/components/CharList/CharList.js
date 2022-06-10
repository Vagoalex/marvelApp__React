import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import CharListItem from '../CharListItem/CharListItem';

import './CharList.scss';

import charItemLoadingGif from '../../assets/gifs/CharListItemLoading.gif';
import ironMan404 from '../../assets/gifs/ironMan404.gif';

export class CharList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false,
    newCharsLoading: false,
    offset: 0,
    charEnded: false,
  };
  _timeout = null;

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequestChars();
  }

  componentWillUnmount() {
    clearInterval(this._timeout);
  }

  onRequestChars = (offset) => {
    this.onNewCharsLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharsLoaded)
      .catch(this.onError);
  };

  onCharsLoaded = (newChars) => {
    let ended = false;
    if (newChars.length < 9) {
      ended = true;
    }

    this.setState(({ offset, chars }) => ({
      chars: [...chars, ...newChars],
      loading: false,
      newCharsLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  onNewCharsLoading = () => {
    this.setState({ newCharsLoading: true });
  };

  onScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  render() {
    const { onCharSelected } = this.props;
    const { chars, loading, error, newCharsLoading, offset, charEnded } =
      this.state;
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
          onClick={() => this.onRequestChars(offset)}
          className='CharList-cards-more button button__main button__long'
          style={{ visibility: charEnded ? 'hidden' : '' }}
        >
          <div className='inner'>Load More</div>
        </button>

        <div tabIndex={0} onClick={this.onScrollToTop} className='scroll'>
          <span className='scroll-up'>
            <span className='mouse-wheel'></span>
          </span>
        </div>
      </section>
    );
  }
}

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
