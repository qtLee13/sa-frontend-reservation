import { Timeline } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./source-dest.css";

const SourceDest = () => {
  return (
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
  );
};

export default SourceDest;
