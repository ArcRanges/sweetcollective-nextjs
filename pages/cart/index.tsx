import { Col, Row } from "antd";
import Container from "components/Container";
import PageHeader from "components/PageHeader";
import Small from "components/Small";
import Layout from "containers/Layout";
import Link from "next/link";
import React from "react";
import CartItems from "./components/CartItems";
import OrderSummary from "./components/OrderSummary";

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
