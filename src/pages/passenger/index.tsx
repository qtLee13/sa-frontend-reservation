import { Row, Col, Card, Button, Input } from "antd";
import busLogo from "../../assets/bus-logo.png";

export default function Passenger({ headerTitlePosition = "center" }: { headerTitlePosition?: "left" | "center" | "right" }) {
  return (
    <div
      style={{
        backgroundColor: "#fffcfcff",
        maxHeight: "100vh",
        padding: "0.5rem 2rem",
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto"
      }}
    >
      <Card
        style={{
          marginBottom: 40,
          backgroundColor: "#eeececff",
          padding: "0.00005rem 2rem",
          maxWidth: "100%",
          position: "relative"
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <img
            src={busLogo}
            alt="bus logo"
            style={{
              width: 148,
              height: 148,
              position: "absolute",
              left: "0.25%",
              top: "0.001%"
            }}
          />
        </div>

        <div
          style={{
            marginBottom: 14,
            textAlign: headerTitlePosition,
            width: "45%"
          }}
        >
          <h2 style={{ color: "#1A237E", margin: 0, fontSize: "2.5rem" }}>SEAT BOOKING</h2>
        </div>
      </Card>

      <Card
        style={{
          backgroundColor: "#eeececff",
          padding: "1.5rem",
          width: "100%",
          border: "none",
          boxShadow: "none"
        }}
      >
        <Row gutter={[24, 12]}>
          {/* ชื่อ */}
          <Col xs={24} md={12} lg={12} xl={24} style={{ marginBottom: "16px" }}>
            <label
              style={{
                color: "#1A237E",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "block",
                textAlign: "left"
              }}
            >
              ชื่อ-นามสกุล
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "48px", fontSize: "1.25rem" }}
              placeholder="กรอกชื่อ-นามสกุล"
            />
          </Col>

          {/* เบอร์โทร */}
          <Col xs={24} md={12} lg={12} xl={12} style={{ marginBottom: "16px" }}>
            <label
              style={{
                color: "#1A237E",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "block",
                textAlign: "left"
              }}
            >
              เบอร์โทรศัพท์
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "48px", fontSize: "1.25rem" }}
              placeholder="กรอกเบอร์โทรศัพท์"
            />
          </Col>

          {/* E-mail */}
          <Col xs={24} md={12} lg={12} xl={12} style={{ marginBottom: "16px" }}>
            <label
              style={{
                color: "#1A237E",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "block",
                textAlign: "left"
              }}
            >
              E-mail
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "48px", fontSize: "1.25rem" }}
              placeholder="กรอก E-mail"
            />
          </Col>

          

          {/* ปุ่มส่ง */}
          <Col span={24} style={{ textAlign: "center" }}>
            <Button
              type="primary"
              size="large"
              shape="round"
              style={{
                padding: "0 40px",
                backgroundColor: "#1A237E",
                borderColor: "#1A237E",
                height: "56px",
                fontSize: "1.75rem"
              }}
            >
              ถัดไป
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
