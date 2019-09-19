import React from "react";

import "./ProductDetail.css";

const data = 'Resplendent in metal and glass, it’s thoughtfully designed to fit comfortably in your hands. A work of art, you won’t want to put down.Lose yourself to an expansive view on the Galaxy A8+ with the Infinity Display. Its 15.36 cm (6.0”) large display makes any view, simply captivating. And the 18.5 : 9 screen ratio provides a stunning cinematic experience that’s truly immersive.It’s time to turn pro with the Galaxy A8+. Its rear 16 MP camera takes stunning pictures that are bright and clear. The dual front camera 16 MP FF (F1.9) + 8 MP (F1.9) with Live Focus mode takes selfies & wefies to another level. Blur the background, add bokeh effect to make you and your friend stand out and if that’s not enough, readjust the effect later on.';
const productDetail = ({ location }) => {
  const { product } = location.state;

  console.log('data here', product);

  return (
    <div className="container product-detail-container">
      <div className="row">
        <div className="col-12 col-md-6 image-container">
          <img
            src={product.images[0]}
            className="img-fluid image"
            alt={product.name}
          />
        </div>
        <div className="col-12 col-md-6 mt-5 mb-5">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <hr />
          <h3>
            <strong> Rs {product.sale_price}</strong>
            <p>You save Rs. 3000 (10% off)</p>
            <p>Local taxes included (whenever applicable)</p>
          </h3>
          <hr />
          <strong>STORAGE</strong>
          <span> 
          <button className="btn btn-primary">1.5 GB</button>
          <button className="btn btn-primary">2 GB</button>
          </span>
          <hr />
          <strong>STORAGE</strong>
          <span> 
          <button className="btn btn-primary">BLACK</button>
          <button className="btn btn-primary">GOLD</button>
          </span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default productDetail;
