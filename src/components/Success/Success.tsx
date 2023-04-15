import { styled } from "@/styles"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

interface SuccessProps {
  product: {
    imageUrl: string
    name: string
  },
  customerName: string
}


export const Success = ( {product, customerName }: SuccessProps ) => {

  return(
    <>
      <Head>
        <title>Compra efetuada - Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={120} alt="" />
        </ImageContainer>

        <p>
          Uhuul, <strong>{customerName}</strong>, sua 
          <strong> {product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Volta ao catálogo
        </Link>
        
      </SuccessContainer>
    </>
  )
}

const SuccessContainer = styled('div', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    marginTop: '2rem',
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    color: '$green500',
    fontSize: '$lg',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 130,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },

})