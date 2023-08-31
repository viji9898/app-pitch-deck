import { Button, Card, Col, Row } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import { Product } from "../landingPage/product";
import { useState } from "react";
import { FormGetStarted } from "../registerForm/formGetStarted";
export const PitchHero = () => {
  const [formVisible, setFormVisible] = useState(false);
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
        maxWidth: "1280px",
        margin: "0px",
        paddingBottom: "15px",
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
              fontFamily: "Montserrat",
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
              fontFamily: "Montserrat",
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
      <Col sm={24} xs={24} md={18}>
        <Card
          style={{
            backgroundColor: "white",
            boxShadow: " 5px 5px 1px #000",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                marginTop: "10px",
                textAlign: "center",
                fontFamily: "Montserrat",
              }}
            >
              <h2>{"Building the Perfect Pitch!"}</h2>
            </div>
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
      <Product setFormVisible={setFormVisible} formVisible={formVisible} />
      {formVisible && <FormGetStarted />}
      <br></br>
      <br></br>
    </Row>
  );
};
