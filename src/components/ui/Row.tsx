import styled, { css } from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
export enum RowEnum {
    horizontal,
    vertical,
}

const Row = styled.div<{ type: RowEnum }>`
    display:flex;
    
    ${props => props.type === RowEnum.horizontal &&
        css`
        width:100%;
        justify-content: space-between;
        align-items:center;
    `}

    ${props => props.type === RowEnum.vertical &&
        css`
            flex-direction: column;
            gap:.6rem;
            align-items: left;
            `
    }
`

Row.defaultProps = {
    type: RowEnum.horizontal,
};

export default Row;