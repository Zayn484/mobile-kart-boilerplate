import React from "react";

import "./ProductDetail.css";

const productDetail = ({ location }) => {
  const { product } = location.state;
  return (
    <div className="container-fluid product-detail-container">
      <div className="row">
        <div className="col-12 col-md-6 image-container">
          <img
            src={product.imageUrl}
            className="img-fluid image"
            alt={product.title}
          />
        </div>
        <div className="col-12 col-md-6 mt-5 mb-5">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>
            <strong> ${product.price}</strong>
          </h3>
          <hr />
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default productDetail;
