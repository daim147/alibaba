import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripeComponent = ({ price }) => {
  const stripePrice = price * 100;
  const PUBLISH_KEY =
    "pk_test_51J9qusSFwUcB27KUNOsmHTre9leVtkBY3lClDbCcIqHM1hVhchiMazJUhI8HZguGDQeUvtQ72ini5Fi2tdgulMHB00NJVCYDF9";

  const getToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ali Baba Center ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={getToken}
      stripeKey={PUBLISH_KEY}
    />
  );
};

export default stripeComponent;
