import { Component } from 'react';
import marvelIcon from '../../assets/icons/marvelIcon.jpg';

import './CharListItem.scss';

export class CharListItem extends Component {
  render() {
    const { data } = this.props;
    const { name, thumbnail } = data;

    const notAvailableImg = 'image_not_available.jpg';
    const image =
      thumbnail.slice(-23) === notAvailableImg ? marvelIcon : thumbnail;

    return (
      <div className='CharList-cards-item'>
        <img
          className='CharList-cards-item__img'
          src={image}
          alt={`character: ${name}`}
        />
        <h3 className='CharList-cards-item__title'>{name}</h3>
      </div>
    );
  }
}

export default CharListItem;
