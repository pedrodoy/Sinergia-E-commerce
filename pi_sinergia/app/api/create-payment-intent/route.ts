import Stripe from 'stripe'
import Prisma from "@/libs/prismadb"
import { NextResponse } from 'next/server'
import { CartProductType } from '@/app/product/[productId]/ProductDetails'
import { getCurrentUser } from '@/actions/getCurrentUser'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, 
{
    apiVersion: "2024-09-30.acacia",
})

const calculateOrderAmount = (items: CartProductType[]) =>{
    const totalPrice = items.reduce((acc, item)  => {
        const itemTotal = item.price * item.quantity 

        return acc + itemTotal
    }, 0);

    return totalPrice;
}

export async function POST(request: Request){
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return NextResponse.json({error:"Não autorizado"}, {status: 401})
    }

    const body = await request.json()
    const {items, payment_indent_id} = body
}