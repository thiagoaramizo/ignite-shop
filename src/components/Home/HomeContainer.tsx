import { styled } from "@/styles";

export const HomeContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'calc((100vw - 1180px) / 2)',
  marginRight: 0,
  minHeight: 656,
  overflow: 'scroll',
})