import { Card, CardGroup } from "react-bootstrap";
import styled from "styled-components";
import { MyCard } from "../../Components/Card/Card";

export default function ProductsCard() {
  return (
    <CardContainer>
      <h1>
        Vendas por <span>produtos</span>
      </h1>
      <EachProductCard>
        <BootstrapCard />
      </EachProductCard>
      <EachProductCard>
        <BootstrapCard />
      </EachProductCard>
      <EachProductCard>
        <BootstrapCard />
      </EachProductCard>
    </CardContainer>
  );
}

const CardContainer = styled(MyCard)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.625rem;
  text-align: center;
  margin: 0 0 2.5rem;

  @media (min-width: 45.5em) {
    flex-direction: row;
    min-height: 25rem;
    font-size: 0.75rem;
    justify-content: space-around;

    h1 {
      border-bottom: 1px solid #f4f5f6;
      flex-basis: 100%;
      height: 3rem;
    }

    span {
      color: var(--color-primary);
    }
  }
`;

const EachProductCard = styled(MyCard)`
  height: 17rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 45.5em) {
    width: 12.5rem;
  }
`;

function BootstrapCard() {
  return (
    <Card style={{ width: "15rem", backgroundColor: "white" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
