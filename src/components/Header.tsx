import { styled } from "@/styles"
import Image from 'next/image'
import logo from '../../public/Logo.png'
import Link from "next/link"


export const Header = () => {
  return (
    <HeaderWrapper>
      <Link href={'../'}><Image className="logo" width={130} height={52} src={logo} alt=""/></Link>
    </HeaderWrapper>
  )
}


const HeaderWrapper = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  '.logo': {
    width: 130,
    height: 52,
  }
})