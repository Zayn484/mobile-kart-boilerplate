import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../actions/productAction";
import "./ProductDetail.css";

const data =
  "Resplendent in metal and glass, it’s thoughtfully designed to fit comfortably in your hands. A work of art, you won’t want to put down.Lose yourself to an expansive view on the Galaxy A8+ with the Infinity Display. Its 15.36 cm (6.0”) large display makes any view, simply captivating. And the 18.5 : 9 screen ratio provides a stunning cinematic experience that’s truly immersive.It’s time to turn pro with the Galaxy A8+. Its rear 16 MP camera takes stunning pictures that are bright and clear. The dual front camera 16 MP FF (F1.9) + 8 MP (F1.9) with Live Focus mode takes selfies & wefies to another level. Blur the background, add bokeh effect to make you and your friend stand out and if that’s not enough, readjust the effect later on.";
const productDetail = ({ location }) => {
  const { product } = location.state;

  console.log("data here", product);

  const { id } = this.props.match.params;

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
        <div className="col-12 col-md-6 mt-2 ">
          <h6 className="text-uppercase">
            <strong>{product.name}</strong>
          </h6>
          <p className="description">
            Resplendent in metal and glass, it’s thoughtfully designed to fit
            comfortably in your hands. A work of art, you won’t want to put
            down.Lose yourself to an expansive view on the Galaxy A8+ with the
            Infinity Display. Its 15.36 cm (6.0”) large display makes any view,
            simply captivating. And the 18.5 : 9 screen ratio provides a
            stunning cinematic experience that’s truly immersive.It’s time to
            turn pro with the Galaxy A8+. Its rear 16 MP camera takes stunning
            pictures that are bright and clear.The dual front camera 16 MP FF
            (F1.9) + 8 MP (F1.9) with Live Focus mode takes selfies & wefies to
            another level.
          </p>
          <hr />
          <h6>
            <strong> Rs {product.sale_price}</strong>&nbsp;&nbsp;&nbsp;
            <strike>
              <span>RS {product.mark_price}</span>
            </strike>
            <p>
              <small className="sales-msg">
                You save RS {product.mark_price} ({product.sale_msg})
              </small>
            </p>
            <small>Local taxes included (whenever applicable)</small>
          </h6>
          <hr />
          <small className="font-weight-bold">STORAGE</small>
          <span>
            <button className="btn btn-primary m-3">1.5 GB</button>
            <button className="btn btn-primary m-3">2 GB</button>
          </span>
          <br />
          <small className="font-weight-bold">COLORS</small>
          <span>
            <button className="btn btn-primary m-3">BLACK</button>
            <button className="btn btn-primary m-3">GOLD</button>
          </span>
          <br />
          <hr />
          <button className="btn btn-primary ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ product }) => ({ product });

export default connect(
  mapStateToProps,
  { getProductById }
)(productDetail);
