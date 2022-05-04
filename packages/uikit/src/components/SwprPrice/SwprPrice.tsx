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
      href="https://www.the-swappery.com/swap?outputCurrency=0x6fa23529476a1337eb5da8238b778e7122d79666"
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
