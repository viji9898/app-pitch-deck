import { Card, Col, Row } from "antd";

export const InvestmentDetails = () => {
  return (
    <Card title={"Investment details"} style={{ maxWidth: "1050px" }}>
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <h3>Raising</h3>
          <p style={{ fontSize: "40px" }}>Rs.500,000</p>
          <h3>Valuation</h3>
          <p style={{ fontSize: "40px" }}>Rs. 15,000,000</p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h3>Scheme</h3>
          <p>{"-"}</p>
          <h3>Target Close</h3>
          <p>{"23 Sept 2023"}</p>
          <h3>How</h3>
          <p>{"FastSeed & Funding Round"}</p>
        </Col>
      </Row>
    </Card>
  );
};
