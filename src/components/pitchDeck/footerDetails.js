import { Button, Col, Divider, Row } from "antd";

export const FooterDetails = () => {
  return (
    <Row gutter={[18, 18]} style={{ maxWidth: "1050px" }}>
      <Divider />
      <Col xs={24} sm={24} md={24}>
        <p>
          <small>P O W E R E D B Y</small>
        </p>
        <p>{"techForGood.lk"}</p>
        <p style={{ fontSize: "16px" }}>
          Tech For Good Pvt Ltd.
          <Button type="link">Privacy Policy</Button>
          <Button type="link">Terms of Use</Button>
          <Button type="link">Cookie Policy</Button>
        </p>

        <p>
          <small>
            {
              "This document does not constitute an offer to sell, or the solicitation of an offer to buy, securities in any jurisdiction in which such offer or solicitation is unlawful. Investing in new and early-stage businesses entails risks, including the risk that you may lose the entirety of your investment. Pitch is designed for the exclusive use of sophisticated and high-net worth investors that have the knowledge and experience to understand and manage the risks associated with such investments, and to make their own decisions. You should only be viewing this page if you have registered with us as a sophisticated or a high-net worth investor. Please note that sophisticated and high-net worth investors sacrifice certain protections."
            }
          </small>
        </p>
      </Col>
    </Row>
  );
};
