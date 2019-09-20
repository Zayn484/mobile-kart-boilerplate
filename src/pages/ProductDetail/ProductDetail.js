import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProductById, updateProductFields } from "../../actions/productAction";
import Button from "../../components/Button/Button";
import Carousal from "../../components/Carousal";
import Spinner from "../../components/Spinner/Spinner";
import "./ProductDetail.css";

class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getProductById(id);
  }

  handleAttrOptionClick = (filteredOptions,selectedOption, productAttrId, optionId) => {
    const { productDetailById  } = this.props;

      if(!selectedOption.includes(optionId)){
         const ids = filteredOptions.filter((item)=> item._id != optionId).map((item) => ( item._id));        
         const updatedOption = selectedOption.filter(val => !ids.includes(val));
         const updatedProductDetail = { ...productDetailById, selected_option_ids: [...updatedOption, optionId] }         
         this.props.updateProductFields(updatedProductDetail);
      }
  
      return true;
  }

  renderProductAttrOptions = (productAttrId, data, selectedOption) => {
     const filteredOptions = data.filter((item) => item.attrib_id == productAttrId);

     return  filteredOptions.map((item, key) => {
        return (
        <Fragment>
          <Button
            keys={key}
            content={item.name}
            changeColor={selectedOption.includes(item._id)}
            handleToggle={() => this.handleAttrOptionClick(filteredOptions,selectedOption, productAttrId, item._id)}
          />
      </Fragment>
      )})
  }

  renderSelectedImages = (products, selectedOption) => {
     
  const data = products.filter((item) => item.sign.every( e => selectedOption.includes(e) ));

  console.log('data images', data[0].images, selectedOption);

    return (
          <Carousal images={data[0].images} />      
    )
  }

  render() {
    const { product } = this.props.location.state;

    const { isLoading,
         productDetailById : {
          attributes, primary_product , options, selected_option_ids, product_variations
          }, productDetailById }  = this.props;

  if(isLoading) {
    return (
            <div className="text-center mx-auto">
              <Spinner />
            </div>
      )    
    } else {
      return (
        <div className="container product-detail-container">
           {!!Object.keys(productDetailById).length && <div className="row">
            <div className="col-12 col-md-6 image-container">
              {this.renderSelectedImages(product_variations, selected_option_ids)}
            </div>
             <div className="col-12 col-md-6 mt-2 mb-5">
              <h6 className="font-weight-bold text-uppercase">{product.name}</h6>
              <p className="description">
                  {primary_product.desc}
               </p> 
              <hr />
              <strong> Rs. {primary_product.sale_price}</strong>
              &nbsp;&nbsp;&nbsp; <strike>Rs. {primary_product.mark_price}</strike> <br />
              <small className="sales-msg">You save Rs. { parseFloat(primary_product.mark_price)  - parseFloat(primary_product.sale_price)} {primary_product.sale_msg}</small>
              <br />
              <small>*Local taxes included (whenever applicable)</small>
              <hr />
               {!!attributes.length && 
                   attributes.map((item, key) => {
                    return (
                       <Fragment >
                        <small keys={key} className="font-weight-bold">{item.name.toUpperCase()}</small>
                        <span className="d-flex">
                          {this.renderProductAttrOptions(item._id, options, selected_option_ids)}                      
                        </span>
                         </Fragment>
                    )
                  })
                }
              <hr />
              <button className="btn border button">Add to Cart</button>
            </div>
          </div>
           }
        </div>
      )
    }
  }
} 

const mapStateToProps = ({ product: { isLoading, productDetailById } }) => ({
  isLoading,
  productDetailById
});

export default connect(
  mapStateToProps,
  { getProductById, updateProductFields }
)(ProductDetail);
