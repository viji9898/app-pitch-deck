import { Avatar, Card, Col, Row } from "antd";
import {
  LinkedinOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
export const Advisors = () => {
  const { Meta } = Card;
  const founderData = [
    {
      name: "Chantal S",
      description:
        "Focus on Social protection with experience at the intersection of the international humanitarian and development spaces gained working with governments, NGOs and international organizations in both field and HQ positions.",
      social: "",
      linkedin: "https://www.linkedin.com/in/chantal-sirisena/",
      avatarUrl:
        "https://media.licdn.com/dms/image/D4D03AQFH9Z5rVSQqjw/profile-displayphoto-shrink_200_200/0/1664619626301?e=1698278400&v=beta&t=Man4wOyO50ols3UiTVp_ZR0BQD8QJPGbtmRbiAAdnKo",
    },
    {
      name: "Nahil W",
      description:
        "Chairman and CEO at East - West Group of Companies, working of social projects and supporting social enterprises through my foundation.",
      social: "",
      linkedin: "https://www.linkedin.com/in/nahil-wijesuriya-a3876622/",
      avatarUrl:
        "https://media.licdn.com/dms/image/C4D03AQF0QfLR1OCOcg/profile-displayphoto-shrink_200_200/0/1516980937791?e=1698278400&v=beta&t=RLRq4TX-kbbvnCgpXlS_k4IY-BCQykoOIBmhCtoz8rQ",
    },
  ];

  const listFounders = founderData.map((data) => {
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
