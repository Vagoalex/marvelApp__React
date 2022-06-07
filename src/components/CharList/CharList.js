import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './CharList.scss';
import CharListItem from '../CharListItem/CharListItem';

export class CharList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharsLoaded)
      .catch(this.onError);
  }

  onCharsLoaded = (chars) => {
    this.setState({ chars, loading: false });
  };

  onError = () => {
    console.log('error');
  };

  render() {
    const { chars } = this.state;
    const heroes = chars.map(({ id, ...data }) => (
      <CharListItem key={id} data={data} />
    ));

    return (
      <section className='CharList'>
        <div className='CharList-cards'>{heroes}</div>
        <button className='CharList-cards-more button button__main button__long'>
          <div className='inner'>Load More</div>
        </button>

        <div className='scroll'>
          <span className='scroll-up'>
            <span className='mouse-wheel'></span>
          </span>
        </div>
      </section>
    );
  }
}

export default CharList;
