import styled from "styled-components"
import { device } from "devices"

const Logo = styled.img`
  max-width: 100px;
  z-index: 100;
  display: none;

  ${device.tablet} {
    display: block;
  }
`

export default Logo
