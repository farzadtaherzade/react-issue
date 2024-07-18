import styled from "styled-components";

const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: var(--color-blue-700) transparent var(--color-blue-700) transparent;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;
  display:flex;
  justify-content:center;
  align-items:center;
  
  &:before {
    content: "";
    position: absolute;
    width: 3.625rem;
    height: 3.625rem;
    border-radius: 50%;
    border-width: 0.5rem;
    border-style: solid;
    border-color: #0000001c;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader