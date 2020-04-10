import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "./imagen/logo.png";
import "./Header.scss";

export default function Header() {
  const [q, setQ] = useState("");
  const history = useHistory();

  return (
    <header className="style-header">
      <div className="style-img">
        <img src={logo} alt="" />
      </div>
      <div className="style-form">
        <form
          onSubmit={(e) => {
            history.push(`/products?q=${q}`);
            e.preventDefault();
          }}
        >
          <label htmlFor="texto"></label>
          <input
            type="text"
            name="q"
            placeholder="Nunca dejes de buscar"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </header>
  );
}
