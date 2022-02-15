import React from "react";
import Card from "../Card/Card";
import Table from "./Table";
import { Th, Td } from "./Cell";
export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div style={{ width: "640px" }}>
      <Card>
        <Table>
          <thead>
            <tr>
              <Th width="15%" variant="transparent"></Th>
              <Th width="15%" variant="transparent"></Th>
              <Th width="50%" variant="second">Total tokens</Th>
              <Th width="30%" variant="second">Vesting</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td variant="second">Seed Round</Td>
              <Td>2%</Td>
              <Td>20'000'000 SWPR</Td>
              <Td>12 Months</Td>
            </tr>
            <tr>
              <Td variant="second">Private sale</Td>
              <Td>10%</Td>
              <Td>100'000'000 SWPR</Td>
              <Td>10 Months</Td>
            </tr>
            <tr>
              <Td variant="second">Public sale</Td>
              <Td>18%</Td>
              <Td>180'000'000 SWPR</Td>
              <Td>8 Months</Td>
            </tr>
            <tr>
              <Td variant="second">Liquidity</Td>
              <Td>2%</Td>
              <Td>20'000'000 SWPR</Td>
              <Td>Unlocked</Td>
            </tr>
            <tr>
              <Td variant="second">Advisory</Td>
              <Td>3%</Td>
              <Td>30'000'000 SWPR</Td>
              <Td>24 Months</Td>
            </tr>
            <tr>
              <Td variant="second">Farming Rewards</Td>
              <Td>65%</Td>
              <Td>650'000'000 SWPR</Td>
              <Td>--</Td>
            </tr>
            <tr>
              <Td variant="third">Total</Td>
              <Td variant="third">100%</Td>
              <Td variant="third">1'000'000'000 SWPR</Td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};
