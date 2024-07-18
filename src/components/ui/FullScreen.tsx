import styled from "styled-components";

const FullScreen = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top:0;
    left:0;
    background-color: #00000040;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default FullScreen