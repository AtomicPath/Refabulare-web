import styled from "styled-components"
import device from "devices"

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  &.opened {
    position: fixed;
  }

  ${device.tablet} {
    &.opened {
      position: relative;
    }
  }
`

export default HeaderWrapper
