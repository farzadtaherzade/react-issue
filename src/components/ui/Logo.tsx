import { Link } from "react-router-dom"
import styled from "styled-components"

const LogoStyled = styled(Link)`
    &:link,
    &:visited {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: .5rem;
        padding:0 2rem;

        color: var(--color-grey-900);
        font-weight: bolder;
        transition: all .15s;
        font-size: 1.25rem;
    }

    & img, svg{ 
        width: 2rem;
        height: 2rem;
        transition: all .15s;
    }
`

const Styled = styled.div`
    text-align:center;
    display: flex;
    color: var(--color-grey-200);
`

function Logo() {
    return (
        <Styled>
            <LogoStyled to='/dashboard'>
                <img src="logo.png" alt="logo" />
                <p>React Issues</p>
            </LogoStyled>
        </Styled>
    )
}

export default Logo