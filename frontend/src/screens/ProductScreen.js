import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function HomeScreen(props) {
  const proDuct = data.product.find((x) => x._id === props.match.params.id);
  if (!proDuct) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={proDuct.images} alt={proDuct.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h2>{proDuct.name}</h2>
            </li>
            <li>
              <Rating
                rating={proDuct.rating}
                numReviews={proDuct.numReviews}
              ></Rating>
            </li>
            <li>Price: ${proDuct.price}</li>
            <li>
              Description:
              <p>{proDuct.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${proDuct.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {proDuct.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
