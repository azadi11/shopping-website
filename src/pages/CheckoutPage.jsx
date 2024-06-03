import { useDispatch, useSelector } from "react-redux";
import "../assets/css/CheckoutPage.css";
import { useNavigate } from "react-router-dom";
import { increaseQty } from "../redux/slices/cardSlice";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cardReducer.cart);
  const isLogin = useSelector((state) => state.userReducer.isLogin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkoutHandler = () => {
    isLogin ? navigate("/peyment") : navigate("/login");
  };

  const calculateTotalQty = () => {
    return cart.reduce((total, item) => total + item.qty, 0);
  };
  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);
  };

  const increaseHandler = (e) => {
    const id = e.target.id;
    const cartItem = cart.find((item) => item.id == id);
    console.log(cartItem);
    dispatch(increaseQty(cartItem));
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-9">
          <div className="shopping-cart w-100">
            <div className="title">Shopping Bag</div>

            {cart.map((item) => (
              <div key={item.id} className="item">
                <div className="buttons-cart">
                  <i className="bi bi-trash3 text-danger "></i>
                  <span className="like-btn-cart"></span>
                </div>

                <div className="image">
                  <img src={item.image} alt={item.title} width="60" />
                </div>

                <div className="description">
                  <span>{item.title}</span>
                  <span>{item.price}$</span>
                </div>

                <div className="quantity">
                  <button
                    className="plus-btn-cart"
                    type="button"
                    name="button"
                    onClick={increaseHandler}
                  >
                    <i
                      id={item.id}
                      className="bi bi-plus d-inline-block w-100 h-100"
                    ></i>
                  </button>
                  <span>{item.qty} </span>
                  <button
                    className="minus-btn-cart"
                    type="button"
                    name="button"
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                </div>

                <div className="total-price">
                  {(item.price * item.qty).toFixed(2)}$
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-3">
          <div className="total shadow rounded  p-5">
            <h4>Total Cart</h4>
            <p>Total Quantity:{calculateTotalQty()}</p>
            <p>Total Price:{calculateTotalPrice()}</p>
            <button className="btn btn-primary" onClick={checkoutHandler}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
