import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productAction';
import "./ProductList.css";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { isLoading, productsList } = this.props;

    return (
      <div className="container">
      <div className="row list-container ">
        {productsList.map(d => (
          <div key={d._id} className="col-10 col-md-3 mx-auto m-4">
            <div className="card">
              <Link to={{ pathname: `/${d._id}`, state: { product: d } }}>
                <img src={d.images[0]} className="card-img-top" alt={d.name} />
              </Link>
              <div className="card-body">
                <h3>{d.name}</h3>
                <hr />
                <p className="my-1"> 
                   Rs {d.sales_price}
                <span className="mark-price">Rs. {d.mark_price}</span>
                <span className="sales-msg"> {d.sales_msg} </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  }
}
 
const mapStateToProps = ({ product: { isLoading, productsList} }) => ({ isLoading, productsList})

export default connect(mapStateToProps, { getProducts })(ProductList);
