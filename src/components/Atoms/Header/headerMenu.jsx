import styled from "styled-components"
import device from "devices"

const HeaderMenu = styled.ul`
  background-color: var(--color-white);
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  transition: transform 0.3s;
  z-index: 99;

  &.closed {
    transform: translateX(100%);
  }

  ${device.tablet} {
    background-color: transparent;
    flex-direction: row;
    position: relative;
    transform: translateX(0);

    &.closed {
      transform: translateX(0);
    }
  }

  ${device.laptop} {
    gap: calc(30px + 1.5rem);
  }
`

export default HeaderMenu
