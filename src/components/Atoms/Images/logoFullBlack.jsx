import React from "react"
import styled from "styled-components"

const LogoFullBlack = props => {
  return <Image src="/footer-logo.svg" {...props} />
}

const Image = styled.img`
  max-width: 230px;
`

export default LogoFullBlack
