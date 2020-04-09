import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import ProductListItem from "./ProductListItem";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=zapatos&limit=4")
      .then((res) => res.json())
      .then((res) => setProducts(res.results));
  });

  return (
    <div className="lista-productos">
      {products.map((product) => (
        <div className="style-product">
          <ProductListItem
            price={product.price}
            freeShipping={product.shipping.free_shipping}
            city={product.address.city_name}
            title={product.title}
            image={product.thumbnail}
          />
        </div>
      ))}
    </div>
  );
}
