import styled from "styled-components"
import device from "devices"

const MenuItem = styled.li`
  text-transform: uppercase;

  a {
    color: var(--color-black);
    font-weight: bold;
    font-size: 20px;
    transition: color 0.3s;

    :hover {
      color: var(--color-primary);
    }
  }

  ${device.tablet} {
    a {
      color: var(--color-white);
      font-size: 1rem;
    }
  }
`

export default MenuItem
