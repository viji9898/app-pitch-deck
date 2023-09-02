import { Avatar, Card, Col, Row, Space, Tag } from "antd";
export const Overview = ({ pitchData }) => {
  const {
    companyName,
    socialLinks,
    companyAvatar,
    description,
    investmentOverviewDescription,
    tags,
  } = pitchData.overview;

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
  const listTags = tags.map((data) => {
    return <Tag color={data.color}>{data.title}</Tag>;
  });

  return (
    <Card style={{ width: "100%" }}>
      <Row gutter={[18, 18]} justify={"center"}>
        <Col xs={24} sm={24} md={12}>
          <Avatar size={64} src={companyAvatar} />

          {listTags}
          <h2>{companyName}</h2>
          <p>{description}</p>
          <Space>{listSocialLinks}</Space>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h2>Investment Overview</h2>
          {investmentOverviewDescription}
        </Col>
      </Row>
    </Card>
  );
};
