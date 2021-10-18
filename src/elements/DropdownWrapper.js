import styled from "styled-components";
import theme from "../themes/theme";

export const DropdownWrapper = styled.div`
  & select {
    width: 100%;
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid var(--select-border);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  }

  display: grid;
  grid-template-columns: 25% 25% 25%;
  align-items: center;
  column-gap: 25px;
  margin: 25px;
  padding: 5px 50px 5px 90px;
  font-size: 50px;

  @media ${theme.breakpoints.mobile} {
    padding: ${`${theme.spacings.medium} ${theme.spacings.large}`};
    display: grid;
    grid-template-columns: 25%;
    align-items: center;
    padding: 5px 50px 5px 50px;
    font-size: 50px;
  }
`;
