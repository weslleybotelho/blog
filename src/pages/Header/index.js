import logo from 'svg/blog-logo.svg';

import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

const Header = () => {
  const initialValueForm = {
    search: '',
  };

  const [form, setForm] = useState(initialValueForm);

  const navigate = useNavigate();

  function onChange(event) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });

    console.log(form);
  }

  function handleSearch(e) {
    e.preventDefault();

    navigate(`/search/${form.search}`);
  }

  function openMenuMobile(e) {
    e.preventDefault();

    const bx = document.querySelector('.bx');
    const menu_mobile = document.querySelector('.menu-mobile');

    bx.classList.toggle('activebx');
    menu_mobile.classList.toggle('showmenu');
  }

  function clickMenuMobile(e) {
    // e.preventDefault();

    const bx = document.querySelector('.bx');
    const menu_mobile = document.querySelector('.menu-mobile');

    menu_mobile.classList.remove('showmenu');

    bx.classList.toggle('activebx');
  }

  return (
    <>
      <header className="px-2 py-1">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="bx" onClick={openMenuMobile}></div>

        <div className="flex-start-row">
          <div className="search">
            <form className="flex" onSubmit={handleSearch}>
              <input type="text" name="search" placeholder="Buscar..." onChange={onChange} />
              <button className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop ml-3">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>

          <div className="cta-mobile">
            <Link to="/login" className="link color-primary">
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/about" className="link-menu-mobile" onClick={clickMenuMobile}>
                Sobre
              </Link>
            </li>
            <li>
              <Link onClick={clickMenuMobile} to="/contact" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 px-2">
              <form className="flex" onSubmit={handleSearch}>
                <input type="text" name="search" placeholder="Buscar..." onChange={onChange} />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
