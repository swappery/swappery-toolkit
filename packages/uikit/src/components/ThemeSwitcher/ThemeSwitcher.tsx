import React from "react";
import styled from "styled-components";
import { IconButton } from "../Button";
import { SunIcon, MoonIcon } from "../Svg";

export interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const StyledIconButton = styled(IconButton)`
  background: transparent;
  border: none;
`;

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => {
  return (
    <StyledIconButton onClick={() => toggleTheme(!isDark)}>{isDark ? <SunIcon /> : <MoonIcon />}</StyledIconButton>
  );
};
export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
