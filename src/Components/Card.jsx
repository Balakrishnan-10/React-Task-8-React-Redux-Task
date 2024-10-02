import React from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from "../Features/ProductSlice";

const Card = () => {
  const productValue = useSelector((state) => state.Products.Products);
  const dispatch = useDispatch();

  // Calculate Toatl Price Function:
  const totalPrice = productValue.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );

  // Calculate Total Quantity Function:
  const totalQuantity = productValue.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );

  return (
    <div className="container">
      <h1 className="rounded bg-dark text-warning text-center p-3 mb-3">
        {" "}
        Shopping Cart using React Redux
      </h1>
      <div className="row fs-2 bg-primary rounded p-2 mb-3 text-white align-items-center">
        <div class="col">Total Quantity : {totalQuantity}</div>
        <div class="col">GrandTotal : $ {totalPrice}</div>
        <div class="col">Shipping : FREE</div>
      </div>
      <div className="row row-col-md-12 row-cols-3">
        <div className="col-md-12">
          {productValue.map((ele, index) => (
            <div key={index} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <Carousel>
                    {ele.images.map((item, i) => {
                      return (
                        <Carousel.Item key={i}>
                          <img
                            src={item}
                            className="img-fluid rounded-start"
                            alt={ele.title}
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Title : {ele.title}</h5>
                    <p className="card-text">
                      Brand : <strong>{ele.brand}</strong>
                    </p>
                    <p className="card-text">Description : {ele.description}</p>
                    <p className="card-text ">
                      <strong> Price : $ {ele.price} </strong>
                    </p>
                    <p className="card-text ">
                      Price/Product :
                      <strong> $ {ele.price * (ele.quantity || 1)} </strong>
                    </p>
                  </div>
                  <div className="btn-group w-50 mb-3 p-3" role="group">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => dispatch(incrementProduct(ele.id))}
                    >
                      +
                    </button>
                    <button className="btn disabled fw-bold">
                      {ele.quantity || 1}
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => dispatch(decrementProduct(ele.id))}
                    >
                      -
                    </button>
                    <div className="ms-5">
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeProduct(ele.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
