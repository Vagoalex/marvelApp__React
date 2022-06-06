import { Component } from 'react';
import './CharListItem.scss';

export class CharListItem extends Component {
  render() {
    const { name, src } = this.props;
    return (
      <div className='CharList-cards-item'>
        <img
          className='CharList-cards-item__img'
          src={src}
          alt={`character: ${name}`}
        />
        <h3 className='CharList-cards-item__title'>{name}</h3>
      </div>
    );
  }
}

export default CharListItem;
