import React from 'react';

// ! I will complete this feature after I have resolved all the errors that I had encountered during authentication and styling.

const Payment = () => {
  return (
    <div className="max-w-md mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Page</h1>
      <p className="mb-4">Thank you for your order!</p>
      <p>Since it is a dummy project therefore I am not integrating payment functionality.</p>
    </div>
  );
};

export default Payment;


// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';

// //Create a Stripe promise (stripePromise) using the loadStripe function.
// //  This promise is used to load the Stripe.js script asynchronously.
// const stripePromise = loadStripe('your_stripe_publishable_key');
// const PaymentComponent = () => {
//   return (
//     <div>
//       <h1>Stripe Payment Example</h1>
//       {/* Wrap the CheckoutForm component with the Elements component and provide the Stripe promise */}
//       <Elements stripe={stripePromise}>
//         <CheckoutForm />
//       </Elements>
//     </div>
//   );
// };
// export default PaymentComponent;