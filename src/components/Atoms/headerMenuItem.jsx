import styled from "styled-components"
import device from "devices"

const HeaderMenuItem = styled.li`
  text-transform: uppercase;

  a {
    color: var(--color-black);
    font-size: 20px;
    transition: color 0.3s;

    :hover {
      color: var(--color-primary);
    }
  }

  ${device.laptop} {
    a {
      color: var(--color-white);
      font-size: 1rem;
    }
  }
`

export default HeaderMenuItem
