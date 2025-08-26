import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Row,
  Space,
  Steps,
  Timeline,
} from "antd";
import { useState } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./layout.css";
import { Link } from "react-router-dom";

const seatLayout = [
  99,
  99,
  ...Array.from({ length: 18 }, (_, i) => i + 1),
  99,
  99,
  19,
  20,
  99,
  99,
  21,
  22,
  ...Array.from({ length: 16 }, (_, i) => i + 23),
];

const Seat: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const occupiedSeats = [5, 6, 9, 10, 12, 23];

  const toggleSeat = (seatNum: number) => {
    if (occupiedSeats.includes(seatNum)) return;

    const newSelection = selectedSeats.includes(seatNum)
      ? selectedSeats.filter((s) => s !== seatNum)
      : [...selectedSeats, seatNum];
    if (newSelection.length <= 2) {
      setSelectedSeats(newSelection);
    }
  };

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
            status: "finish",
          },
          {
            title: "ที่นั้ง",
            status: "process",
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

      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Card>
            <h3>เลือกที่นั้ง (2)</h3>
            <div className="bus">
              <h3 style={{ textAlign: "center" }}>หน้ารถ</h3>
              <div className="seat-layout">
                {seatLayout.map((seatNum, i) =>
                  seatNum == 99 ? (
                    <span key={i}></span>
                  ) : (
                    <Button
                      key={i}
                      onClick={() => toggleSeat(seatNum)}
                      disabled={occupiedSeats.includes(seatNum)}
                      style={{ width: 48, height: 48 }}
                      color={
                        occupiedSeats.includes(seatNum)
                          ? "red"
                          : selectedSeats.includes(seatNum)
                            ? "green"
                            : "blue"
                      }
                      variant={
                        selectedSeats.includes(seatNum) ? "solid" : "filled"
                      }
                    >
                      {seatNum}
                    </Button>
                  ),
                )}
              </div>
            </div>

            <Divider />

            <Space>
              <Button
                style={{ width: 48, height: 48 }}
                variant="filled"
                color="blue"
              >
                ว่าง
              </Button>
              <Button
                disabled
                style={{ width: 48, height: 48 }}
                variant="filled"
                color="blue"
              >
                ไม่ว่าง
              </Button>
              <Button
                style={{ width: 48, height: 48 }}
                variant="solid"
                color="green"
              >
                เลือก
              </Button>
            </Space>

            <Divider />

            <Link to="/4">
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
          </Card>
        </Col>
      </Row>

      <Link to="/2">
        <Button variant="outlined">กลับ</Button>
      </Link>
    </Flex>
  );
};

export default Seat;
