// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '@/lib/stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  checkoutUrl: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // Verificando metodo da chamada
  if( req.method !== 'POST') {
    return res.status(405)
  }

  //pegando o price Id da requisição post
  const { priceId } = req.body
  if( !priceId ) {
    return res.status(400).json({ checkoutUrl: null })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1.
      },
    ]
  })


  return res.status(200).json({
    checkoutUrl: checkoutSession.url
  })
}
