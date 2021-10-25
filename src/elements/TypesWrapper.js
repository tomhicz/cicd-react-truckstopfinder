import styled from "styled-components";
import theme from "../themes/theme";

export const TypesWrapper = styled.div`
  display: flex;
  grid-template-columns: 2fr 2fr;
  align-content: center;
  column-gap: 200px;
  row-gap: 15px;
  justify-content: center;

  @media ${theme.breakpoints.mobile} {
    display: grid;
    align-items: center;
    column-gap: 10px;
    row-gap: 15px;
    justify-items: left;
    padding: ${`${theme.spacings.medium} ${theme.spacings.large}`};
    grid-template-columns: 2fr 2fr;
  }
`;
