import { useState } from 'react';
import classNames from 'classnames';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import NavLink from '../../components/Navbar/NavLink';
import { NAVBAR_LINKS } from '../../shared/constants';
import Link from 'next/link';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((val) => !val);
  };

  return (
    <header>
      <div className="navbar md:grid md:grid-cols-3">
        <div className="navbar-logo-container">
          <Link href="/">
            <a>ROHIN CHOPRA</a>
          </Link>
        </div>
        <div className="navbar-menu-container md:border-l-2 md:border-l-primary md:bg-darkGray">
          <div
            className={classNames({
              'navbar-menu': true,
              'is-active': isActive,
              'is-not-active': !isActive,
            })}
          >
            {NAVBAR_LINKS.map(({ link, text, isPrimary }) => (
              <div
                className={classNames({
                  'navbar-link-item': true,
                  'navbar-link-primary-item': isPrimary,
                })}
                key={text}
              >
                <NavLink onClick={toggleActive} href={link}>
                  {text}
                </NavLink>
              </div>
            ))}
          </div>
          <MdMenu
            className={classNames({
              'navbar-hamburger-icon': true,
              hidden: isActive,
            })}
            onClick={toggleActive}
          />
          <MdOutlineClose
            className={classNames({
              'navbar-hamburger-icon': true,
              hidden: !isActive,
            })}
            onClick={toggleActive}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
