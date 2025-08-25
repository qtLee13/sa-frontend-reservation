import {
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  Form,
  InputNumber,
  Row,
  Steps,
  TreeSelect,
} from "antd";
import { Link } from "react-router-dom";

const Search: React.FC = () => {
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
            status: "process",
          },
          {
            title: "เที่ยวบริการ",
            status: "wait",
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
        <h3>ค้นหาเที่ยวรถ</h3>
        <Form layout="vertical">
          <Row gutter={[24, 0]}>
            <Col xs={24} md={12} lg={12} xl={12}>
              <Form.Item label="ต้นทาง">
                <TreeSelect size="large" showSearch treeData={stations} />
              </Form.Item>
            </Col>

            <Col xs={24} md={12} lg={12} xl={12}>
              <Form.Item label="ปลายทาง">
                <TreeSelect size="large" showSearch treeData={stations} />
              </Form.Item>
            </Col>

            <Col xs={24} md={12} lg={12} xl={12}>
              <Form.Item label="วันออกเดินทาง">
                <DatePicker size="large" style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col xs={24} md={12} lg={12} xl={12}>
              <Form.Item label="ผู้โดยสาร">
                <InputNumber
                  size="large"
                  min={1}
                  max={4}
                  defaultValue={1}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item layout="vertical">
                <Link to="/2">
                  <Button
                    size="large"
                    variant="solid"
                    type="primary"
                    style={{ width: "100%" }}
                  >
                    ค้นหา
                  </Button>
                </Link>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </Flex>
  );
};

const stations = [
  {
    title: "กรุงเทพมหานคร",
    value: "p:กรุงเทพมหานคร",
    children: [
      {
        value: "สถานีขนส่งผู้โดยสารกรุงเทพ จตุจักร (หมอชิต2)",
        title: "สถานีขนส่งผู้โดยสารกรุงเทพ จตุจักร (หมอชิต2)",
      },
      {
        value: "จุดจอดท่าอากาศยานดอนเมือง (อาคาร Service Hall)",
        title: "จุดจอดท่าอากาศยานดอนเมือง (อาคาร Service Hall)",
      },
    ],
  },
  {
    title: "นครราชสีมา",
    value: "p:นครราชสีมา",
    children: [
      {
        value: "สถานีขนส่งผู้โดยสาร จ.นครราชสีมา แห่งที่ 2",
        title: "สถานีขนส่งผู้โดยสาร จ.นครราชสีมา แห่งที่ 2",
      },
    ],
  },
  {
    title: "เชียงใหม่",
    value: "p:เชียงใหม่",
    children: [
      {
        value: "สถานีขนส่งผู้โดยสาร จ.เชียงใหม่ แห่งที่ 2 (อาเขต)",
        title: "สถานีขนส่งผู้โดยสาร จ.เชียงใหม่ แห่งที่ 2 (อาเขต)",
      },
      {
        value: "สถานีขนส่งผู้โดยสาร จ.เชียงใหม่ แห่งที่ 3 (อาเขต)",
        title: "สถานีขนส่งผู้โดยสาร จ.เชียงใหม่ แห่งที่ 3 (อาเขต)",
      },
    ],
  },
];

export default Search;
