import styled, { css } from "styled-components";
import Logout from "../features/auth/Logout";
import DarkMode from "./DarkMode";
import { useSideBar } from "../../context/SideBarContext";
import { BiMenu } from "react-icons/bi";
import { Button } from "./Button";

const StyledHeader = styled.header<{ $open: boolean }>`
  background-color: var(--color-grey-0);
  padding: .8rem 2.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap:1.2rem;
  
  ${props => !props.$open && css`
    grid-column: 1 / -1;`
  }
  
  @media (max-width:768px) {
    grid-column: 1 / -1;
  }
`;

function Header() {
  const { isOpen, toggleSideBar, width } = useSideBar()
  return <StyledHeader $open={!isOpen}>
    <DarkMode />
    <Logout />

    {width! <= 768 && <Button variant="icon" onClick={toggleSideBar}>
      <BiMenu />
    </Button>}
  </StyledHeader>;
}

export default Header;
