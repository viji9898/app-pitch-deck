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
          <Tag color="salmon">{"Impact"}</Tag>
          <h2>techForGood</h2>
          <p>
            {
              "We empower through immersive coding bootcamps, blending tech skills and entrepreneurial mindset. Bridging education and industry, we connect graduates with tech careers, driving individual growth and societal impact."
            }
          </p>
          <Space>{listSocialLinks}</Space>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h2>Investment Overview</h2>

          <p>{"Tagert Close: LKR5,000,000"}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Simple_agreement_for_future_equity"
          >
            {"SAFE Investment Scheme"}
          </a>
        </Col>
      </Row>
    </Card>
  );
};
