import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProductById, updateProductFields } from "../../actions/productAction";
import Button from "../../components/Button/Button";
import "./ProductDetail.css";

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


  handleAttrOptionClick = (filteredOptions,selectedOption, productAttrId, optionId) => {

    console.log('option id', selectedOption, optionId);

    const { productDetailById  } = this.props;

      const data = selectedOption.includes(optionId);

      if(!data){
         const ids = filteredOptions.filter((item)=> item._id != optionId).map((item) => ( item._id));        

          const updatedOption = selectedOption.filter(val => !ids.includes(val));

         console.log('updatedOption', updatedOption, ids);

         const updatedProductDetail = { ...productDetailById, selected_option_ids: [...updatedOption, optionId] }

         console.log('filterd optipon', [...updatedOption, optionId]);
         
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

  render() {
    const { product } = this.props.location.state;

    const { isLoading,
         productDetailById : {
          attributes, primary_product , options, selected_option_ids
          }, productDetailById }  = this.props;

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
          {!!Object.keys(productDetailById).length && <div className="col-12 col-md-6 mt-2 mb-5">
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
          }
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
  { getProductById, updateProductFields }
)(ProductDetail);
