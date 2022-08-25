import styled from 'styled-components'
import device from 'devices'

const HeaderMenuItem = styled.li`
  text-transform: uppercase;

  &::before {
    content: '';
  }

  a {
    color: var(--color-black);
    font-size: 20px;
    transition: color 0.3s;
    border-bottom: 2px solid transparent;
    transition: border 0.3s;

    :hover {
      border-color: var(--color-white);
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
