import React from "react";
import styled from "styled-components";

import { Flex, FlexProps } from "../Box";
import { Link } from "../Link";
import { StyledFooter, StyledSocialLinks } from "./styles";
import { FooterProps } from "./types";

const StyledLink = styled(Link)<FlexProps>`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.yellow300};
  ${({ theme }) => theme.mediaQueries.md} {
    width: 33%;
  }
`;

const StyledFlex = styled(Flex)`
  gap: 4px;
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
  }
`;

const FooterContainer = styled(Flex)`
  align-items: center;
  width: 100%;
  gap: 4px;
  justify-content: center;
  flex-direction: column-reverse;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MenuItem: React.FC<FooterProps> = () => {
  return (
    <StyledFooter
      p={["20px 16px", null, "16px 24px 16px 24px"]}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <FooterContainer>
        <StyledLink href="/">© {new Date().getFullYear()} TheSwappery</StyledLink>
        <StyledFlex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse", null, null, "row"]}
        >
          <StyledLink external href="/documentation">
            Documentation
          </StyledLink>
          <StyledLink external href="/audit">
            Audit
          </StyledLink>
        </StyledFlex>
        <StyledSocialLinks order={[2]} width={["100%", null, null, "33%"]} />
      </FooterContainer>
    </StyledFooter>
  );
};

export default MenuItem;
