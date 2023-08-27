import { Button, Card, Col, Divider, Row } from "antd";
import { SelectOutlined } from "@ant-design/icons";
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
      {/* <Col xs={24} sm={24} md={24}>
        <Button
          style={{ backgroundColor: "#181818", color: "#ffff" }}
          href="#apply-section"
          size="large"
          shape="round"
        >
          {"Apply"}
        </Button>
      </Col> */}
      <Divider />
      <Col span={24}>
        <Card
          style={{ backgroundColor: "#f4f1ed" }}
          title={
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <Col span={24}>
                <h2>{"We Help You Build Your Perfect Pitch!"}</h2>
              </Col>
            </div>
          }
        >
          <div style={{ textAlign: "center" }}>
            <Button
              href="https://pitch.techforgood.lk"
              target="_blank"
              rel="nonferrer"
              size="large"
              shape="round"
            >
              <SelectOutlined style={{ verticalAlign: "baseline" }} />
              {"https://pitch.techforgood.lk"}
            </Button>
            <br></br>
            <small>Check out this live pitch</small>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
