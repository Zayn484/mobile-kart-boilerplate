import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productAction";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import "./ProductList.css";

class ProductList extends Component {
  state = { pageNo: 0, showButtonLoader: false };

  componentDidMount() {
    this.props.getProducts({ pageNo: 1 });

    this.setState({ pageNo: 1 });
  }

  componentDidUpdate(prevProps) {
    const { productsList: prevPropsProductsList } = prevProps;
    const { productsList } = this.props;

    if (
      !!productsList.length &&
      productsList.length !== prevPropsProductsList.length
    ) {
      this.setState({ showButtonLoader: false });
    }
  }

  handleLoadMore = () => {
    const { pageNo } = this.state;

    this.props.getProducts({ pageNo: pageNo + 1 });

    this.setState({ pageNo: pageNo + 1, showButtonLoader: true });
  };

  handleCartClick = (id) => {
    this.props.history.push(`/products/${id}`);
  }

  render() {
    const { isLoading, productsList, currentProductList } = this.props;

    if (isLoading) {

      console.log('loader here', isLoading);
      
      return (
        <div className="text-center mx-auto">
          <Spinner />
         </div>
      );
    }

    return (
      <div className="container mx-auto text-center">
        <div className="row list-container">
            {productsList.map(d => (
              <div key={d._id} className={`col-12 col-md-5 col-lg-3 m10`} onClick={() =>  this.handleCartClick(d._id)}>
                <div className="card with-margin">
                    <img
                      src={d.images[0]}
                      className="card-img-top card-img"
                      alt={d.name}
                    />
                  <div className="card-body">
                    <h3>{d.name}</h3>
                    <hr />
                    <p className="my-1">
                      Rs {parseFloat(d.sale_price).toFixed(2)}&nbsp;
                      <span className="mark-price">
                        Rs. {parseFloat(d.mark_price).toFixed(2)}
                      </span>
                      &nbsp;
                      <span className="sales-msg"> ({d.sale_msg}) </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {!!currentProductList.length ? (
          <button
            className="btn border m-2 button"
            // changeColor={selectedOption.includes(item._id)}
            onClick={this.handleLoadMore}
          >
            {this.state.showButtonLoader ? <Spinner /> : "Load More"}
          </button>
        ) : (
          "Thats it ..!!!"
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  product: { isLoading, productsList, currentProductList }
}) => ({
  isLoading,
  productsList,
  currentProductList
});

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
