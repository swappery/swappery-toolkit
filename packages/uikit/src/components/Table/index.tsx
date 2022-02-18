import React from "react";
import styled from "styled-components";
import Table from "./Table";
import { Td } from "./Cell";

export { default as Table } from "./Table";
export * from "./Cell";
export * from "./hooks";
export * from "./types";
export * from "./utils";

const Tr = styled.tr`
  height: 50px;
`;

export const SwapperyTable: React.FC = () => {
  return (
    <Table>
      <tbody>
        <Tr>
          <Td width="9%" />
          <Td width="9%" />
          <Td width="9%" />
          <Td width="9%" />
          <Td width="28%" />
          <Td width="18%" />
          <Td width="9%" />
          <Td width="9%" />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td variant="second">Total tokens</Td>
          <Td variant="second">Vesting</Td>
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td variant="second">Seed Round</Td>
          <Td variant="primary">2%</Td>
          <Td variant="primary">20 `000 `000 SWPR</Td>
          <Td variant="primary">12 Months</Td>
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td variant="second">Private sale</Td>
          <Td variant="primary">10%</Td>
          <Td variant="primary">100 `000 `000 SWPR</Td>
          <Td variant="primary">10 Months</Td>
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td variant="second">Public sale</Td>
          <Td variant="primary">18%</Td>
          <Td variant="primary">180 `000 `000 SWPR</Td>
          <Td variant="primary">8 Months</Td>
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td variant="second">Liquidity</Td>
          <Td variant="primary">2%</Td>
          <Td variant="primary">20 `000 `000 SWPR</Td>
          <Td variant="primary">Unlocked</Td>
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td variant="second">Advisory</Td>
          <Td variant="primary">3%</Td>
          <Td variant="primary">30 `000 `000 SWPR</Td>
          <Td variant="primary">24 Months</Td>
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td variant="second">Farming Rewards</Td>
          <Td variant="primary">65%</Td>
          <Td variant="primary">650 `000 `000 SWPR</Td>
          <Td variant="primary">--</Td>
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td variant="third">Total</Td>
          <Td variant="third">100%</Td>
          <Td variant="third">1 `000 `000 `000 SWPR</Td>
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td width="9%" />
          <Td width="9%" />
          <Td width="9%" />
          <Td width="9%" />
          <Td width="28%" />
          <Td width="18%" />
          <Td width="9%" />
          <Td width="9%" />
        </Tr>
      </tbody>
    </Table>
  );
};
