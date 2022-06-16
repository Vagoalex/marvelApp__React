import './Header.scss';

const Header = ({ onSelectPage, page }) => {
  const navElements = ['Characters', '/', 'Comics'];

  const links = navElements.map((item) => {
    const activeClass = 'nav__item--active';

    const defaultClass = 'nav__item';

    return item === '/' ? (
      <span key={item} className='nav__slash'>
        /
      </span>
    ) : (
      <li
        onClick={onSelectPage}
        tabIndex={0}
        key={item}
        className={`${defaultClass} ${item === page ? activeClass : ''}`}
      >
        {item}
      </li>
    );
  });

  return (
    <div className='Header wrapper'>
      <h1 className='Header__title'>
        <a className='Header__title-link' href='https://developer.marvel.com/'>
          Marvel
        </a>{' '}
        information portal
      </h1>
      <nav className='Header__nav'>
        <ul className='nav'>{links}</ul>
      </nav>
    </div>
  );
};

export default Header;
