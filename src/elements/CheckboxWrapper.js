import styled from "styled-components";
import theme from "../themes/theme";

export const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  align-items: top;
  column-gap: 10px;
  row-gap: 15px;
  justify-items: left;
  text-align: left;

  input[type="checkbox"] {
    margin-left: -1.125rem;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    position: relative;
    bottom: 1px;
  }

  label {
    margin-left: 1.125rem;
  }

  @media ${theme.breakpoints.mobile} {
    padding: ${`${theme.spacings.medium} ${theme.spacings.large}`};
    grid-template-columns: 2fr 2fr;
  }
`;
