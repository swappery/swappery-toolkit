import React from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Text from "../Text/Text";
import { LinkProps } from "./types";
import { additionalColors } from "../../theme/colors";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: none;
  }
`;

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink as="a" bold {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: additionalColors.yellow300,
};

export default Link;
