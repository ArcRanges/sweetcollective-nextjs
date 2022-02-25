import { Button, Form, Input, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import AppSpin from "components/Spin";
import React, { useState } from "react";
import { delay } from "utils";

export default function ContactForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values: any) => {
    setLoading(true);
    await delay(2000);
    setLoading(false);
    message.success("Your message has been sent!");
  };

  return (
    <div className="mb-5">
      <AppSpin spinning={loading}>
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
          <Button
            htmlType="submit"
            className="!h-14 w-full text-center !py-3 px-4 hover:opacity-50 transition duration-200 ease-linear !bg-black !text-white"
            loading={loading}
          >
            SUBMIT
          </Button>
        </Form>
      </AppSpin>
    </div>
  );
}
