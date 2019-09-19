import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productAction';
import "./ProductList.css";

const data = [
  {
    id: 1,
    title: "IPhone XS",
    description:
      "It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont ",
    price: 999.99,
    imageUrl:
      "https://i.gadgets360cdn.com/products/large/1536782640_635_iphone_xs.jpg"
  },
  {
    id: 2,
    title: "IPhone X",
    description:
      "It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont ",
    price: 890.99,
    imageUrl:
      "https://i.gadgets360cdn.com/products/large/1536782640_635_iphone_xs.jpg"
  },
  {
    id: 3,
    title: "IPhone 8",
    description:
      "It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont ",
    price: 599.9,
    imageUrl:
      "https://i.gadgets360cdn.com/products/large/1536782640_635_iphone_xs.jpg"
  },
  {
    id: 4,
    title: "IPhone 6",
    description:
      "It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont ",
    price: 599.9,
    imageUrl:
      "https://i.gadgets360cdn.com/products/large/1536782640_635_iphone_xs.jpg"
  },
  {
    id: 5,
    title: "IPhone 5",
    description:
      "It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont ",
    price: 329.9,
    imageUrl:
      "https://i.gadgets360cdn.com/products/large/1536782640_635_iphone_xs.jpg"
  },
  {
    id: 6,
    title: "Samsung Galaxy A5",
    description:
      "It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont ",
    price: 429.9,
    imageUrl:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/samsung_galaxy_a50/samsung_galaxy_a50_L_1.jpg"
  },
  {
    id: 7,
    title: "Samsung Galaxy A3",
    description:
      "It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont ",
    price: 429.9,
    imageUrl:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/samsung_galaxy_a50/samsung_galaxy_a50_L_1.jpg"
  },
  {
    id: 8,
    title: "Samsung Galaxy A7",
    description:
      "It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont It is a long established fact that a reader will be distracted by the readable cont ",
    price: 529.9,
    imageUrl:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/samsung_galaxy_a50/samsung_galaxy_a50_L_1.jpg"
  }
];

class ProductList extends Component {
  componentDidMount() {
    // this.props.productsAction();
    this.props.getProducts();
  }

  render() {
    return (
      <div className="container">
      <div className="row list-container ">
        {data.map(d => (
          <div key={d.id} className="col-10 col-md-3 mx-auto m-4">
            <div className="card">
              <Link to={{ pathname: `/${d.id}`, state: { product: d } }}>
                <img src={d.imageUrl} className="card-img-top" alt={d.title} />
              </Link>
              <div className="card-body">
                <h3>Samsung Galaxy A8+ (1.5GB, Black)</h3>
                <hr />
                <p className="my-1"> 
                   Rs 27000.00
                <span className="mark-price">Rs. 30000</span>
                <span className="sales-msg"> (10% Off) </span>
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
 

export default connect(null, { getProducts })(ProductList);
