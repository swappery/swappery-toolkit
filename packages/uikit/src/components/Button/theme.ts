import { scales, variants } from "./types";
import { additionalColors } from "../../theme/colors";
import styled, { DefaultTheme } from "styled-components";
export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: additionalColors.green,
    color: "black",
    fontFamily: "Orator Std",
    border: "1px solid",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    boxShadow: "none",
    borderRadius: "25px",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "1px solid black",
    boxShadow: "none",
    fontFamily: "Orator Std",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    color: "black",
    borderRadius: "25px",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: additionalColors.cyan,
    boxShadow: "none",
    color: "black",
    fontFamily: "Orator Std",
    fontSize: "18px",
    fontWeight: "500",
    fontStyle: "normal",
    borderRadius: "25px",
  },
  [variants.SUBTLE]: {
    backgroundColor: additionalColors.cyan,
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
};
