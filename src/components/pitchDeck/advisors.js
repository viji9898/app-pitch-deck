import { Avatar, Card, Col, Row } from "antd";
import {
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
export const Advisors = ({ advisorData }) => {
  const { Meta } = Card;

  const listFounders = advisorData.map((data) => {
    return (
      <Col xs={24} sm={24} md={8}>
        <Card
          size="small"
          actions={[
            data.linkedin && (
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                <LinkedinOutlined style={{ fontSize: "25px" }} key="linkedin" />
              </a>
            ),
            data.facebook && (
              <FacebookOutlined style={{ fontSize: "25px" }} key="facebook" />
            ),
            data.twitter && (
              <TwitterOutlined style={{ fontSize: "25px" }} key="twitter" />
            ),
          ]}
        >
          <Meta
            avatar={
              <Avatar
                size={"large"}
                src={
                  data.avatarUrl
                    ? data.avatarUrl
                    : "https://xsgames.co/randomusers/avatar.php?g=pixel"
                }
              />
            }
            title={data.name}
            description={data.description}
          />
        </Card>
      </Col>
    );
  });

  return (
    <Row gutter={[18, 18]} style={{ maxWidth: "1050px" }}>
      <Col span={24}>
        <h2>{"Our Advisors"}</h2>
      </Col>
      {listFounders}
    </Row>
  );
};
