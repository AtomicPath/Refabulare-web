import React from "react"
import styled from "styled-components"
import device from "devices"

const IsotypeWhite = props => (
  <Image src="/logo-white.png" alt="Logo Refabulare" {...props} />
)

const Image = styled.img`
  max-width: 62px;
  z-index: 100;

  ${device.tablet} {
    max-width: 90px;
  }
`

export default IsotypeWhite
