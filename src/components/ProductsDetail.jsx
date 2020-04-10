import React, { useEffect, useState } from "react";
import "./ProductsDetail.scss";

export default function ProducDetail() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://api.mercadolibre.com/items/MLA644968197")
      .then((res) => res.json())
      .then((res) => {
        const oldProduct = res;
        fetch("https://api.mercadolibre.com/items/MLA644968197/description")
          .then((res2) => res2.json())
          .then((res2) => {
            setProduct({
              ...oldProduct,
              description: res2.plain_text,
            });
          });
      });
  }, []);

  return (
    <div className="style-contenedor">
      <div className="style-left">
        <img src={product.thumbnail} alt={product.title} />
        <div>
          <h3>Descripcion del Producto</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="style-right">
        <span>
          {product.condition} - {product.sold_quantity} vendidos
        </span>
        <h2>{product.title}</h2>
        <span className="style-pecio">{product.price}</span>
        <button>Comprar</button>
      </div>
    </div>
  );
}
