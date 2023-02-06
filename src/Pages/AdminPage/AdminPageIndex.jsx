import styled from "styled-components";
import { Card } from "../../Components/Card/Card";
import ProgressCellContent from "../../Components/ProgressCellContent/ProgressCellContent";
import Table, { TableCard } from "../../Components/Table/Table";
import AdminPageLayout from "./AdminPageLayout";

export default function AdminPageIndex() {
  return (
    <AdminPageLayout>
      <BannerCard>
        <img src="/Images/imgadmpage.png" alt="" width="200" height="200" />
        <div>
          <Title>
            Bem vindo ao <bold>painel do administrador</bold>
          </Title>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.{" "}
          </SubTitle>
        </div>
      </BannerCard>

      <TableCard>
        <Table
          columns={[
            {
              title: "#",
              dataIndex: "position",
              key: "position",
              width: 100,
            },
            {
              title: "Vendedor",
              dataIndex: "name",
              key: "name",
              width: 100,
            },
            {
              title: "Produto",
              dataIndex: "productName",
              key: "productName",
              width: 100,
            },
            {
              title: "Vendas",
              dataIndex: "sales",
              key: "sales",
              width: 100,
            },
            {
              title: "Progresso",
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
              position: 1,
              name: "MeuUsuario",
              productName: "Kit",
              sales: "30k uni.",
              hadProgress: true,
            },
            {
              position: 2,
              name: "OutroUser",
              productName: "Lápis",
              sales: "23k uni.",
              hadProgress: false,
            },
            {
              position: 3,
              name: "TerceiroUser",
              productName: "Lápis",
              sales: "23k uni.",
              hadProgress: true,
            },
            {
              position: 4,
              name: "MaisUmUser",
              productName: "Caneta",
              sales: "10k uni.",
              hadProgress: false,
            },
            {
              position: 5,
              name: "UltimoUsuario",
              productName: "Kit",
              sales: "3k uni.",
              hadProgress: true,
            },
          ]}
        />
      </TableCard>
    </AdminPageLayout>
  );
}

const BannerCard = styled(Card)`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  align-items: center;
  margin-bottom: 2rem;

  img {
    display: none;

    @media (min-width: 45.5em) {
      display: block;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.75rem;
  padding: 0;

  bold {
    color: var(--color-primary);
  }
`;

const SubTitle = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.75;
`;
