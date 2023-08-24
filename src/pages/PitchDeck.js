import { Button, Card, Col, Divider, Row } from "antd";
import { SelectOutlined } from "@ant-design/icons";

import { Background } from "../components/pitchDeck/background";
import { Overview } from "../components/pitchDeck/overview";
import { ThePitch } from "../components/pitchDeck/thePitch";
import { AdditionalInfo } from "../components/pitchDeck/additionalInfo";
import { Founder } from "../components/pitchDeck/founders";
import { Team } from "../components/pitchDeck/team";
import { InvestmentDetails } from "../components/pitchDeck/investmentDetails";
import { Interested } from "../components/pitchDeck/interested";
import { FooterDetails } from "../components/pitchDeck/footerDetails";
import { RegisterInterest } from "../components/pitchDeck/registerInterest";
import { PitchHero } from "../components/pitchDeck/pitchHero";
import { PitchExamples } from "../components/pitchDeck/pitchExamples";
import { FormRegister } from "../components/registerForm/formRegister";

export const PitchDeck = () => {
  return (
    <div className="main">
      <Row
        gutter={[18, 18]}
        style={{
          maxWidth: "1128px",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <RegisterInterest />
        <PitchHero />
        <Row
          gutter={[18, 18]}
          style={{
            maxWidth: "1128px",
            justifyContent: "center",
            margin: "10px",
          }}
        >
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
                  href="https://pp.lk/tfg"
                  target="_blank"
                  rel="nonferrer"
                  size="large"
                  shape="round"
                >
                  <SelectOutlined style={{ verticalAlign: "baseline" }} />
                  {"https://pp.lk/tfg"}
                </Button>
              </div>
            </Card>
          </Col>
          <Background />
          <Card
            style={{
              position: "relative",
              boxShadow: "5px 5px 5px 5px grey",
              justifyContent: "center",
              top: "-125px",
              maxWidth: "90%",
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
            <Team />
            <br></br>
            <InvestmentDetails />
            <br></br>
            <Interested />
            <br></br>
            <FooterDetails />
          </Card>
        </Row>
        <Divider />
        <PitchExamples />
        <Divider />
        <FormRegister />
        <Divider />
      </Row>
    </div>
  );
};
