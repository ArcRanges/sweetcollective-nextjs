import { Row } from "antd";
import CartItems from "components/CartItems";
import Container from "components/Container";
import OrderSummary from "components/OrderSummary";
import PageHeader from "components/PageHeader";
import Layout from "containers/Layout";

export default function index() {
  return (
    <Layout>
      <Container>
        <PageHeader title="Your Shopping Cart" />

        <Row className="mb-3" gutter={16}>
          <CartItems />
          <OrderSummary />
        </Row>
      </Container>
    </Layout>
  );
}
