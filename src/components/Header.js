import React from "react";
import  {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="main_header">
      <div className="header">
        <h1>Color Picker</h1>
      </div>
      <div className="menu_header">
          <div className="menu_list">
              <NavLink to="/" > Home</NavLink>
          </div>
          <div className="menu_list">
              <a href="https://atanumondal.in/" target="_blank">Protfolio</a>
          </div>
      </div>
    </div>
  );
};

export default Header;
