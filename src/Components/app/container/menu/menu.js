/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <input type="checkbox" id="menu_toggle"/>
      <label for="menu_toggle">&#9776;</label>
      <nav>
          <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Продукция</a>
                  <ul className="submenu">
                      <li><a href="#">Кирпич, блоки</a></li>
                      <li><a href="#">Сыпучие материалы</a></li>
                      <li><a href="#">Пиломатериалы</a></li>
                      <li><a href="#">Изоляционные материалы</a></li>
                      <li><a href="#">Опоры</a></li>
                      <li><a href="#">Окна</a></li>
                  </ul>
              </li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Фотогалерея</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Контакты</a></li>
          </ul>
      </nav>
      <form action="" method="POST">
          <input type="text"/>
          <button type="button"><i className="fa fa-search"></i></button>
      </form>
      <img src={require("./top_icon.png")} alt="icon"/>
    </div>
  );
}

export default Menu;