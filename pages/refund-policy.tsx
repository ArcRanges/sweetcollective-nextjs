import Container from "components/Container";
import Layout from "containers/Layout";
import React from "react";

export default function RefundPolicy() {
  return (
    <Layout>
      <Container className="my-5" style={{ maxWidth: 600 }}>
        <h1 className="text-4xl">Refund Policy</h1>
        <p>
          At Sweet Collective Co., we want you to be completely satisfied with
          your purchase. If for any reason you are not satisfied with your
          purchase, we offer a refund policy as follows:
        </p>
        <h4 className="text-xl">Return and Refund Eligibility</h4>

        <p>
          To be eligible for a refund, items must be returned within 14 days of
          receipt, in their original condition and packaging, with all tags and
          labels attached. Refunds will be issued for the purchase price of the
          item. Shipping and handling fees are non-refundable.
        </p>

        <h4 className="text-xl">Return and Refund Process</h4>

        <p>
          To return an item for a refund, please contact our customer support
          team to initiate the return process. We will provide you with a return
          shipping label and instructions for sending the item back to us. Once
          the item is received and inspected, we will process the refund and
          issue it to the original payment method.
        </p>

        <h4 className="text-xl">Exceptions</h4>

        <p>The following items are non-refundable:</p>

        <ul className="list-disc">
          <li className="ml-4">Items marked as "final sale"</li>
          <li className="ml-4">Items that have been worn, used, or altered</li>
          <li className="ml-4">Items that have been damaged due to misuse</li>
          <li className="ml-4">
            Items that have been damaged due to exposure to water or other
            elements
          </li>
        </ul>

        <h4 className="text-xl">Refund Timing</h4>

        <p>
          Refunds will be processed within 5-7 business days of receiving the
          returned item. The refund may take an additional 5-7 business days to
          appear on your account, depending on the payment method used.
        </p>

        <h4 className="text-xl">Contact Us</h4>

        <p>
          If you have any questions or concerns about our refund policy, please
          contact us at [customer support email]. We will do our best to assist
          you with any issues you may have.
        </p>
      </Container>
    </Layout>
  );
}
