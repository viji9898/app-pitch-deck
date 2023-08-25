import { Avatar, Card, Col, Row, Space, Tag } from "antd";
import {
  HomeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
export const Overview = () => {
  const socialLinks = [
    {
      type: "website",
      url: "https://tfg.lk",
      icon: <HomeOutlined />,
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/company/techforgood-lk/",
      icon: <LinkedinOutlined />,
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/techforgood_lk/",
      icon: <InstagramOutlined />,
    },
    {
      type: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100094714128169",
      icon: <FacebookOutlined />,
    },
  ];

  const listSocialLinks = socialLinks.map((data) => {
    return (
      <a
        style={{ fontSize: "20px" }}
        href={data.url}
        target="_blank"
        rel="noreferrer"
      >
        {data.icon}
      </a>
    );
  });

  return (
    <Card style={{ width: "100%" }}>
      <Row gutter={[18, 18]} justify={"center"}>
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
          <Space>{listSocialLinks}</Space>
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
