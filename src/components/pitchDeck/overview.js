import { Avatar, Card, Col, Row, Tag } from "antd";

export const Overview = () => {
  return (
    <Card style={{ maxWidth: "1050px" }}>
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <Avatar
            size={64}
            src="https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/gmail-profile-pic-500px.png"
          />

          <Tag color="#f2b823">{"Pre-Seed"}</Tag>
          <Tag color="cyan">{"EdTech"}</Tag>
          <h2>techForGood</h2>
          <p>
            {
              "At Pandyt, we are proud to be a remote-first company. Our team of highly-skilled consultants is dedicated to providing top-notch service and delivering measurable results for our clients, no matter where they are located."
            }
          </p>
          <p>Location: Colombo</p>
          <p>Employees: 5-10</p>
          <p>Linkedin - tfg.lk</p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h2>Investment Overview</h2>
          <p>{"Raising: £500,000"}</p>
          <p>{"Pre-money valuation: £500,000"}</p>
          <p>{"Scheme: "}</p>
          <p>{"Tagert Close: £500,000"}</p>
          <p>{"How: SeedFast"}</p>
        </Col>
      </Row>
    </Card>
  );
};
