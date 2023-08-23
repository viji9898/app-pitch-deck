import { Avatar, Card, Col, Row } from "antd";
import { binoculars, question, soultion } from "./pitchAssets";

export const AdditionalInfo = () => {
  return (
    <Row gutter={[18, 18]} style={{ maxWidth: "1050px" }}>
      <Col span={24}>
        <h2>{"Addition Info"}</h2>
      </Col>
      <Card>
        <Row gutter={[18, 18]}>
          <Col xs={24} sm={24} md={8}>
            <Avatar
              size={60}
              src={binoculars}
              style={{ backgroundColor: "#f2b823" }}
            />
            <h3>VISION</h3>
            <p>
              {
                "TechBridge's vision is to democratize tech by offering an inclusive coding bootcamp. Our transformative curriculum equips diverse learners with coding skills and problem-solving expertise. With experienced instructors and industry partnerships, we connect graduates to abundant job opportunities, fostering a more representative tech industry. Join us in shaping a future where technology is accessible to all and dreams become reality, one line of code at a time."
              }
            </p>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Avatar
              size={60}
              src={question}
              style={{ backgroundColor: "#f2b823" }}
            />
            <h3>PROBLEM</h3>
            <p>
              {
                "TechBridge's vision is to democratize tech by offering an inclusive coding bootcamp. Our transformative curriculum equips diverse learners with coding skills and problem-solving expertise. With experienced instructors and industry partnerships, we connect graduates to abundant job opportunities, fostering a more representative tech industry. Join us in shaping a future where technology is accessible to all and dreams become reality, one line of code at a time."
              }
            </p>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Avatar
              size={60}
              src={soultion}
              style={{ backgroundColor: "#f2b823" }}
            />
            <h3>{"SOLUTION"}</h3>
            <p>
              {
                "TechBridge's vision is to democratize tech by offering an inclusive coding bootcamp. Our transformative curriculum equips diverse learners with coding skills and problem-solving expertise. With experienced instructors and industry partnerships, we connect graduates to abundant job opportunities, fostering a more representative tech industry. Join us in shaping a future where technology is accessible to all and dreams become reality, one line of code at a time."
              }
            </p>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};
