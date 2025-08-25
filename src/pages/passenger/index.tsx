import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  Steps,
  type StepProps,
} from "antd";
import { Link } from "react-router-dom";
import SourceDest from "../../component/SourceDest";

const stepItems: StepProps[] = [
  { title: "ค้นหา", status: "finish" },
  { title: "เที่ยวบริการ", status: "finish" },
  { title: "ที่นั้ง", status: "finish" },
  { title: "ผู้โดยสาร", status: "process" },
  { title: "ชำระเงิน", status: "wait" },
];

const Passenger: React.FC = () => {
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

      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Card>
            <h2>ข้อมูลผู้โดยสาร</h2>

            <Divider />

            <Form>
              <h4>ผู้โดยสารคนที่ 1</h4>
              <Form.Item label="ชื่อ">
                <Input />
              </Form.Item>

              <Form.Item label="บัตรประชาชน">
                <Input />
              </Form.Item>
            </Form>

            <Divider />

            <Form>
              <h4>ผู้โดยสารคนที่ 2</h4>
              <Form.Item label="ชื่อ">
                <Input />
              </Form.Item>

              <Form.Item label="บัตรประชาชน">
                <Input />
              </Form.Item>
            </Form>

            <Divider />

            <Link to="/5">
              <Button type="primary" style={{ width: "100%" }}>
                ถัดไป
              </Button>
            </Link>
          </Card>
        </Col>

        <Col xs={24} md={10}>
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
                <span style={{ color: "#1677ff", fontWeight: "bold" }}>
                  ฿700
                </span>
              </div>,
            ]}
          >
            <h3>สรุปราคา</h3>
            <SourceDest />
          </Card>
        </Col>
      </Row>

      <Link to="/3">
        <Button variant="outlined">กลับ</Button>
      </Link>
    </Flex>
  );
};

export default Passenger;
