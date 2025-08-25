import {
  Button,
  Card,
  Collapse,
  Divider,
  Flex,
  Input,
  Space,
  Steps,
  type StepProps,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import SourceDest from "../../component/SourceDest";

const stepItems: StepProps[] = [
  { title: "ค้นหา", status: "finish" },
  { title: "เที่ยวบริการ", status: "finish" },
  { title: "ผู้โดยสาร", status: "finish" },
  { title: "ที่นั้ง", status: "finish" },
  { title: "ชำระเงิน", status: "wait", icon: <LoadingOutlined /> },
];

const Payment: React.FC = () => {
  return (
    <Flex
      vertical
      gap={24}
      style={{
        maxWidth: "840px",
        padding: "1rem",
        marginInline: "auto",
      }}
    >
      <Steps size="small" items={stepItems} />

      <Card
        actions={[
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingInline: 24,
            }}
          >
            ทั้งหมด{" "}
            <span style={{ color: "#1677ff", fontWeight: "bold" }}>฿700</span>
          </div>,
        ]}
      >
        <h3>สรุปราคา</h3>
        <SourceDest />
      </Card>

      <Card>
        <h3> ชื่อผู้โดยสาร </h3>

        <Divider />

        <ol>
          <li>NAME</li>
          <li>NAME</li>
        </ol>

        <Divider />

        <Space.Compact>
          <Input placeholder="กรอกโปรโใชั่นโค้ด" />
          <Button type="primary">ตกลง</Button>
        </Space.Compact>

        <Divider />

        <h3>เลือกวิธีการชำระเงิน</h3>
        <Collapse activeKey={["1"]}>
          <Collapse.Panel header="QR Code" key="1">
            <p>
              โปรดเตรียมแอพธนาคารของคุณให้พร้อม เพื่อแสกน QR Code ในขั้นตอนต่อไป
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="บัตรเคดิต/เดบิต" key="2">
            <p>text 1</p>
          </Collapse.Panel>
          <Collapse.Panel header="เคาน์เตอร์" key="3">
            <p>text 1</p>
          </Collapse.Panel>
        </Collapse>

        <Button type="primary" block style={{ marginTop: 24 }}>
          ดำเนินการชำระเงิน
        </Button>
      </Card>

      <Link to="/4">
        <Button variant="outlined">กลับ</Button>
      </Link>
    </Flex>
  );
};

export default Payment;
