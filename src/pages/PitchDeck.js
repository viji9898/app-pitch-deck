import { Card, Col, Divider, FloatButton, Row } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

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

export const PitchDeck = () => {
  return (
    <div className="main">
      <FloatButton
        icon={<UserAddOutlined />}
        href="#apply"
        type="default"
        description={"Apply"}
        shape="square"
        style={{
          textDecoration: "none",
          right: 95,
        }}
      />

      <Row
        gutter={[18, 18]}
        style={{
          maxWidth: "1128px",
          justifyContent: "center",
        }}
      >
        <RegisterInterest />
        <PitchHero />
        <Row
          gutter={[18, 18]}
          style={{
            maxWidth: "1128px",
            justifyContent: "center",
          }}
        >
          <Background />
          <Card
            style={{
              position: "relative",
              boxShadow: "5px 5px 5px 5px grey",
              justifyContent: "center",
              top: "-100px",
              maxWidth: "96%",
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

        <div id="apply"></div>

        <FormRegister />

        <Divider />
      </Row>
    </div>
  );
};
