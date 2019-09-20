import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getProductById,
  updateProductFields
} from "../../actions/productAction";
import Button from "../../components/Button/Button";
import Carousal from "../../components/Carousal";
import Spinner from "../../components/Spinner/Spinner";
import "./ProductDetail.css";

class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getProductById(id);
  }

  handleAttrOptionClick = (
    filteredOptions,
    selectedOption,
    productAttrId,
    optionId
  ) => {
    const { productDetailById } = this.props;

    if (!selectedOption.includes(optionId)) {
      const ids = filteredOptions
        .filter(item => item._id != optionId)
        .map(item => item._id);
      const updatedOption = selectedOption.filter(val => !ids.includes(val));
      const updatedProductDetail = {
        ...productDetailById,
        selected_option_ids: [...updatedOption, optionId]
      };
      this.props.updateProductFields(updatedProductDetail);
    }

    return true;
  };

  renderProductAttrOptions = (productAttrId, data, selectedOption) => {
    const filteredOptions = data.filter(
      item => item.attrib_id == productAttrId
    );

    return filteredOptions.map((item, key) => {
      return (
        <Fragment>
          <Button
            keys={key}
            content={item.name}
            color={
              selectedOption.includes(item._id)
                ? {
                    color: "white",
                    backgroundColor: "#2C3E50"
                  }
                : null
            }
            handleClick={() =>
              this.handleAttrOptionClick(
                filteredOptions,
                selectedOption,
                productAttrId,
                item._id
              )
            }
          />
        </Fragment>
      );
    });
  };

  renderSelectedImages = (products, selectedOption) => {
    const data = products.filter(item =>
      item.sign.every(e => selectedOption.includes(e))
    );

    return (
      <div className="carousal ">
        <Carousal images={data[0].images} />
      </div>
    );
  };

  render() {
    const {
      isLoading,
      productDetailById: {
        attributes,
        primary_product,
        options,
        selected_option_ids,
        product_variations
      },
      productDetailById,
      selectedProductAttr
    } = this.props;

    if (isLoading) {
      return (
        <div className="text-center mx-auto">
          <Spinner />
        </div>
      );
    }

    console.log("selectedProductAttr", selectedProductAttr);
    return (
      <div className="container product-detail-container">
        {!!Object.keys(selectedProductAttr).length && (
          <div className="row h-100">
            <div className="col-12 col-md-6 image-container mx-auto align-center text-center ">
              {this.renderSelectedImages(
                product_variations,
                selected_option_ids
              )}
            </div>
            <div className="col-12 col-md-6 mt-2 mb-5">
              <h6 className="font-weight-bold text-uppercase">
                {selectedProductAttr.name}
              </h6>
              <p className="description">{primary_product.desc}</p>
              <hr />
              <strong>
                {" "}
                Rs. {parseFloat(selectedProductAttr.sale_price).toFixed(2)}
              </strong>
              &nbsp;&nbsp;&nbsp;
              <Fragment>
                <strike>
                  Rs. {parseFloat(selectedProductAttr.mark_price).toFixed(2)}
                </strike>{" "}
                <br />
                <small className="sales-msg">
                  You save Rs.{" "}
                  {parseFloat(
                    selectedProductAttr.mark_price -
                      selectedProductAttr.sale_price
                  ).toFixed(2)}{" "}
                  {selectedProductAttr.sale_msg}
                </small>
                <br />
              </Fragment>
              <small>*Local taxes included (whenever applicable)</small>
              <hr />
              {!!attributes.length &&
                attributes.map((item, key) => {
                  return (
                    <Fragment>
                      <small keys={key} className="font-weight-bold">
                        {item.name.toUpperCase()}
                      </small>
                      <span className="d-flex">
                        {this.renderProductAttrOptions(
                          item._id,
                          options,
                          selected_option_ids
                        )}
                      </span>
                    </Fragment>
                  );
                })}
              <hr />
              <button className="btn border button">Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  product: { isLoading, productDetailById, selectedProductAttr }
}) => ({
  isLoading,
  productDetailById,
  selectedProductAttr
});

export default connect(
  mapStateToProps,
  { getProductById, updateProductFields }
)(ProductDetail);
