import styled from "styled-components"
import device from "devices"

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  max-width: 100vw;

  &.opened {
    position: fixed;
  }

  ${device.laptop} {
    overflow-x: hidden;

    &.opened {
      position: relative;
    }
  }
`

export default HeaderWrapper
