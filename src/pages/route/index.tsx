import { Row, Card, Button } from "antd";
import {
  EnvironmentOutlined,
} from "@ant-design/icons";
import busLogo from "../../assets/bus-logo.png";

// เพิ่ม prop สำหรับตำแหน่ง logo และ title
export default function Route({
  headerTitlePosition = "center",
  logoPosition = "left",
  
}: {
  headerTitlePosition?: "left" | "center" | "right",
  logoPosition?: "left" | "center" | "right",
  titlePosition?: "left" | "center" | "right",
}) {
  return (
    <div style={{ backgroundColor: "#ffffffff", maxHeight: "100vh", maxWidth: "100vw" }}>
      <div
        style={{
          padding: 0,
          boxSizing: "border-box",
          width: "100vw",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5vw",
          maxHeight: "100vh",
        }}
      >

        {/* Header */}
        <div style={{ width: "100%" }}>
          <Card
            style={{
              backgroundColor: "#eeececff",
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0.2vw 2.5vw",
              borderRadius: "0.7vw",
              boxShadow: "0 2px 12px rgba(26,35,126,0.07)",
              position: "relative",
            }}
          >
            {/* Logo */}
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
            {/* Title */}
            <div
              style={{
                marginBottom: 14,
                textAlign: headerTitlePosition,
                width: "40%",
                marginLeft: logoPosition === "left" ? 1 : undefined, // เผื่อระยะโลโก้
              }}
            >
              <h2 style={{ color: "#1A237E", margin: 16, fontSize: "2.5rem" }}>SEAT BOOKING</h2>
            </div>
          </Card>
        </div>

        {/* Route Info */}
        <div style={{ alignSelf: "flex-start", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#eeececff",
              padding: "0.7vw 1vw", // ลด padding
              borderRadius: "1vw",
              fontWeight: "bold",
              fontSize: "1.5vw",
              boxShadow: "0 1px 6px rgba(26,35,126,0.05)",
              marginLeft: "1vw",
              marginTop: "0.5vw",
              maxWidth: "400px", // จำกัดความกว้าง
            }}
          >
            <EnvironmentOutlined style={{ fontSize: "2vw", marginRight: "1vw" }} />
            นครราชสีมา ไป กรุงเทพฯ
          </div>
        </div>

        {/* Date Selector */}
        <div style={{ alignSelf: "flex-start", width: "100%" }}>
          <Row gutter={16} align="middle" justify="start">
            <Button
              size="large"
              style={{
                borderRadius: "0.7vw",
                border: "2px solid #1A237E",
                fontWeight: "bold",
                backgroundColor: "white",
                fontSize: "1.5vw",
                height: "3vw",
                minHeight: 32,
                minWidth: "6vw",
                margin: "0 2vw",
              }}
            >
              5-07-2025
            </Button>
          </Row>
        </div>

        {/* Results */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1vw", width: "100%", flex: 1, minHeight: 0, maxWidth: "1200px", margin: "0 auto" }}>
          {[{ time: "09:45", price: 350 }, { time: "18:00", price: 350 }].map(
            (item, idx) => (
              <Card
                key={idx}
                style={{
                  backgroundColor: "white",
                  borderRadius: "0.7vw",
                  padding: 0,
                  width: "100%",
                  maxWidth: "1200px", // จำกัดความกว้างสูงสุด
                  margin: "0 auto",
                  boxShadow: "0 2px 12px rgba(26,35,126,0.07)",
                }}
                bodyStyle={{ padding: "1vw" }}
              >
                <Row align="middle" justify="space-between">
                  <div>
                    <div
                      style={{
                        backgroundColor: "#c4c7f8",
                        borderRadius: "0.7vw",
                        display: "inline-block",
                        padding: "0.7vw 1.2vw",
                        fontWeight: "bold",
                        fontSize: "1.25vw",
                        minWidth: "4vw",
                        textAlign: "center",
                      }}
                    >
                      {item.time}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateRows: "auto auto auto", alignItems: "center" }}>
                    <div style={{ fontSize: "1.25vw", minWidth: "7vw", display: "flex", alignItems: "center" }}>
                      <EnvironmentOutlined style={{ marginRight: "0.5vw", fontSize: "1.25vw" }} />
                      นครราชสีมา
                    </div>
                    <div
                      style={{
                        borderLeft: "2.5px solid black",
                        height: "2.5vw",
                        margin: "1vw 0 0.7vw 0.5vw",
                      }}
                    ></div>
                    <div style={{ fontSize: "1.25vw", minWidth: "7vw", display: "flex", alignItems: "center" }}>
                      <EnvironmentOutlined style={{ marginRight: "0.5vw", fontSize: "1.25vw" }} />
                      กรุงเทพฯ
                    </div>
                    </div>


                  <div>
                    <div
                      style={{
                        backgroundColor: "#c4c7f8",
                        borderRadius: "0.7vw",
                        display: "inline-block",
                        padding: "0.5vw 1.2vw",
                        fontWeight: "bold",
                        fontSize: "1vw",
                        minWidth: "5vw",
                        textAlign: "center",
                      }}
                    >
                      {item.price} บาท
                    </div>
                  </div>

                  <div>
                    <Button
                      style={{
                        backgroundColor: "#1A237E",
                        color: "white",
                        borderRadius: "0.7vw",
                        padding: "0 1.2vw",
                        fontWeight: "bold",
                        fontSize: "1vw",
                        height: "2vw",
                        minHeight: 32,
                        minWidth: "6vw",
                      }}
                      size="large"
                    >
                      เลือก
                    </Button>
                  </div>
                </Row>
              </Card>
            )
          )}
        </div>
      </div>
    </div>

  );
}
     