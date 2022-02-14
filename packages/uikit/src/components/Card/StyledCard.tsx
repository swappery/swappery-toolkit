import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { Box } from "../Box";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

export const StyledCard = styled.div<StyledCardProps>`
  background: ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  position: relative;

  padding: 1px 1px 1px 1px;

  ${space}
`;

export const StyledCardInner = styled(Box)<{ background?: string; hasCustomBorder: boolean }>`
  width: 100%;
  height: 100%;
  overflow: ${({ hasCustomBorder }) => (hasCustomBorder ? "initial" : "inherit")};
  background: ${({ theme, background }) => background ?? theme.card.background};
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};
