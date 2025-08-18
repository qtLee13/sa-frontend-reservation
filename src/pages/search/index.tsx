import { Row, Col, Card, Button, Input, DatePicker } from "antd"; // เปลี่ยน InputNumber เป็น Input
import { SearchOutlined, CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons"; // import icons จาก Ant Design
import busLogo from "../../assets/bus-logo.png"; // import ไฟล์รูปโลโก้รถบัสจาก assets
// สร้างฟังก์ชันคอมโพเนนต์ SeatBooking
export default function SeatBooking({ headerTitlePosition = "center" }: { headerTitlePosition?: "left" | "center" | "right" }) {
 
  return (
    // container หลัก มีพื้นหลังเทา และ padding รอบหน้าจอ
    <div
      style={{
          padding: 0,
          width: "100vw",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
          maxHeight: "100vh",
        }}
    >
      {/* ส่วนหัว (Header) */}
      <Card
        style={{
          marginBottom: 5,
          backgroundColor: "#eeececff",
          padding: "0.00005rem 2rem",
          width: "100%",
          position: "relative"
        }}
      >
        {/* โลโก้ */}
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

        {/* ปุ่มเข้าสู่ระบบที่มุมบนขวา */}
        <div style={{ position: "absolute", top: 32, right: 24 }}>
          <Button
            type="primary"
            shape="round"
            style={{ backgroundColor: "#1A237E", borderColor: "#1A237E" }}
          >
            สมัครสมาชิก/เข้าสู่ระบบ
          </Button>
        </div>

        {/* ชื่อระบบ */}
        <div
          style={{
            marginBottom: 14,
            textAlign: headerTitlePosition,
            width: "40%"
          }}
        >
          <h2 style={{ color: "#1A237E", margin: 0, fontSize: "2.5rem" }}>SEAT BOOKING</h2>
        </div>
      </Card>

      {/* ส่วนของฟอร์มการจอง */}
      <Card
        style={{
          backgroundColor: "#eeececff",
          padding: "1.5rem",
          maxWidth: "100%",
          border: "none",         // ลบเส้นขอบ
          boxShadow: "none"       // ลบเงา
        }}
      >
        <Row gutter={[24, 48]}>

          {/* ฟิลด์: ต้นทาง */}
          <Col xs={24} md={12} lg={12} xl={12} style={{ marginBottom: "32px" }}>
            <label
              style={{
                color: "#1A237E",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "block",
                textAlign: "left"
              }}
            >
              ต้นทาง
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "56px", fontSize: "1.25rem" }}
              placeholder="กรอกชื่อสถานีต้นทาง"
              prefix={<EnvironmentOutlined />}
            />
          </Col>

          {/* ฟิลด์: ปลายทาง */}
          <Col xs={24} md={12} lg={12} xl={12}>
            <label
              style={{
                color: "#1A237E",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "block",
                textAlign: "left"
              }}
            >
              ปลายทาง
            </label>
            <Input
              size="large"
              style={{ width: "100%", height: "56px", fontSize: "1.25rem" }}
              placeholder="กรอกชื่อสถานีปลายทาง"
              prefix={<EnvironmentOutlined />}
            />
          </Col>

          {/* ฟิลด์: วันออกเดินทาง */}
          <Col xs={24} md={12} lg={12} xl={12}>
            <label
              style={{
                color: "#1A237E",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "block",
                textAlign: "left"
              }}
            >
              วันออกเดินทาง
            </label>
            <DatePicker
              size="large"
              style={{ width: "100%", height: "56px", fontSize: "1.75rem" }}
              suffixIcon={<CalendarOutlined />} // ใช้ icon จาก Ant Design
            />
          </Col>

          {/* ฟิลด์: วันเดินทางกลับ */}
          <Col xs={24} md={12} lg={12} xl={12}>
            <label
              style={{
                color: "#1A237E",
                fontWeight: "bold",
                fontSize: "1.5rem",
                display: "block",
                textAlign: "left"
              }}
            >
              วันเดินทางกลับ
            </label>
            <DatePicker
              size="large"
              style={{ width: "100%", height: "56px", fontSize: "1.75rem" }}
              suffixIcon={<CalendarOutlined />} // ใช้ icon จาก Ant Design
            />
          </Col>

          {/* ปุ่มค้นหา */}
          <Col span={24} style={{ textAlign: "center", marginTop: 32 }}>
            <Button
              type="primary"
              icon={<SearchOutlined />} // icon แว่นขยาย
              size="large"
              shape="round"
              style={{
                padding: "0 40px",
                backgroundColor: "#1A237E",
                borderColor: "#1A237E",
                height: "64px",
                fontSize: "1.75rem"
              }}
            >
              ค้นหา
            </Button>
          </Col>
          {/* Report & Feedback Circular Button */}
          <Button
          type="primary"
          shape="circle"
          size="middle"
          onClick={() => {
          console.log("Report & Feedback button clicked");
        }}
        style={{
          position: "fixed",
          bottom: "5vh", // ใช้ vh เพื่อให้ตำแหน่งของปุ่มเคลื่อนที่ตามการซูม
          right: "3vw", // ใช้ vw เพื่อให้ตำแหน่งของปุ่มเคลื่อนที่ตามการซูม
          backgroundColor: "#1A237E",
          borderRadius: "50%",
          padding: "0", // กำหนด padding เป็น 0 เพื่อให้ปุ่มกลม
          width: "5.5vw", // ใช้ vw เพื่อให้ขนาดของปุ่มเคลื่อนที่ตามการซูม
          height: "5.5vw", // ใช้ vw เพื่อให้ขนาดของปุ่มเคลื่อนที่ตามการซูม
          boxShadow: "0 4px 12px rgba(233, 0, 0, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "1.2vw", // ปรับขนาดตัวอักษรตามขนาดของหน้าจอ
          textAlign: "center", // จัดตัวหนังสือให้อยู่กลาง
          color: "#ffffff",
        }}
      >
      Report
      </Button>
        </Row>
      </Card>
    </div>
  );
}