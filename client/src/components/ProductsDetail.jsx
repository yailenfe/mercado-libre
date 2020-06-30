import React, { useEffect, useState } from "react";
import "./ProductsDetail.scss";
import { useParams } from "react-router-dom";

export default function ProducDetail() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("https://api.mercadolibre.com/items/" + id)
            .then((res) => res.json())
            .then((res) => {
                const oldProduct = res;
                fetch(
                    "https://api.mercadolibre.com/items/" + id + "/description"
                )
                    .then((res2) => res2.json())
                    .then((res2) => {
                        setProduct({
                            ...oldProduct,
                            description: res2.plain_text,
                        });
                    });
            });
    }, [id]);

    return (
        <div className="style-contenedor">
            <div className="style-left">
                <img
                    src={product.pictures && product.pictures[0].url}
                    alt={product.title}
                />
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
