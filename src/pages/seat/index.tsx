import { Row, Col, Card, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import busLogo from "../../assets/bus-logo.png";
import { useState } from "react";

export default function SeatBooking({ headerTitlePosition = "center" }: { headerTitlePosition?: "left" | "center" | "right" }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]); // เก็บที่นั่งที่เลือก
  const [takenSeats, setTakenSeats] = useState<string[]>(["1D", "6D", "6C","9A","9B"]); // ที่นั่งที่ถูกเลือกไปแล้ว

  const handleSeatClick = (seat: string) => {
    // ถ้าที่นั่งยังไม่ถูกเลือกและยังไม่ได้ถูกเลือกไปแล้ว
    if (!selectedSeats.includes(seat) && !takenSeats.includes(seat)) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      // ถ้าที่นั่งถูกเลือกแล้ว, ให้ยกเลิกการเลือก
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    }
  };

  return (
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
      <Card
        style={{
          marginBottom: 5,
          backgroundColor: "#eeececff",
          padding: "0.00005rem 2rem",
          width: "100%",
          position: "relative",
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
              top: "0.001%",
            }}
          />
        </div>
        <div
          style={{
            marginBottom: 14,
            textAlign: headerTitlePosition,
            width: "40%",
          }}
        >
          <h2 style={{ color: "#1A237E", margin: 0, fontSize: "2.5rem" }}>SEAT BOOKING</h2>
        </div>
      </Card>

      <Card
        style={{
          backgroundColor: "#eeececff",
          padding: "1rem",
          maxWidth: "100%",
          border: "none",
          boxShadow: "none",
        }}
      >
        {/* Seat Selection Section */}
        <Row
          gutter={[24, 48]}  // เพิ่มระยะห่างระหว่างแถว
          style={{ marginBottom: 24, justifyContent: "center", textAlign: "center" }}
        >
          <Col span={24} style={{ marginBottom: "0.5vw", fontSize: "1.3vw" }}>
            <h3 style={{ fontSize: "1.5rem", color: "#1A237E", fontWeight: "bold" }}>
              เลือกที่นั่ง
            </h3>
            {/* Seat Booking Grid */}
            {/* Row 1 */}
            <Row gutter={[16, 16]} style={{ marginBottom: "12px", justifyContent: "center" }}>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("1D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("1D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("1D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("1D")}
                disabled={takenSeats.includes("1D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  1D
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("2D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("2D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("2D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("2D")}
                disabled={takenSeats.includes("2D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  2D
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("3D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("3D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("3D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("3D")}
                disabled={takenSeats.includes("3D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  3D
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("4D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("4D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("4D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("4D")}
                disabled={takenSeats.includes("4D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  4D
                </Button>
              </Col>
                  <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("5D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("5D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("5D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("5D")}
                disabled={takenSeats.includes("5D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  5D
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("6D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("6D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("6D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("6D")}
                disabled={takenSeats.includes("6D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  6D
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("7D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("7D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("7D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("7D")}
                disabled={takenSeats.includes("7D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  7D
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("8D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("8D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("8D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("8D")}
                disabled={takenSeats.includes("8D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  8D
                </Button>
              </Col>
               <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("9D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("9D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("9D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("9D")}
                disabled={takenSeats.includes("9D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  9D
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("10D") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("10D")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("10D") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("10D")}
                disabled={takenSeats.includes("10D")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  10D
                </Button>
              </Col>
            </Row>

            {/* Row 2 */}
            <Row gutter={[16, 16]} style={{ marginBottom: "56px", justifyContent: "center" }}>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("1C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("1C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("1C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("1C")}
                disabled={takenSeats.includes("1C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  1C
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("2C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("2C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("2C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("2C")}
                disabled={takenSeats.includes("2C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  2C
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("3C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("3C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("3C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("3C")}
                disabled={takenSeats.includes("3C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  3C
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("4C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("4C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("4C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("4C")}
                disabled={takenSeats.includes("4C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  4C
                </Button>
              </Col>
                  <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("5C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("5C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("5C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("5C")}
                disabled={takenSeats.includes("5C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  5C
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("6C")? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("6C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("6C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("6C")}
                disabled={takenSeats.includes("6C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  6C
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("7C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("7C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("7C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("7C")}
                disabled={takenSeats.includes("7C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  7C
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("8C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("8C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("8C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("8C")}
                disabled={takenSeats.includes("8C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  8C
                </Button>
              </Col>
               <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("9C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("9C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("9C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("9C")}
                disabled={takenSeats.includes("9C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  9C
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("10C") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("10C")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("10C") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("10C")}
                disabled={takenSeats.includes("10C")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  10C
                </Button>
              </Col>
            </Row>

            {/* Row 3 */}
            <Row gutter={[16, 16]} style={{ marginBottom: "12px", justifyContent: "center" }}>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("2B") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("2B")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("2B") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("2B")}
                disabled={takenSeats.includes("2B")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  2B
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("3B") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("3B")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("3B") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("3B")}
                disabled={takenSeats.includes("3B")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  3B
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("4B") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("4B")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("4B") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("4B")}
                disabled={takenSeats.includes("4B")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  4B
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("5B") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("5B")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("5B") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("5B")}
                disabled={takenSeats.includes("5B")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  5B
                </Button>
              </Col>
                  <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("6B") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("6B")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("6B") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("6B")}
                disabled={takenSeats.includes("6B")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  6B
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("7B") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("7B")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("7B") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("7B")}
                disabled={takenSeats.includes("7B")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  7B
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("8B") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("8B")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("8B") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("8B")}
                disabled={takenSeats.includes("8B")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  8B
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("9B") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("9B")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("9B") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("9B")}
                disabled={takenSeats.includes("9B")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  9B
                </Button>
              </Col>
            </Row>

            {/* Row 4 */}
            <Row gutter={[16, 16]} style={{ marginBottom: "12px", justifyContent: "center" }}>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("2A") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("2A")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("2A") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("2A")}
                disabled={takenSeats.includes("2A")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  2A
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("3A") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("3A")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("3A") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("3A")}
                disabled={takenSeats.includes("3A")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  3A
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("4A") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("4A")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("4A") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("4A")}
                disabled={takenSeats.includes("4A")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  4A
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("5A") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("5A")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("5A") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("5A")}
                disabled={takenSeats.includes("5A")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  5A
                </Button>
              </Col>
                  <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("6A") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("6A")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("6A") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("6A")}
                disabled={takenSeats.includes("6A")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  6A
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("7A") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("7A")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("7A") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("7A")}
                disabled={takenSeats.includes("7A")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  7A
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("8A") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("8A")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("8A") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("8A")}
                disabled={takenSeats.includes("8A")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  8A
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  style={{
                    width: "100%",
                    height: "60px",
                    backgroundColor: selectedSeats.includes("9A") ? "#a5a5adff"//กำลังเลือก
                    : takenSeats.includes("9A")
                    ? "#1A237E" // สีน้ำเงินเมื่อที่นั่งถูกเลือกไปแล้ว
                    : "#ffffffff", // สีขาวสำหรับที่นั่งที่ยังไม่ได้เลือก
                borderColor: "#1A237E",
                color: selectedSeats.includes("9A") ? "#ffffff" : "#000000", // เปลี่ยนสีข้อความเมื่อเลือก
                }}
                onClick={() => handleSeatClick("9A")}
                disabled={takenSeats.includes("9A")} // ปิดการเลือกหากที่นั่งถูกเลือกไปแล้ว
                >
                  9A
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[24, 48]} justify="start" align="middle">
        {/* กล่องข้อความ 1 */}
        <Col  style={{ textAlign: "center" }}>
          <div
            style={{
              borderRadius: "0.3vw",
              border: "1px solid #1A237E",
              fontWeight: "bold",
              backgroundColor: "white",
              color: "black",
              fontSize: "1vw",
              height: "4vw",
              width: "5vw",
              marginRight: "1vw",
              marginLeft: "1vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ว่าง
          </div>
        </Col>

        {/* กล่องข้อความ 2 */}
        <Col style={{ textAlign: "center"}}>
          <div
            style={{
              borderRadius: "0.3vw",
              border: "1px solid #1A237E",
              fontWeight: "bold",
              backgroundColor: "#1A237E",
              color: "white",
              fontSize: "1vw",
              height: "4vw",
              width: "5vw",
              marginRight: "1vw",
              marginLeft: "1vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ไม่ว่าง
          </div>
        </Col>

        {/* กล่องข้อความ 3 */}
        <Col style={{ textAlign: "center" }}>
          <div
            style={{
              borderRadius: "0.3vw",
              border: "1px solid #1A237E",
              fontWeight: "bold",
              backgroundColor: "#a5a5adff",
              color: "black",
              fontSize: "1vw",
              height: "4vw",
              width: "5vw",
              marginRight: "1vw",
              marginLeft: "1vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            เลือกอยู่
          </div>
        </Col>
        </Row>
        {/* Search Button */}
        <Col span={24} style={{ textAlign: "center" }}>
            <Button
              type="primary"
              size="large"
              shape="round"
              style={{
                padding: "0 40px",
                backgroundColor: "#e02828ff",
                borderColor: "#e02828ff",
                height: "56px",
                fontSize: "1.75rem"
              }}
            >
              ยืนยัน
            </Button>
          </Col>
      </Card>
    </div>
  );
}
