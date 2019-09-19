import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../actions/productAction";
import "./ProductDetail.css";

import Button from "../../components/Button/Button";

class ProductDetail extends Component {
  state = {
    active: 1,
    colorActive: 0
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getProductById(id);
  }

  handleClick = event => {
    // accessible
    event.target.style.color = "white";
    event.target.style.backgroundColor = "#2C3E50";
  };

  toggleStorage = position => {
    if (this.state.active === position) {
      this.setState({ active: null });
    } else {
      this.setState({ active: position });
    }
  };

  toggleColor = position => {
    if (this.state.colorActive === position) {
      this.setState({ colorActive: null });
    } else {
      this.setState({ colorActive: position });
    }
  };

  changeStorgeColor = position => {
    if (this.state.active === position) {
      const style = {
        color: "white",
        backgroundColor: "#2C3E50"
      };
      return style;
    }
    return "";
  };

  changeSetColor = position => {
    if (this.state.colorActive === position) {
      const style = {
        color: "white",
        backgroundColor: "#2C3E50"
      };
      return style;
    }
    return "";
  };

  render() {
    const { product } = this.props.location.state;

    const { isLoading, productDetailById } = this.props;

    console.log("productDetailById", productDetailById);

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
          <div className="col-12 col-md-6 mt-2 mb-5">
            <h6 className="font-weight-bold text-uppercase">{product.name}</h6>
            <p className="description">
              Resplendent in metal and glass, it’s thoughtfully designed to fit
              comfortably in your hands. A work of art, you won’t want to put
              down.Lose yourself to an expansive view on the Galaxy A8+ with the
              Infinity Display. Its 15.36 cm (6.0”) large display makes any
              view, simply captivating. And the 18.5 : 9 screen ratio provides a
              stunning cinematic experience that’s truly immersive.
            </p>
            <hr />
            <strong> Rs. {product.sale_price}</strong>
            &nbsp;&nbsp;&nbsp; <strike>Rs. {product.mark_price}</strike> <br />
            <small className="sales-msg">You save Rs. 3000 (10% off)</small>
            <br />
            <small>*Local taxes included (whenever applicable)</small>
            <hr />
            <small className="font-weight-bold">STORAGE</small>
            <span className="d-flex">
              <Button
                content={"1.5GB"}
                changeColor={this.changeStorgeColor(0)}
                handleToggle={() => this.toggleStorage(0)}
              />
              <Button
                content={"2GB"}
                changeColor={this.changeStorgeColor(1)}
                handleToggle={() => this.toggleStorage(1)}
              />
            </span>
            <hr />
            <small className="font-weight-bold">COLORS</small>
            <span className="d-flex">
              <Button
                content={"BLACK"}
                changeColor={this.changeSetColor(0)}
                handleToggle={() => this.toggleColor(0)}
              />
              <Button
                content={"GOLD"}
                changeColor={this.changeSetColor(1)}
                handleToggle={() => this.toggleColor(1)}
              />
            </span>
            <hr />
            <button className="btn border button">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ product: { isLoading, productDetailById } }) => ({
  isLoading,
  productDetailById
});

export default connect(
  mapStateToProps,
  { getProductById }
)(ProductDetail);
