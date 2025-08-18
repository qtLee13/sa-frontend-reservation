import {  Card, Button, Radio, Input } from "antd";
import {
  EnvironmentOutlined,
} from "@ant-design/icons";
import busLogo from "../../assets/bus-logo.png";
import { useState } from "react";

export default function BookingInformation({
  headerTitlePosition = "center",
  logoPosition = "left",
}: {
  headerTitlePosition?: "left" | "center" | "right",
  logoPosition?: "left" | "center" | "right",
}) {
  const [paymentMethod, setPaymentMethod] = useState("promptpay");

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
          gap: "1.4vw",
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
            <div
              style={{
                marginBottom: 14,
                textAlign: headerTitlePosition,
                width: "40%",
                marginLeft: logoPosition === "left" ? 1 : undefined,
              }}
            >
              <h2 style={{ color: "#1A237E", margin: 16, fontSize: "2.5rem" }}>SEAT BOOKING</h2>
            </div>
          </Card>
        </div>

        {/* Route Information */}
        <Card
          style={{
            backgroundColor: "#eeececff",
            borderRadius: "1vw",
            width: "100%",
            fontWeight: "bold",
            fontSize: "1.2vw"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "1.45vw", marginBottom: "0.2vw" ,marginRight: "6vw", color: "#1A237E"}}>5 กรกฎาคม 2568</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <EnvironmentOutlined style={{ marginRight: "0.7vw", fontSize: "1.5vw", color: "#1A237E" }} />
                <span style={{ fontSize: "1.45vw", color: "#1A237E" }}>
                    นครราชสีมา - กรุงเทพฯ
                </span>
                </div>
            </div>
            {/* เวลา */}
            <div
            style={{
                position: "relative",
                left: "20vw", // ตำแหน่งอิสระ
                top: "0vw",
                backgroundColor: "#1A237E",
                color: "white",
                borderRadius: "0.5vw",// ปรับขนาดให้เหมาะสม
                padding: "0.4vw 1vw",
                fontWeight: "bold",
                fontSize: "1.2vw",
                width: "fit-content",
            }}
            >
            09:45
            </div>

            {/* ที่นั่ง */}
            <div
            style={{
                position: "relative",
                right: "1vw",
                top: "0vw", // เลื่อนลง
                backgroundColor: "#1A237E",
                color: "white",
                borderRadius: "0.5vw",
                padding: "0.4vw 1vw",
                fontWeight: "bold",
                fontSize: "1.2vw",
                width: "fit-content",
            }}
            >
            3A,3B
            </div>
          </div>
        </Card>

        {/* Payment Method */}
        <Card
          style={{
            backgroundColor: "#eeececff",
            borderRadius: "1vw",
            fontWeight: "bold",
            fontSize: "1.1vw"
          }}
        >
          <div style={{ marginBottom: "0.9vw",marginRight: "65vw", fontSize: "1.3vw", color: "#1A237E" }}>
            วิธีการชำระเงิน
          </div>
          <Radio.Group
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ display: "flex", flexDirection: "column", gap: "0.5vw" }}
          >
            <Radio value="promptpay">พร้อมเพย์</Radio>
            <Radio value="credit">บัตรเครดิต</Radio>
            <Radio value="onlinebank">ธนาคารออนไลน์</Radio>
          </Radio.Group>
        </Card>

        {/* Promotion Code */}
        <div>
          <div style={{ marginBottom: "0.4vw", marginRight: "60vw", fontSize: "1.3vw", color: "#1A237E", fontWeight: "bold" }}>
            กรอกโค้ดส่วนลดและโปรโมชั่น
          </div>
          <Input
            placeholder="ระบุโค้ดที่นี่"
            style={{
              width: "100%",
              padding: "0.5vw",
              borderRadius: "0.7vw",
              fontSize: "1.1vw"
            }}
          />
        </div>

        {/* Confirm Button */}
        <div style={{ marginTop: "1vw", textAlign: "center" }}>
          <Button
            type="primary"
            style={{
              backgroundColor: "#1A237E",
              color: "white",
              borderRadius: "2vw",
              padding: "1vw 3vw",
              height: "3vw",
              fontSize: "1.5vw",
              fontWeight: "bold"
            }}
          >
            ชำระเงิน
          </Button>
        </div>
      </div>
    </div>
  );
}
