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
        <FormRegister />
        <Divider />

        {/* <Col span={24}>
          <Card
            style={{
              boxShadow: "5px 5px 5px 5px grey",
              backgroundColor: "#f4f1ed",
            }}
            title={
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <h2>Partners in the Startup Eco-System</h2>
              </div>
            }
          >
            <Row gutter={[18, 18]}>
              <Col xs={12} sm={12} md={8}>
                <Card>
                  <img
                    alt="icta logo"
                    src="https://www.icta.lk/icta-assets/themes/icta/images/logo.jpg"
                  ></img>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={8}>
                <Card style={{ height: "100%" }}>
                  <img
                    style={{ width: "100%" }}
                    alt="hatch logo"
                    src="https://hatch.lk/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-22-at-2.11.33-AM.jpeg"
                  ></img>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={8}>
                <Card>
                  <img
                    alt="johnkeellsx logo"
                    style={{ width: "100%" }}
                    src="https://johnkeellsx-2021-do.3cs.website/wp-content/uploads/2021/11/JohnkeelsX.png"
                  ></img>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={8}>
                <Card>
                  <img
                    alt="innovation Foundry"
                    style={{ width: "100%" }}
                    src="https://if.dialog.lk/wp-content/uploads/2021/08/innovation-foundary-logo-New-normal.png"
                  ></img>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col> */}

        <Card style={{ boxShadow: "5px 5px 5px 5px grey" }}>
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
                    <h2>CHECKOUT THE PITCH BELOW</h2>
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
            <div
              style={{
                position: "relative",
                top: "-125px",
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
            </div>
          </Row>
        </Card>
        <Divider />
        <PitchExamples />
        <Divider />
      </Row>
    </div>
  );
};
