import { Button, Card, Col, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import { CompanyIdeation } from "../components/discover/companiesIdeation";

export const Discover = () => {
  const industryData = [
    {
      title: "AgroTech",
    },
    {
      title: "PropTech",
    },
  ];

  const stageData = [
    {
      title: "MVP",
    },
    {
      title: "Traction",
    },
    {
      title: "Customers",
    },
  ];

  const listStages = stageData.map((data) => {
    return <Button>{data.title}</Button>;
  });
  const listIndustry = industryData.map((data) => {
    return <Button>{data.title}</Button>;
  });

  const companyData = [
    {
      background:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/pitch-deck/magic-bit/backbround-magic-bit-pitch-01.png",
      companyLogo:
        "https://media.licdn.com/dms/image/C510BAQGdffX7_5TAhQ/company-logo_200_200/0/1569659903356?e=1702512000&v=beta&t=UMo3TPekEgiE5CaJfSZewsWQta0ZHGnPMdEsIsctG6M",
      companyName: "Magic Bit",
      description:
        "Magicbit provides STEM kits for kids to create 100+ innovative projects in coding, robotics, IoT & electronics with project based learning.",
      industryTag: ["edTech"],
      stageTag: ["Customer"],
      targetInvestment: "US500,000",
      url: "/in/dev-magic-bit",
    },
    {
      background:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/placeholder-image-1050-390.png",
      companyLogo:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/templete-logo.png",
      companyName: "Immersive Smile",
      description:
        "In order to help people who are experiencing psychological pain and physical pain, through VR Cyber psychological Therapy.",
      industryTag: ["healthTech"],
      stageTag: ["customers"],
      targetInvestment: "US50,000",
      url: "/in/dev-immersive-smile",
    },
    {
      background:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/pitch-deck/magic-bit/backbround-magic-bit-pitch-01.png",
      companyLogo:
        "https://media.licdn.com/dms/image/C510BAQGdffX7_5TAhQ/company-logo_200_200/0/1569659903356?e=1702512000&v=beta&t=UMo3TPekEgiE5CaJfSZewsWQta0ZHGnPMdEsIsctG6M",
      companyName: "Magic Bit",
      description:
        "Magicbit provides STEM kits for kids to create 100+ innovative projects in coding, robotics, IoT & electronics with project based learning.",
      industryTag: ["edTech"],
      stageTag: ["Customer"],
      targetInvestment: "US500,000",
      url: "/in/dev-magic-bit",
    },
  ];

  const listCompanyData = companyData.map((data) => {
    return (
      <Col xs={24} sm={24} md={8}>
        <Card
          extra={[]}
          actions={[
            `Ask: ${data.targetInvestment}`,
            <Link to={data.url}>
              <Button>Find Out More</Button>
            </Link>,
          ]}
          hoverable
          bordered
          cover={
            <img alt="test" src={data.background} style={{ padding: "5px" }} />
          }
        >
          <p>{data.description}</p>
          <Tag>{"edTech"}</Tag>
          <Tag>{"Customer"}</Tag>
        </Card>
      </Col>
    );
  });

  return (
    <div className="main" style={{ margin: "10px" }}>
      <Row gutter={[18, 18]} style={{ maxWidth: "1200px" }}>
        <Col>
          <h2>Partners</h2>
          {"Acquity, Hatch, SLASSCOM, ICTA, LANKA ANGEL NETWORK, "}
        </Col>
        <Col span={24} style={{ textAlign: "left" }}>
          <h1>Ready to Seed!</h1>
          <p>
            {
              "Checkout the companies below that are ready to seed, they have fine tuned there ideas, understood the problem they are working on and have come up with their solution, checkout their MVP (minimal viable product) ready"
            }
          </p>
        </Col>
        <Col span={24} style={{ textAlign: "left" }}>
          {listStages}
          {listIndustry}
        </Col>
        <Row gutter={[18, 18]}>{listCompanyData}</Row>

        <Col span={24}>
          <h2> Ideation</h2>
          <p>
            {
              "Checkout the companies below that are ready to seed, they have fine tuned there ideas, understood the problem they are working on and have come up with their solution, checkout their MVP (minimal viable product) ready"
            }
          </p>
        </Col>
        <CompanyIdeation />
      </Row>
    </div>
  );
};
