import styled from "styled-components";
import theme from "../themes/theme";

export const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 15px;
  justify-items: left;

  @media ${theme.breakpoints.mobile} {
    grid-template-columns: 2fr 2fr;
  }

  @media ${theme.breakpoints.mobile} {
    padding: ${`${theme.spacings.medium} ${theme.spacings.large}`};
  }
`;
