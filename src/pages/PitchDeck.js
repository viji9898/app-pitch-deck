import { Card, Divider, Row, Col, Button } from "antd";
import { Background } from "../components/pitchDeck/background";
import { Overview } from "../components/pitchDeck/overview";
import { ThePitch } from "../components/pitchDeck/thePitch";
import { AdditionalInfo } from "../components/pitchDeck/additionalInfo";
import { Founder } from "../components/pitchDeck/founders";
import { Advisors } from "../components/pitchDeck/advisors";
import { InvestmentDetails } from "../components/pitchDeck/investmentDetails";
import { Interested } from "../components/pitchDeck/interested";
import { FooterDetails } from "../components/pitchDeck/footerDetails";

import { RegisterInterest } from "../components/pitchDeck/registerInterest";
import { PitchHero } from "../components/pitchDeck/pitchHero";
import { FormRegister } from "../components/registerForm/formRegister";
import { SelectOutlined } from "@ant-design/icons";

export const PitchDeck = () => {
  return (
    <div className="main">
      <Row
        gutter={[18, 18]}
        style={{
          maxWidth: "1280px",
          justifyContent: "center",
        }}
      >
        <RegisterInterest />
        <PitchHero />

        <div id="apply-section"></div>
        <FormRegister />

        <Divider>
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
        </Divider>

        <Row
          gutter={[18, 18]}
          id="example-pitch-deck"
          style={{
            maxWidth: "1128px",
            justifyContent: "center",
          }}
        >
          <Background />
          <Card
            style={{
              position: "relative",

              justifyContent: "center",
              top: "-100px",
              maxWidth: "100%",
            }}
          >
            <Overview />
            <br></br>
            <Col span={24}>
              <h2>{"Pitch"}</h2>
            </Col>
            <ThePitch />
            <br></br>
            <AdditionalInfo />
            <br></br>
            <Founder />
            <br></br>
            <Advisors />
            <br></br>
            <InvestmentDetails />
            <br></br>
            <Interested />
            <br></br>
            <FooterDetails />
          </Card>
        </Row>
      </Row>
    </div>
  );
};
