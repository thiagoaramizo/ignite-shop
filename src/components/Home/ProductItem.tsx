import { styled } from "@/styles"
import Link from "next/link"
import Image from 'next/image'

interface ProductProps {
  className?: string
  product: {
    id: string,
    name: string,
    imageUrl: string,
    description: string,
    price: string
  }
}

export const ProductItem = ({ className, product }: ProductProps) => {
  return (
    <ProductWrapper href={`./product/${product.id}`} className={className} prefetch={false}>
      <Image src={product.imageUrl} alt='' width={520} height={520}/>
      <footer>
        <strong className="productName">{product.name}</strong>
        <span className="productPrice">{product.price}</span>
      </footer>
    </ProductWrapper>
  )
}

const ProductWrapper = styled(Link, {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  //padding: '0.25rem',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },


  '&:hover': {
   footer: {
    transform: 'translateY(0%)',
    opacity: 1,
   } 
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    color: '$white',
    backgroundColor: 'rgba(0,0,0,.6)',
    padding: '2rem',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(110%)',
    opacity: 0,
  },

  '.productName': {
    fontSize: '$lg',
  },

  '.productPrice': {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green500'
  },

})