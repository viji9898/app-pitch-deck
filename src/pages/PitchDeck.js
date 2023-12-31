import { Divider, Row, Button } from "antd";

import { RegisterInterest } from "../components/pitchDeck/registerInterest";
import { PitchHero } from "../components/pitchDeck/pitchHero";

import { SelectOutlined } from "@ant-design/icons";

import { PitchExamples } from "../components/pitchDeck/pitchExamples";
import { Footer } from "../components/navigation/footer";
import { DynamicMetaTags } from "../utils/dynamicMetaTags";

export const PitchDeck = () => {
  const metaTags = {
    ogTitle: "Create your perfect pitch",
    ogImage:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/og-image-pitch-deck.png",
    ogUrl: "https://pitchdeck.lk",
    ogDescription:
      "We help startups build their perfect pitch deck, Ideation. Seeding. Get Funded.",
  };
  return (
    <div className="main" style={{ margin: "25px" }}>
      <DynamicMetaTags metaTags={metaTags} />
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
        {/* <FormRegister /> */}

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
        <PitchExamples />
        {/* <Row
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
        </Row> */}
        <Footer />
      </Row>
    </div>
  );
};
