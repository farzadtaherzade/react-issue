import styled, { css } from "styled-components"
import Logo from "./Logo"
import Nav from "./Nav"
import { useSideBar } from "../../context/SideBarContext"

const SideBarStyled = styled.aside<{ $open: boolean }>`
    padding: 2rem 1.2rem;
    background-color: var(--color-grey-0);
    display:none;
    flex-direction:column;


    ${props => props.$open &&
        css`
            display:flex !important;
            position:fixed;
            height:100vh;
            top:0;
            left:0;
            z-index:9;
        `
    }
    
    @media (min-width: 768px) {
        grid-row: 1 / -1;
        display:flex;
        flex-direction: column;
}
`

function Sidebar() {
    const { isOpen } = useSideBar()
    return (
        <SideBarStyled $open={isOpen}>
            <Logo />
            <Nav />
        </SideBarStyled>
    )
}

export default Sidebar