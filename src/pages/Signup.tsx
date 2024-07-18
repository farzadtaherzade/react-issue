import styled from "styled-components";
import SignupForm from "../components/features/auth/SignupForm";

const SignUpContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 30rem;
  height: 100vh;
  background-color: var(--color-grey-100);
`;


function Signin() {
    return (
        <SignUpContainer>
            <SignupForm />
        </SignUpContainer>
    )
}

export default Signin