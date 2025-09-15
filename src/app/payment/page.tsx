"use client"
// import { RootState } from '@/redux/store';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux';

// import CheckoutForm from '../components/Payment/CheckOutForm';

// // STRIPE_PUBLISHABLE_KEY
// // STRIPE_SECRET_KEY

// const page = () => {

//     const selectedCarAmount = useSelector(
//   (state: RootState) => state.selectedCarAmount.amount
// );

// useEffect( () => {
// console.log("Selected Ride Price:", selectedCarAmount);
// },[])

// const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY as any)
// const options:any ={
//     mode:"payment",
//     amount :selectedCarAmount,
//     current :"inr",
// }


//   return (
    
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm/>
//     </Elements>
//   )
// }

// export default page




// // import { RootState } from "@/redux/store";
// // import { useSelector } from "react-redux";
// // import { loadStripe } from "@stripe/stripe-js";

// // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// // export default function PaymentPage() {
// //   const selectedCarAmount = useSelector(
// //     (state: RootState) => state.selectedCarAmount.amount
// //   );

// //   const handleCheckout = async () => {
// //     const stripe = await stripePromise;

// //     // Create a checkout session on Stripe (⚠️ requires backend normally)
// //     // For demo, we can use Stripe "prebuilt checkout links"
// //     await stripe?.redirectToCheckout({
// //       lineItems: [
// //         {
// //           price: "price_12345", // <- replace with a Price ID from your Stripe Dashboard
// //           quantity: 1,
// //         },
// //       ],
// //       mode: "payment",
// //       successUrl: window.location.origin + "/success",
// //       cancelUrl: window.location.origin + "/cancel",
// //     });
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-10 space-y-4">
// //       <h1 className="text-xl font-bold">Pay for Ride</h1>
// //       <p>Amount: ${selectedCarAmount}</p>
// //       <button
// //         onClick={handleCheckout}
// //         className="px-4 py-2 bg-blue-600 text-white rounded"
// //       >
// //         Pay with Stripe
// //       </button>
// //     </div>
// //   );
// // }

"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import CheckoutForm from "@/app/components/Payment/CheckOutForm"; 

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentPage() {
   const clientSecret = process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET!;

const options: StripeElementsOptions = {
  clientSecret,
  appearance: {
    theme: "stripe", // ✅ correct type
  },
};

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Complete Your Payment</h1>

      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
    </div>
  );

}
