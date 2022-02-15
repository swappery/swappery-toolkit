import React from "react";
import IconComponent from "../Svg/IconComponent";
import { Toggle } from "../Toggle";
import {IconButton} from "../Button";
import styled from "styled-components";
import {SunIcon,MoonIcon} from "../Svg";
export interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

// const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
//   <Toggle
//     checked={isDark}
//     defaultColor="textDisabled"
//     checkedColor="textDisabled"
//     onChange={() => toggleTheme(!isDark)}
//     scale="md"
//     startIcon={(isActive = false) => <IconComponent iconName="Sun" color={isActive ? "warning" : "backgroundAlt"} />}
//     endIcon={(isActive = false) => <IconComponent iconName="Moon" color={isActive ? "secondary" : "backgroundAlt"} />}
    
//   />
// );

const StyledIconButton = styled(IconButton)`
  background: transparent;
  border: none;
`

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => {
return  <StyledIconButton onClick={toggleTheme(!isDark)}>
  {isDark?<SunIcon/>:<MoonIcon/>}
</StyledIconButton>
};
export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
