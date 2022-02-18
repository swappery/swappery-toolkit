import styled from "styled-components";
import { typography, TypographyProps, variant } from "styled-system";

import { additionalColors } from "../../theme/colors";

const Styles = {
  primary: {
    backgroundColor: additionalColors.pink,
  },
  second: {
    backgroundColor: additionalColors.cyan,
  },
  third: {
    backgroundColor: additionalColors.green,
  },
};

export const Td = styled.td<CellProps>`
  color: #000;
  padding: 20px;
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  width: ${(props) => props.width} !important;
  background-color: ${({ theme }) => theme.colors.background};
  border: 0.5px solid ${({ theme }) => theme.colors.border};
  ${variant({
    variants: Styles,
  })}
  ${typography}
`;
export const Th = styled(Td).attrs({ as: "th" })`
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
`;

interface CellProps extends TypographyProps {
  variant?: string;
  width?: string;
}
