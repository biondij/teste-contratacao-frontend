import RcTable from "rc-table";
import styled from "styled-components";
import { Card } from "../Card/Card";

export const TableCard = styled(Card)`
  flex: 1;
`;

export default function Table({ columns = [], data = [] }) {
  return <StyledRcTable columns={columns} data={data} />;
}

const StyledRcTable = styled(RcTable)`
  text-align: center;
  th,
  td {
    padding: 1rem;
  }
`;
