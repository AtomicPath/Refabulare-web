import React from "react"
import styled from "styled-components"
import device from "devices"

const OpenMenuButton = ({ onClick, isMenuOpen }) => {
  return (
    <Button onClick={onClick} isMenuOpen={isMenuOpen}>
      {isMenuOpen ? (
        <img src="/icono-close.svg" alt="Menu" />
      ) : (
        <img src="/icono-menu-mobile.svg" alt="Menu" />
      )}
    </Button>
  )
}

const Button = styled.button`
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

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    `
    right: auto;
    left: 30px;
  `}

  ${device.laptop} {
    display: none;
  }
`

export default OpenMenuButton
