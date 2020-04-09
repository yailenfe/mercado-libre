import React from "react";
import logo from "./imagen/logo.png";
import "./Header.scss"

export default function Header() {
  return (
    <header className="style-header">
      <div className="style-img">
        <img src={logo} alt="" />
      </div>
      <div className="style-form">
      <form action="">
          <label htmlFor="texto"></label>
          <input type="text" name="search" placeholder="Nunca dejes de buscar"/>
          <button><i class="fas fa-search"></i></button>
      </form>
      </div>
    
    </header>
  );
}
