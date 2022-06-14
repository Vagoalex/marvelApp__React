import './Header.scss';

const Header = (props) => {
  return (
    <div className='Header wrapper'>
      <h1 className='Header__title'>
        <a className='Header__title-link' href='https://developer.marvel.com/'>
          Marvel
        </a>{' '}
        information portal
      </h1>
      <nav className='Header__nav'>
        <ul className='nav'>
          <li tabIndex={0} className='nav__item  nav__item--active'>
            Characters
          </li>
          <span className='nav__slash'>/</span>
          <li tabIndex={0} className='nav__item'>
            Comics
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
