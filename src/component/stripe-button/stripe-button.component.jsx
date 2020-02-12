import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_DzR9tYcuI0o1c24M9mu0ySJ000WDqbOwkS";


    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }

    return(
        <StripeCheckout
            label ='Pay Now'
            name = 'Clothing Store'
            billingAddress
            shippingAddress
            image ='https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;
