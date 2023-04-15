import { styled } from "@/styles"
import Image from 'next/image'
import { useState } from "react"

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    description: string,
    price: string,
    defaultPriceId: string
  },
  onClickBuy: ()=>void
}

export const Product = (  { product, onClickBuy }: ProductProps ) => {
  
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const handleClickBuy = () => {
    setIsCreatingCheckoutSession(true)
    onClickBuy()
  }

  return(
    <ProductContainer>

      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={520} height={520}/>
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button onClick={handleClickBuy} disabled={isCreatingCheckoutSession}>
          Comprar agora
        </button>
      
      </ProductDetails>


    </ProductContainer>
  )
}

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  height: 'calc(656px - 0.5rem)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },
  
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: '1.6',
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'all 0.3s',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
      transform: 'scale(0.98)',   
    },

    '&:disabled': {
      opacity: '0.3',
      cursor: 'not-alowed',
    },
  },

})