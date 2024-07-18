import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const MiniLoader = styled(BiLoaderAlt)`
  width: 1.4rem;
  height: 1.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default MiniLoader;
