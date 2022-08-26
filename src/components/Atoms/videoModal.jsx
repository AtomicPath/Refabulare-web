import React, { useState } from 'react'
import styled from 'styled-components'

const VideoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 60px 10px;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  iframe {
    max-width: 100%;
    aspect-ratio: 9/19;
  }
`

export default VideoModal
