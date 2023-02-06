import { Card } from "../../Components/Card/Card";
import ProgressCellContent from "../../Components/ProgressCellContent/ProgressCellContent";
import Table, { TableCard } from "../../Components/Table/Table";
import AdminPageLayout from "./AdminPageLayout";

export default function AdminPageSales() {
  return (
    <AdminPageLayout>
      <TableCard>
        <Table
          columns={[
            {
              title: "Estado",
              dataIndex: "stateName",
              key: "stateName",
              width: 100,
            },
            {
              title: "Lápis",
              dataIndex: "productPencil",
              key: "productPencil",
              width: 100,
            },
            {
              title: "Caneta",
              dataIndex: "productPen",
              key: "productPen",
              width: 100,
            },
            {
              title: "Kit",
              dataIndex: "productKit",
              key: "productKit",
              width: 100,
            },
            {
              title: "Total",
              dataIndex: "hadProgress",
              key: "hadProgress",
              width: 100,
              render: (hadProgress) => (
                <ProgressCellContent hadProgress={hadProgress} />
              ),
            },
          ]}
          data={[
            {
              stateName: "SP",
              productPencil: "MeuUsuario",
              productPen: "Kit",
              productKit: "30k uni.",
              hadProgress: true,
            },
            {
              stateName: "RJ",
              productPencil: "MeuUsuario",
              productPen: "Kit",
              productKit: "30k uni.",
              hadProgress: false,
            },
            {
              stateName: "PR",
              productPencil: "MeuUsuario",
              productPen: "Kit",
              productKit: "30k uni.",
              hadProgress: true,
            },
          ]}
        />
      </TableCard>
    </AdminPageLayout>
  );
}
