import styled from "styled-components";
import { background, typography, TypographyProps , variant} from "styled-system";

import {additionalColors} from "../../theme/colors"


const Styles = {
  primary: {
    backgroundColor: additionalColors.pink
  },
  second: {
    backgroundColor: additionalColors.cyan
  },
  third: {
    backgroundColor: additionalColors.green
  },
  transparent: {
    backgroundColor: "transparent"
  }
}

export const Td = styled.td<CellProps>`
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  width: ${props=> props.width};
  background-color: ${additionalColors.pink};
  border: 1px solid;
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

interface CellProps extends TypographyProps{
  variant?: string;
  width?: string;
}