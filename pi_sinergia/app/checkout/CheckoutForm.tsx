'use client'

import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import { AddressElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../components/Button";

interface CheckoutFormProps{
    clientSecret: string,
    handleSetPaymentSucess: (value: boolean) => void
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({clientSecret, handleSetPaymentSucess}) => {
    const {cartTotalAmount, handleClearCart, handleSetPaymentIntent} = useCart()
    const stripe = useStripe()
    const elements = useElements()
    const [isLoading, setIsLoading] = useState(false)
    const formatedPrice = formatPrice(cartTotalAmount)

    useEffect(() => {
        if(!stripe){
            return
        }
        if(!clientSecret){
            return
        }
        handleSetPaymentSucess(false)
    },[stripe])

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()

        if(!stripe || !elements){
            return
    }
    setIsLoading(true)

    stripe.confirmPayment({
        elements, redirect: 'if_required'
    }).then((result) => {
        if(!result.error){
            toast.success("Pagamento realizado com sucesso")

            handleClearCart()
            handleSetPaymentSucess(true)
            handleSetPaymentIntent(null)
        }
        setIsLoading(false)

        })
    }
    return ( <form onSubmit={handleSubmit} id="payment-form">
        <div className="mb-6">
            <h1 className=" flex font-bold text-2xl justify-center ">Insira suas informações</h1>
        </div>
        <h2 className="font-semibold mb-2">Endereço de entrega</h2>
        <AddressElement options={{mode:'shipping'}}/>
        <h2 className="font-semibold mt-4 mb-2">Método de Pagamento</h2>
        <PaymentElement id="payment-element" options={{layout:'tabs'}}/>
        <div className="py-4 text-center text-slate-700 text-2xl font-bold">Total: {formatedPrice}</div>
        <Button label={isLoading ? 'Processando...' : "Fechar pedido"} disabled={isLoading || !stripe || !elements} onClick={() =>{} } custom="w-full"/>
    </form> );
}
 
export default CheckoutForm;