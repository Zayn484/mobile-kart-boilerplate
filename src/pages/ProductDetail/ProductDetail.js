import React, { Component } from "react";
import { connect } from 'react-redux';
import { getProductById } from '../../actions/productAction';
import "./ProductDetail.css";


class ProductDetail extends Component {
    componentDidMount() {
     this.props.getProductById();
    }

  render() {
    const { product } = this.props.location.state;

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
    )
  }
}

const mapStateToProps = ({ product }) => ({ product})

export default connect(mapStateToProps, {getProductById } )(ProductDetail);
