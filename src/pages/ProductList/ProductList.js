import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productAction";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import "./ProductList.css";

class ProductList extends Component {
  state = { pageNo: 0, showButtonLoader: false };

  componentDidMount() {
    this.props.getProducts({ pageNo: 1});

    this.setState({ pageNo: 1});
  }

  componentDidUpdate(prevProps) {
    const { productsList: prevPropsProductsList } = prevProps;
    const { productsList } = this.props;

    if(!!productsList.length && productsList.length !== prevPropsProductsList.length) {
        this.setState({ showButtonLoader: false});
    }
  } 

  handleLoadMore = () => {
    const { pageNo } = this.state;

    this.props.getProducts({ pageNo: pageNo + 1});

    this.setState({ pageNo: pageNo + 1, showButtonLoader: true});
  }

  render() {
    const { isLoading, productsList, currentProductList } = this.props;

    if(isLoading && !productsList.length) {
     return  (
     <div className="text-center mx-auto">
        <Spinner />
      </div>)
    }

    return (
      <div className="container mx-auto text-center">
        <div className="row list-container ">
            <Fragment>
            {productsList.map(d => (
              <div
                key={d._id}
                className={`col-10 col-md-5 col-lg-3 m10`}
              >
                <div className="card with-margin">
                  <Link to={{ pathname: `/${d._id}`, state: { product: d } }}>
                    <img
                      src={d.images[0]}
                      className="card-img-top card-img"
                      alt={d.name}
                    />
                  </Link>
                  <div className="card-body">
                    <h3>{d.name}</h3>
                    <hr />
                    <p className="my-1">
                      Rs {d.sale_price}&nbsp;
                      <span className="mark-price">Rs. {d.mark_price}</span>
                      &nbsp;
                      <span className="sales-msg"> ({d.sale_msg}) </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </Fragment>
        </div>
         {!!currentProductList.length ? 
         <button
            className="btn border m-2 button"
              // changeColor={selectedOption.includes(item._id)}
              onClick={this.handleLoadMore}
          >
            {this.state.showButtonLoader ? <Spinner />: 'Load More'} 
          </button> : 'Thats it ..!!!' }
      </div>
    );
  }
}

const mapStateToProps = ({ product: { isLoading, productsList, currentProductList } }) => ({
  isLoading,
  productsList,
  currentProductList
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
