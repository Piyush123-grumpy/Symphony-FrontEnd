import { PayPalButtons } from "@paypal/react-paypal-js"

export const PayPalCheckoutButton = (props) => {
    const { price,success ,id} = props


    const currency="USD"
    return <PayPalButtons
        createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            currency_code: currency,
                            value: price,
                        },
                    },
                ],
            })
        }}
        onApprove={async(data,actions)=>{
            const order=await actions.order.capture();
            console.log("something")
            success(id,order)
        }}
    />
}
