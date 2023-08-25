import { Button, Col, Divider, Row } from "antd";

export const PitchHero = () => {
  return (
    <Row
      gutter={[18, 18]}
      style={{
        maxWidth: "1050px",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <Col span={24}>
        <br></br>
        <h1>{"Grow faster"}</h1>
        <h3>{"Ideation. Seeding. Get Funded"}</h3>
      </Col>
      <Col xs={24} sm={24} md={24}>
        <Button
          style={{ backgroundColor: "#181818", color: "#ffff" }}
          href="#apply"
          size="large"
          shape="round"
        >
          {"Apply"}
        </Button>
      </Col>

      <Divider />
    </Row>
  );
};
