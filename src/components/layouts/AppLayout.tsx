import { Outlet } from 'react-router-dom'
import Sidebar from '../ui/Sidebar'
import styled, { css } from 'styled-components'
import Header from '../ui/Header'
import { useSideBar } from '../../context/SideBarContext'

const Main = styled.div<{ $open: boolean }>`
    width:100%;
    padding: 2rem 4rem;
    overflow-y:auto;

    ${props => props.$open && css`
        grid-column: 1 / -1;`
    }
    
    @media (max-width:768px) {
        grid-column: 1 / -1;
    }
`

const AppStyled = styled.div`
    display: grid;
    grid-template-columns: 18rem 1fr;
    grid-template-rows: auto 1fr ;
    height: 100vh;
    background-color: var(--color-grey-100);
`
const Container = styled.div`
    max-width: 1920px;
    margin:0 auto;
`

function AppLayout() {
    const { isOpen } = useSideBar()
    return (
        <AppStyled>
            <Header />
            <Sidebar />
            <Main $open={isOpen}>
                <Container>
                    <Outlet />
                </Container>
            </Main>
        </AppStyled>
    )
}

export default AppLayout