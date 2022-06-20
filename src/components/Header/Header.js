import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='Header wrapper'>
      <h1 className='Header__title'>
        <a
          tabIndex={0}
          className='Header__title-link'
          href='https://developer.marvel.com/'
          target='_blank'
          rel='noreferrer'
        >
          Marvel
        </a>{' '}
        information portal
      </h1>
      <nav className='Header__nav'>
        <ul className='nav'>
          <li className='nav__item'>
            <NavLink
              end
              className={({ isActive }) =>
                'nav__link' + (isActive ? ' nav__link--active' : '')
              }
              to='/'
            >
              Characters
            </NavLink>
          </li>
          <span className='nav__slash'>/</span>
          <li className='nav__item'>
            <NavLink
              className={({ isActive }) =>
                'nav__link' + (isActive ? ' nav__link--active' : '')
              }
              to='/comics'
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
