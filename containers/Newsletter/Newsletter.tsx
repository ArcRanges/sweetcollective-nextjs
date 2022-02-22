import { Form, Input } from "antd";
import Button from "components/Button";
import Container from "components/Container";
import React from "react";

export default function Newsletter() {
  return (
    <div className="px-5 md:px-10 py-5 bg-mountain-meadow-600">
      <Container>
        <h3 className="text-2xl text-white">Subscribe to our Newsletter</h3>
        <Form className="w-full">
          <div className="flex flex-row">
            <Form.Item name="email" className="w-full">
              <Input
                className="p-3 h-14 bg-gray-200 mt-2"
                placeholder="johndoe@example.com"
              />
            </Form.Item>
            <Form.Item>
              <Button>SUBSCRIBE</Button>
            </Form.Item>
          </div>
        </Form>
      </Container>
    </div>
  );
}
