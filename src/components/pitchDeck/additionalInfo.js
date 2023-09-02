import { Avatar, Card, Col, Row } from "antd";
import { binoculars, question, soultion } from "./pitchAssets";

export const AdditionalInfo = ({ additionalInfo }) => {
  const { vision, problem, solution } = additionalInfo;
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
            <p>{vision}</p>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Avatar
              size={60}
              src={question}
              style={{ backgroundColor: "#f2b823" }}
            />
            <h3>PROBLEM</h3>
            <p>{problem}</p>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Avatar
              size={60}
              src={soultion}
              style={{ backgroundColor: "#f2b823" }}
            />
            <h3>{"SOLUTION"}</h3>
            <p>{solution}</p>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};
