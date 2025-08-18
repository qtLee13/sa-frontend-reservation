import { Row, Col, Card, Button, Input } from "antd";
import busLogo from "../../assets/bus-logo.png";

export default function ReportFeedback({ headerTitlePosition = "center" }: { headerTitlePosition?: "left" | "center" | "right" }) {
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
            width: "50%"
          }}
        >
          <h2 style={{ color: "#1A237E", margin: 0, fontSize: "2.5rem" }}>Report & Feedback</h2>
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
              ชื่อ
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "48px", fontSize: "1.25rem" }}
              placeholder="กรอกชื่อ"
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
              เบอร์โทร
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "48px", fontSize: "1.25rem" }}
              placeholder="กรอกเบอร์โทร"
            />
          </Col>

          {/* หมายเลขการจอง */}
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
              หมายเลขการจอง
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "48px", fontSize: "1.25rem" }}
              placeholder="กรอกหมายเลขการจอง"
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

          {/* ประเภทข้อเสนอแนะ */}
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
              ประเภทข้อเสนอแนะ
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "48px", fontSize: "1.25rem" }}
              placeholder="กรอกประเภทข้อเสนอแนะ"
            />
          </Col>

          {/* ป้ายทะเบียนรถ */}
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
              ป้ายทะเบียนรถ
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "48px", fontSize: "1.25rem" }}
              placeholder="กรอกป้ายทะเบียนรถ"
            />
          </Col>

          {/* รายละเอียด */}
          <Col span={24} style={{ marginBottom: "32px" }}>
            <label
              style={{
                color: "#1A237E",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "block",
                textAlign: "left"
              }}
            >
              รายละเอียด
            </label>
            <Input.TextArea
                rows={4}  // ตั้งค่าเริ่มต้นให้แสดง 4 บรรทัด
                style={{ width: "100%", fontSize: "1.25rem" }}
                placeholder="กรอกรายละเอียด"
                autoSize={{ minRows: 4, maxRows: 6 }}  // ขยายได้ในแนวตั้ง (ไม่เกิน 6 บรรทัด)
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
              ส่ง
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
