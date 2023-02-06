import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import styled from "styled-components";

export default function ProgressCellContent({ hadProgress }) {
  if (!hadProgress) {
    return <NegativeIcon />;
  }
  return <PositiveIcon />;
}

const PositiveIcon = styled(BsFillArrowUpCircleFill)`
  color: #70cf97;
`;

const NegativeIcon = styled(BsFillArrowDownCircleFill)`
  color: #ff6370;
`;
