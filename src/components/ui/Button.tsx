import styled, { css } from "styled-components";

const sizes = {
  sm: css`
      font-size: .95rem;
      padding: 0.6rem 1rem;
      font-weight: 400;
      text-align: center;
    `,
  md: css`
      font-size: 1.1rem;
      padding: .7rem 1.5rem;
      font-weight: 400;
    `,
  lg: css`
      font-size: 1.6rem;
      padding: 1.1rem 2.4rem;
      font-weight: 400;
    `,
};

const variants = {
  primary: css`
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);
  
      &:hover {
        background-color: var(--color-brand-700);
      }
    `,
  secondary: css`
      color: var(--color-grey-600);
      background: var(--color-grey-50);
      box-shadow: var(--shadow-lg);
  
      &:hover {
        background-color: var(--color-grey-100);
      }
    `,
  danger: css`
      color: var(--color-red-100);
      background-color: var(--color-red-700);
  
      &:hover {
        background-color: var(--color-red-800);
      }
    `,
  grey: css`
      color: var(--color-grey-100);
      background-color: var(--color-grey-800);
  
      &:hover {
        background-color: var(--color-grey-800);
      }
  `,
  loader: css`
      color: var(--color-grey-50);
      background-color: var(--color-grey-500);
  `,
  icon: css`
      padding: .5rem .6rem;
      color: var(--color-grey-900);
      background-color: transparent;
      &:hover {
        background-color: var(--color-grey-100);
      }

      & svg {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--color-brand-600);
      }
  `
};

type ButtonType = {
  size?: keyof typeof sizes,
  variant?: keyof typeof variants,
}




export const Button = styled.button<ButtonType>`
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: var(--border-radius-lg);
    transition: all .2s;
    display:flex;
    align-items:center;
    justify-content:center;
    vertical-align:bottom;
    gap:5px;
      
    ${(props) => sizes[props.size || "sm"]}
    ${(props) => variants[props.variant || "primary"]}

    &:disabled{
      cursor: not-allowed;
    }
`