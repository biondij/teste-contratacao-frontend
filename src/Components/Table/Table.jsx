import RcTable from "rc-table";
import styled from "styled-components";
import { Card } from "../Card/Card";

export const TableCard = styled(Card)`
  align-items: center;
`;

export default function Table({ columns = [], data = [] }) {
  return <StyledRcTable columns={columns} data={data} />;
}

const StyledRcTable = styled(RcTable)`
  table {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  th,
  td {
    width: 7.5rem;
    padding: 1rem;
    height: 3.125rem;
    text-align: center;
  }

  tbody tr {
    display: flex;
    justify-content: space-around;
    border-radius: 0.625rem;
    background-color: #f4f5f6;
    margin: 1rem;
    text-align: center;

    &:nth-of-type(1) {
      background: #ff764ccc;
    }
  }

  thead tr {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 0 1rem;
  }
`;
