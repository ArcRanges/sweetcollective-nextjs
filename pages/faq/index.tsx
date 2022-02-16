import Container from "components/Container";
import Layout from "containers/Layout";
import React from "react";

import { Collapse } from "antd";

const { Panel } = Collapse;

export default function index() {
  return (
    <Layout>
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="font-bold">ORDERS</p>
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="This is panel header 1" key="1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolores tempore quaerat, fuga aperiam, ducimus
                  voluptatem nisi quos nihil, odit commodi ratione ex veritatis?
                  Nostrum id explicabo animi quas tempore.
                </p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolores tempore quaerat, fuga aperiam, ducimus
                  voluptatem nisi quos nihil, odit commodi ratione ex veritatis?
                  Nostrum id explicabo animi quas tempore.
                </p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolores tempore quaerat, fuga aperiam, ducimus
                  voluptatem nisi quos nihil, odit commodi ratione ex veritatis?
                  Nostrum id explicabo animi quas tempore.
                </p>
              </Panel>
            </Collapse>
          </div>
          <div>
            <p className="font-bold">SHIPPING</p>
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="This is panel header 1" key="1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolores tempore quaerat, fuga aperiam, ducimus
                  voluptatem nisi quos nihil, odit commodi ratione ex veritatis?
                  Nostrum id explicabo animi quas tempore.
                </p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolores tempore quaerat, fuga aperiam, ducimus
                  voluptatem nisi quos nihil, odit commodi ratione ex veritatis?
                  Nostrum id explicabo animi quas tempore.
                </p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolores tempore quaerat, fuga aperiam, ducimus
                  voluptatem nisi quos nihil, odit commodi ratione ex veritatis?
                  Nostrum id explicabo animi quas tempore.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
