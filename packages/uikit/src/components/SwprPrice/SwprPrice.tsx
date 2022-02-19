import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  swprPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SwprPrice: React.FC<Props> = ({ swprPriceUsd }) => {
  return swprPriceUsd ? (
    <PriceLink
      href="https://www.the-swappery.com/swap?outputCurrency=0xe6A0943Ced1416d32fEb00d342F52cd8e2A860bA"
      target="_blank"
    >
      <LogoRound width="24px" mr="8px" />
      <Text fontFamily="Gotham" bold>{`$${swprPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(SwprPrice);
