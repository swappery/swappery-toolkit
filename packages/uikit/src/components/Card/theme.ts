import { darkColors, lightColors } from "../../theme/colors";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.backgroundAlt,
  cardHeaderBackground: {
    default: lightColors.gradients.cardHeader,
    blue: lightColors.gradients.blue,
    bubblegum: lightColors.gradients.bubblegum,
    violet: lightColors.gradients.violet,
  },
};

export const dark: CardTheme = {
  background: darkColors.backgroundAlt,
  cardHeaderBackground: {
    default: darkColors.gradients.cardHeader,
    blue: darkColors.gradients.blue,
    bubblegum: lightColors.gradients.bubblegum,
    violet: darkColors.gradients.violet,
  },
};
