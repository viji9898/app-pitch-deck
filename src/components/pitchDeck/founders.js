import { Avatar, Card, Col, Row } from "antd";
import {
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
export const Founder = () => {
  const { Meta } = Card;
  const founderData = [
    {
      name: "Viji W",
      description:
        "I am coder and I am passionate about teaching tech and upskill people into a career in tech",
      linkedin: "https://www.linkedin.com/in/vijiw/",
      facebook: false,
      twitter: "",
      social: "",
      avatarUrl:
        "https://media.licdn.com/dms/image/C4D03AQGQgyGQIQW5Hw/profile-displayphoto-shrink_200_200/0/1663690442529?e=1698278400&v=beta&t=O4DvcduPgOYFL1D2GX97lPG3UmK9xtrsZ3F7ZiZxhws",
    },
    {
      name: "Imran H",
      description:
        "Coder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse auctos ",
      social: "",
      linkedin: "https://www.linkedin.com/in/vijiw/",
      avatarUrl:
        "https://media.licdn.com/dms/image/D5603AQHOaNnbredo7w/profile-displayphoto-shrink_200_200/0/1674912962387?e=1698278400&v=beta&t=vnC07emdnVBa9TuYbv5SqDByj0SGSdAnRTmaq6ndG8Q",
    },
  ];

  const listFounders = founderData.map((data) => {
    return (
      <Col xs={24} sm={24} md={8}>
        <Card
          style={{ height: "100%" }}
          actions={[
            data.linkedin && (
              <a
                href="https://www.linkedin.com/in/vijiw/"
                target="_blank"
                rel="noreferrer"
              >
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
        <h2>{"Founders"}</h2>
      </Col>
      {listFounders}
    </Row>
  );
};
