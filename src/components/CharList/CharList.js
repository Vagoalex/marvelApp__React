import { Component } from 'react';
import './CharList.scss';
import CharListItem from '../CharListItem/CharListItem';

export class CharList extends Component {
  render() {
    const { characters } = this.props;

    const heroes = characters.map(({ name, src }) => (
      <CharListItem key={name} name={name} src={src} />
    ));

    return (
      <section className='CharList'>
        <div className='CharList-cards'>{heroes}</div>
        <button className='CharList-cards-more button button__main button__long'>
          <div className='inner'>Load More</div>
        </button>
      </section>
    );
  }
}

export default CharList;
