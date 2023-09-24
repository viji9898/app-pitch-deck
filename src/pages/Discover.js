import { Avatar, Button, Card, Col, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import { CompanyIdeation } from "../components/discover/companiesIdeation";
import { Disclaimer } from "../components/discover/disclaimer";
import { companyData } from "../components/discover/companyData";
import { useEffect, useState } from "react";

export const Discover = () => {
  const { Meta } = Card;
  const [companyList, setCompanyList] = useState([
    {
      background: "",
      companyLogo: "",
      companyName: "",
      description: "",
      tags: [],

      targetInvestment: "",
      url: "",
    },
  ]);

  //   const [companTag, setCompanyTag] = useState("");

  useEffect(() => {
    setCompanyList(companyData);
  }, []);

  const filterCompanyData = companyData.map((data) => {
    return data.tags.filter((tag) => tag === "edTech");
  });

  console.log(filterCompanyData);

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

  const listCompanyData = companyList.map((data) => {
    const companyTags = data.tags;

    const listCompanyTag = companyTags.map((data) => {
      return <Tag>{data}</Tag>;
    });

    return (
      <Col xs={24} sm={24} md={8}>
        <Card
          extra={[]}
          actions={[
            `Ask: ${data.targetInvestment}`,
            <div>
              {data.comingSoon ? (
                <Button disabled>{"Coming Soon"}</Button>
              ) : data.onPitchDeck ? (
                <Link to={data.url}>
                  <Button>Find Out More</Button>
                </Link>
              ) : (
                <Button
                  type="link"
                  target="_blank"
                  rel="noreferrer"
                  href={data.url}
                >
                  Find Out More
                </Button>
              )}
            </div>,
          ]}
          hoverable
          bordered
          cover={
            <img
              alt={data.altText}
              src={data.background}
              style={{ padding: "5px" }}
            />
          }
        >
          <Meta
            avatar={
              <Avatar
                alt="company logo"
                shape="square"
                src={data.companyLogo}
              />
            }
            title={data.companyName}
          />
          <br></br>
          <div style={{ height: "100%" }}>
            <p>{data.description}</p>
            {listCompanyTag}
          </div>
        </Card>
      </Col>
    );
  });

  return (
    <div className="main" style={{ margin: "10px" }}>
      <Row gutter={[18, 18]} style={{ maxWidth: "1200px" }}>
        <Col>
          <h2>Note:</h2>
          {
            "List startups that have participated in accelerators and incudators"
          }
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
        <Col span={24} style={{ textAlign: "center" }}>
          <Button>{"View All"}</Button>
        </Col>
        <Col span={24}>
          <h2> Ideation</h2>
          <p>
            {
              "Checkout the companies below that are in their ideation, they are building our MVP, getting a better understand of their problem statement and fine tuning their value proposition and coming up with their solution."
            }
          </p>
        </Col>
        <CompanyIdeation />
        <Disclaimer />
      </Row>
    </div>
  );
};
