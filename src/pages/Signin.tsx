import styled from "styled-components";
import SigninForm from "../components/features/auth/SigninForm"

const SignInContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 30rem;
  height: 100vh;
  background-color: var(--color-grey-100);
`;


function Signin() {
    return (
        <SignInContainer>
            <SigninForm />
        </SignInContainer>
    )
}

export default Signin