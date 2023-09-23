import React from "react";
import { Avatar, Col, List, Row, Space } from "antd";
import {
  HomeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  //   FacebookOutlined,
} from "@ant-design/icons";

export const CompanyIdeation = () => {
  const exampleData = [
    {
      alt: "gif of doll house showing a property in 3d",
      src: "https://images.squarespace-cdn.com/content/v1/5e85105860e4d00e03535059/1595262192709-DNMDJRFYXEKFCQGC68M5/Matterport+Dollhouse.gif",
      avatar: "https://img.icons8.com/?size=512&id=BEa3DoPM5tos&format=png",
      title: "3d.lk",
      description: "Aiming to recreate Sri Lanka's Properties in 3-Dimensions",
      sector: "Property Tech",
      stage: "Seed",
    },
    {
      alt: "gif of a API Service",
      src: "https://i.pinimg.com/originals/bd/e9/79/bde979712f831c4827742c68fa9e87c2.gif",
      avatar: "https://img.icons8.com/?size=512&id=cTDO21IUfZIy&format=png",
      title: "DaaS",
      description: "Providing API's for all kinds of Sri Lankan Data ",
      sector: "Data Service",
      stage: "Pre-Seed",
    },
    {
      alt: "gif of doll house showing a property in 3d",
      src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/pitch-deck/marriottWeligamaTitle.gif",
      avatar:
        "https://i.pinimg.com/originals/e1/78/6e/e1786e79b5287e0d6bca2104a8540e5a.png",
      title: "Weligama Bay Marriott",
      description:
        "Case Study on the Buidling of a 198 Key Marriott Resort & Spa",
      sector: "Property Tech",
      openSource: true,
    },
    {
      alt: "gif of doll house showing a property in 3d",
      src: "https://media2.giphy.com/media/QVUL20w0FwLKnQuX4D/giphy.gif?cid=ecf05e47l7j0xr19h3ekpz3iun0r5bvedfoje22ebaajvrjd&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      avatar:
        "https://mo.lk/static/media/hero-mo-caption.b94eba5860de9e5137b36657e7198a9a.svg",
      title: "MO.LK",
      description: "Platform for pre-loved goods",
      sector: "E-commence",
      openSource: false,
      stage: "Pre-Seed",
    },
    {
      alt: "gif of doll house showing a property in 3d",
      src: "https://images.squarespace-cdn.com/content/v1/5e85105860e4d00e03535059/1595262192709-DNMDJRFYXEKFCQGC68M5/Matterport+Dollhouse.gif",
      avatar: "https://img.icons8.com/?size=512&id=BEa3DoPM5tos&format=png",
      title: "3d.lk",
      description: "Aiming to recreate Sri Lanka's Properties in 3-Dimensions",
      sector: "Property Tech",
      stage: "Seed",
    },
    {
      alt: "gif of a API Service",
      src: "https://i.pinimg.com/originals/bd/e9/79/bde979712f831c4827742c68fa9e87c2.gif",
      avatar: "https://img.icons8.com/?size=512&id=cTDO21IUfZIy&format=png",
      title: "DaaS",
      description: "Providing API's for all kinds of Sri Lankan Data ",
      sector: "Data Service",
      stage: "Pre-Seed",
    },
    {
      alt: "gif of doll house showing a property in 3d",
      src: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/pitch-deck/marriottWeligamaTitle.gif",
      avatar:
        "https://i.pinimg.com/originals/e1/78/6e/e1786e79b5287e0d6bca2104a8540e5a.png",
      title: "Weligama Bay Marriott",
      description:
        "Case Study on the Buidling of a 198 Key Marriott Resort & Spa",
      sector: "Property Tech",
      openSource: true,
    },
    {
      alt: "gif of doll house showing a property in 3d",
      src: "https://media2.giphy.com/media/QVUL20w0FwLKnQuX4D/giphy.gif?cid=ecf05e47l7j0xr19h3ekpz3iun0r5bvedfoje22ebaajvrjd&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      avatar:
        "https://mo.lk/static/media/hero-mo-caption.b94eba5860de9e5137b36657e7198a9a.svg",
      title: "MO.LK",
      description: "Platform for pre-loved goods",
      sector: "E-commence",
      openSource: false,
      stage: "Pre-Seed",
    },
  ];

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <Col span={12}>
      <List
        itemLayout="horizontal"
        style={{ overflow: "scroll", maxHeight: "500px" }}
        dataSource={exampleData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={
                <Row gutter={[18, 18]}>
                  <Col xs={24} sm={24} md={20}>
                    {item.description}
                  </Col>
                  <Col xs={24} sm={24} md={4}>
                    <Space>
                      <IconText
                        icon={HomeOutlined}
                        key="list-vertical-star-o"
                      />
                      <IconText
                        icon={LinkedinOutlined}
                        key="list-vertical-like-o"
                      />

                      <IconText
                        icon={InstagramOutlined}
                        key="list-vertical-message"
                      />
                    </Space>
                  </Col>
                </Row>
              }
            />
          </List.Item>
        )}
      />
    </Col>
  );
};
