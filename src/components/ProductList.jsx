import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import ProductListItem from "./ProductListItem";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);
  function useQuery() {
    return new URLSearchParams(props.location.search);
  }
  const query = useQuery();
  const q = query.get("q");

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + q + "&limit=15")
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
