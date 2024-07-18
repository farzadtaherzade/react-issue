import styled from "styled-components";

const Select = styled.select<{ $type?: string }>`
text-align:center;
  width:fit-content;
  font-size: 1rem;
  padding: 0.5rem .6rem;
  border: 1px solid
    ${(props) =>
    props.$type === "white"
      ? "var(--color-grey-100)"
      : "var(--color-grey-300)"};

  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  color:var(--color-grey-900);
`;

export default Select