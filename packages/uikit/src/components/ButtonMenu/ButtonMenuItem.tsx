import React from "react";
import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import Button from "../Button/Button";
import { BaseButtonProps, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";
import { additionalColors } from "../../theme/colors";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}
const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
  border: none;
  font-size: 14px;
  padding: 0 15px;
`;
const MenuButton = styled(Button)<BaseButtonProps>`
  padding: 15px 15px;
  border: 1px solid;
  border-radius: 100%;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${additionalColors.cyan};
  color: black;
  font-size: 14px;
`;
const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <MenuButton as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
