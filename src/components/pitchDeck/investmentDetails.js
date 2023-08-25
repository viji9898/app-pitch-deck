import { Card, Col, Row } from "antd";

export const InvestmentDetails = () => {
  return (
    <Card title={"Investment details"} style={{ maxWidth: "1050px" }}>
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <h3>Raising</h3>
          <p style={{ fontSize: "40px" }}>Rs.5,000,000</p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h3>Scheme:</h3>
          <p>{"SAFE Investment Scheme"}</p>
          <h3>Target Close</h3>
          <p>{"23 Sept 2023"}</p>
        </Col>
      </Row>
    </Card>
  );
};
