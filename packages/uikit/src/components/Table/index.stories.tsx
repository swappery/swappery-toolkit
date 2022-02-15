import React from "react";
import Card from "../Card/Card";
import Table from "./Table";
import { Th, Td } from "./Cell";
import styled from "styled-components";
export default {
  title: "Components/Table",
  component: Table,
  argTypes: {},
};
const Tr = styled.tr`
  height: 50px;
`;
export const Default: React.FC = () => {
  return (
    <div style={{ width: "1000px" }}>
      <Card>
        <Table>
          <tbody>
            <Tr>
              <Td width="9%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
              <Td width="28%" variant="transparent"></Td>
              <Td width="18%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="second">Total tokens</Td>
              <Td variant="second">Vesting</Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="second">Seed Round</Td>
              <Td>2%</Td>
              <Td>20'000'000 SWPR</Td>
              <Td>12 Months</Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="second">Private sale</Td>
              <Td>10%</Td>
              <Td>100'000'000 SWPR</Td>
              <Td>10 Months</Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="second">Public sale</Td>
              <Td>18%</Td>
              <Td>180'000'000 SWPR</Td>
              <Td>8 Months</Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="second">Liquidity</Td>
              <Td>2%</Td>
              <Td>20'000'000 SWPR</Td>
              <Td>Unlocked</Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="second">Advisory</Td>
              <Td>3%</Td>
              <Td>30'000'000 SWPR</Td>
              <Td>24 Months</Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="second">Farming Rewards</Td>
              <Td>65%</Td>
              <Td>650'000'000 SWPR</Td>
              <Td>--</Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
              <Td variant="third">Total</Td>
              <Td variant="third">100%</Td>
              <Td variant="third">1'000'000'000 SWPR</Td>
              <Td variant="transparent"></Td>
              <Td variant="transparent"></Td>
            </Tr>
            <Tr>
              <Td width="9%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
              <Td width="28%" variant="transparent"></Td>
              <Td width="18%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
              <Td width="9%" variant="transparent"></Td>
            </Tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};
