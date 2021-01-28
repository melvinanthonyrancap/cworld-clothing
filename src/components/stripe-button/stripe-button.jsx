import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IER9XGpJs2v436PdzKkCZi0K1AAfeB5KsXjd7xNTkjus8z7EPSzotTP2WeX0NyympVjkCJI5W1wKqMy6NfKZLGw005uffBQZZ'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful!!');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Create World Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://i.imgur.com/4XWArEo.jpg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )

}



export default StripeCheckoutButton