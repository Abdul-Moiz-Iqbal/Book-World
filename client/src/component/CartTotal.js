import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const CartTotal = () => {
  const makePayment = async () => {
    const stripe = await loadStripe(`process.env.REACT_APPSTRIPE_URL`);

    const body = {
      title: "Rajendra Prasad",
      price: 10,
    };

    const header = { "Content-Type": "application/json" };

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/create-checkout-session`,
      { method: "POST", headers: header, body: JSON.stringify(body) }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="px-8 mt-5 mb-20 flex justify-end">
      <div className="w-[30%]">
        <div>
          <div className="font-semibold font-Poppins flex justify-between py-3 border-b ">
            <div>SubTotal:</div>
            <div className="font-normal text-slate-500">100$</div>
          </div>
          <div className="font-semibold font-Poppins flex justify-between py-3 border-b ">
            <div>Shipping:</div>
            <div className="font-normal text-slate-500">20s$</div>
          </div>
          <div className="font-semibold font-Poppins flex justify-between py-3 border-b ">
            <div>Total:</div>
            <div className="text-2xl font-light">120$</div>
          </div>
          <button
            onClick={makePayment}
            className=" w-full mt-5 py-3 text-center rounded-full  text-white border border-solid bg-teal-900  hover:bg-teal-950 "
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
