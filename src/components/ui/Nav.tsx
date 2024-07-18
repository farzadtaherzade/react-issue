import { MdDashboard } from "react-icons/md"
import { RiFeedbackLine } from "react-icons/ri"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { AiFillProject } from "react-icons/ai"

const LinkStyled = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        vertical-align: bottom;
        gap: .8rem;
        padding:.7rem 2.3rem;
        font-size: 1rem;

        color: var(--color-grey-900);
        font-weight: 400;
        transition: all .15s;
        border-radius: var(--border-radius-md)
    }
    
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color :var(--color-grey-900);
        background-color: var(--color-grey-200);
    }

    & img, svg{ 
        width: 1.2rem;
        height: 1.2rem;
        color :var(--color-grey-900);
        transition: all .15s;
    }

    & img.active:link,
    svg.active:visited{ 
        width: 1.5rem;
        height: 1.5rem;
        color :var(--color-brand-600);
        transition: all .15s;
    }
`

const NavList = styled.ul`
    padding-top: 1.6rem;
    display:flex;
    flex-direction: column;

    gap: 1.2rem;
`

function Nav() {
    return (
        <nav>
            <NavList>
                <li>
                    <LinkStyled to="/dashboard" >
                        <MdDashboard />
                        <span>
                            Dashboard
                        </span>
                    </LinkStyled>
                </li>
                <li>
                    <LinkStyled to="/" >
                        <AiFillProject />
                        <span>
                            Projects
                        </span>
                    </LinkStyled>
                </li>
                <li>
                    <LinkStyled to="/issues" >
                        <RiFeedbackLine />
                        <span>
                            Issues
                        </span>
                    </LinkStyled>
                </li>
            </NavList>
        </nav>
    )
}

export default Nav