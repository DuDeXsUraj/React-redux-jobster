import React from 'react'
import styled from 'styled-components'


function Loading() {
  return (
    <Wrapper>
       <div className="spinner mt-4"></div>
    </Wrapper>

  )
}

const Wrapper = styled.div`

.loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #ffffff;
    border-top: 4px solid #007bff;
    animation: spinner-rotate 1s linear infinite;
    margin:auto;
  }
  
  @keyframes spinner-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
`

export default Loading