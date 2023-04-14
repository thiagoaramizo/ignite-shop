import { styled } from "@/styles"
import Link from "next/link"
import { PropsWithRef, ReactNode } from "react"

interface ProductProps {
  children: ReactNode
  className?: string
}

export const Product = ({ children, className }: ProductProps) => {
  return (
    <ProductWrapper href={'#'} className={className}>
      {children}
      <footer>
        <strong className="productName">Camiseta X</strong>
        <span className="productPrice">R$ 79,90</span>
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