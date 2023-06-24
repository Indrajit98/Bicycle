import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Pk);

// console.log(stripePromise);

const Payment = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <progress className="progress w-full"></progress>;
  }
  // console.log(data)

  return (
    <div>
      <h3 className="md:text-2xl md:font-semibold text-slate-800 p-4">
        Payment for Cycle {data?.productName}
      </h3>
      <p className="md:text-xl md:font-semibold text-slate-800 p-4">
        Please pay ${data?.price}
      </p>
      <div className="w-1/2 mt-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
