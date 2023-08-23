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
          size="large"
          shape="round"
        >
          Get In Touch With Us
        </Button>
      </Col>
      <Col span={24}>
        <h2>{"We Help You Build Your Perfect Pitch!"}</h2>
      </Col>
      <Divider />
    </Row>
  );
};
