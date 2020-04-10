import React from "react";
import "./ProductListItem.scss";

export default function ProductListItem(props) {
  return (
    <div className="product">
      <div className="style-derecha">
        <img src={props.image} alt={props.title} />
        <div className="style1">
          <h3>
            {props.price}
            {props.freeShipping && (
              <span className="style-icono">
                <i className="fas fa-truck"></i>
              </span>
            )}
          </h3>
          <p className="style-tittle">{props.title}</p>
        </div>
      </div>
      <div className="style-izquirda">
        <span>{props.city}</span>
      </div>
    </div>
  );
}
