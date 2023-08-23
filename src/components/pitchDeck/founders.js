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
      name: "Viji",
      description:
        "Coder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse auctor dui eu est gravida, at venenatis ",
      social: "",
    },
    {
      name: "Viji",
      description:
        "Coder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse auctor dui eu est gravida, at venenatis ",
      social: "",
    },
  ];

  const listFounders = founderData.map((data) => {
    return (
      <Col xs={24} sm={24} md={8}>
        <Card
          actions={[
            <LinkedinOutlined style={{ fontSize: "25px" }} key="linkedin" />,
            <FacebookOutlined style={{ fontSize: "25px" }} key="facebook" />,
            <TwitterOutlined style={{ fontSize: "25px" }} key="twitter" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
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
