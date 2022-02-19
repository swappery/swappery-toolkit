import React from "react";
import { SwprPrice, SwprPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/SwprPrice",
  component: SwprPrice,
};

const Template: React.FC<SwprPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <SwprPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  swprPriceUsd: 20.0,
};
