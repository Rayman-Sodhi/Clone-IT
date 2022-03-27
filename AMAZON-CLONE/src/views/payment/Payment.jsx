import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { emptyCart } from "../../redux/cartSlice";
import CheckoutCard from "../../components/card/CheckoutCard";
import Spinner from "react-bootstrap/Spinner";
import {
  selectCartItemsCount,
  selectSubtotal,
  selectCartItems,
} from "../../redux/cartSelector";
import { Link } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../../axios";
import { db } from "../../firebase.utils";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartCount = useSelector((state) => selectCartItemsCount(state));
  const subtotal = useSelector((state) => selectSubtotal(state));

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    let unsubscribe = false;

    const getClientSecret = async () => {
      try {
        const response = await axios({
          method: "post",
          // Stripe expects the total in a currencies subunits
          url: `/payments/create/${subtotal * 100}`,
        });
        if (!unsubscribe) setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    getClientSecret();
    return () => {
      unsubscribe = true;
    };
  }, [subtotal]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        db.collection("amazonUsers")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cartItems,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch(emptyCart());
        navigate(`/success/${paymentIntent.id}`);
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cartCount} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.name}</p>
            <p>18 Great South Rd </p>
            <p>Auckland , New Zealand</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>
              Review items <br />
              and delivery
            </h3>
          </div>
          <div className="payment__items">
            {cartItems.length > 0 &&
              cartItems.map(({ productId, ...props }) => (
                <div key={productId}>
                  <CheckoutCard productId={productId} hiddenAction {...props} />
                  <div className="checkout__cart__card" />
                </div>
              ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <p>Enter 4242 4242 4242 4242 as the card number.</p>
                <CurrencyFormat
                  value={subtotal}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                  prefix={"$"}
                  renderText={(value) => (
                    <div>
                      <h3>Order Total : {value}</h3>
                    </div>
                  )}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ? (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Buy Now"
                    )}
                  </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
