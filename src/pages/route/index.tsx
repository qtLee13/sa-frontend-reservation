import { Button, Card, Col, Flex, Row, Steps, Timeline } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Route: React.FC = () => {
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
      <Steps
        size="small"
        items={[
          {
            title: "ค้นหา",
            status: "finish",
          },
          {
            title: "เที่ยวบริการ",
            status: "process",
          },
          {
            title: "ที่นั้ง",
            status: "wait",
          },
          {
            title: "ผู้โดยสาร",
            status: "wait",
          },
          {
            title: "ชำระเงิน",
            status: "wait",
          },
        ]}
      />

      <Card>
        <p style={{ margin: 0 }}> เที่ยวไป </p>
        <p style={{ margin: 0, font: "0.8em" }}>
          {" "}
          กรุงเทพมหานคร: กรุงเทพมหานคร - ขอนแก่น: ขอนแก่น{" "}
        </p>
      </Card>

      {Array.from(Array(3)).map((_, i) => (
        <Card key={i}>
          <Row justify="center">
            <Col span={12}>
              <Timeline
                items={[
                  {
                    children: (
                      <span>
                        <span style={{ color: "#1677ff", fontWeight: "bold" }}>
                          20:00
                        </span>{" "}
                        สถานีขนส่งผู้โดยสารกรุงเทพ จตุจักร (หมอชิต2)
                      </span>
                    ),
                  },
                  {
                    dot: <EnvironmentOutlined />,
                    children: "สถานีขนส่งผู้โดยสาร จ.นครราชสีมา แห่งที่ 2",
                  },
                ]}
              />
            </Col>
            <Col span={12}>
              <Flex vertical align="flex-end">
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  ฿350
                </span>
                <Link to="/3">
                  <Button
                    type="primary"
                    style={{ marginTop: 24, paddingInline: "24px" }}
                  >
                    เลือก
                  </Button>
                </Link>
              </Flex>
            </Col>
          </Row>
        </Card>
      ))}

      <Link to="/">
        <Button variant="outlined">กลับ</Button>
      </Link>
    </Flex>
  );
};

export default Route;
