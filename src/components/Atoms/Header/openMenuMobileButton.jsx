import styled from "styled-components"
import device from "devices"

const OpenMenuMobileButton = styled.button`
  background: none;
  border: none;
  color: var(--color-blanco);
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  z-index: 100;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ menuOpen }) =>
    menuOpen &&
    `
    right: auto;
    left: 30px;
  `}

  ${device.tablet} {
    display: none;
  }
`

export default OpenMenuMobileButton
