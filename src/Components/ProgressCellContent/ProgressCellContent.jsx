export default function ProgressCellContent({ hadProgress }) {
  if (!hadProgress) {
    return "desceu";
  }

  return "subiu";
}
