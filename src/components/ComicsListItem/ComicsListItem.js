// import PropTypes from 'prop-types';

import './ComicsListItem.scss';

const ComicsListItem = (props) => {
  const { data, id, onComicsSelected } = props;
  const { title, thumbnail, price } = data;

  return (
    <li
      //   onClick={() => onCharSelected(id)}
      className='ComicsList-cards-item'
      tabIndex={0}
      //   onKeyDown={(e) => {
      //     if (e.key === 'Enter') {
      //       onCharSelected(id);
      //     }
      //   }}
    >
      <img
        className='ComicsList-cards-item__img'
        src={thumbnail}
        alt={`comics: ${title}`}
      />
      <div className='ComicsList-cards-item-titles'>
        <h3 className='ComicsList-cards-item-titles__title'>{title}</h3>
        <h4 className='ComicsList-cards-item-titles__price'>
          {price === 0 ? 'Not available' : price + '$'}
        </h4>
      </div>
    </li>
  );
};

// ComicsListItem.propTypes = {
//   data: PropTypes.object,
//   id: PropTypes.number,
//   onCharSelected: PropTypes.func,
// };

export default ComicsListItem;
