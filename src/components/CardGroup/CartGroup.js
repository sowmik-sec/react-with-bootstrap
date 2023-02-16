import React from "react";
import Card from "../Card/Card";

const CartGroup = () => {
  const products = [
    { id: 1, name: "MacBook Air", price: 125000 },
    { id: 2, name: "MacBook Pro", price: 155000 },
    { id: 3, name: "m2 MacBook Pro", price: 175000 },
  ];
  return (
    <div className="card-group">
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default CartGroup;
