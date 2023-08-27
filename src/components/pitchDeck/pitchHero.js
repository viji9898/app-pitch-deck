import { Button, Card, Col, Row } from "antd";
import { SelectOutlined } from "@ant-design/icons";
export const PitchHero = () => {
  return (
    <Row
      gutter={[18, 18]}
      style={{
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(225, 225, 219)",
        paddingTop: "25px",
        textAlign: "center",
        backgroundImage: `url(https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/background_hero_pitch_deck-01.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "40vh",
        maxWidth: "1200px",
        margin: "0px auto",
      }}
    >
      <Col span={24}>
        <span>
          <span
            style={{
              background: "black",
              padding: "5px",
              fontSize: "30px",
              color: "white",
            }}
          >
            {"Grow faster"}
          </span>
          <br></br>
          <br></br>
          <span
            style={{
              background: "black",
              padding: "5px",
              fontSize: "40px",
              color: "white",
            }}
          >
            {"Ideation. Seeding. Get Funded"}
          </span>
        </span>
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

      <Card
        style={{ backgroundColor: "white", boxShadow: " 10px 10px 1px #000" }}
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
    </Row>
  );
};
