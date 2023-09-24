import React from "react";
import { Col, List, Row, Space } from "antd";
import {
  HomeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  //   FacebookOutlined,
} from "@ant-design/icons";

export const CompanyIdeation = () => {
  const exampleData = [
    {
      title: "Karadana Traders",
      url: "https://karadanatraders.com/",
      description:
        "Supply high-quality vegetables to buyers with minimum wastage, improve the understanding of customers about vegetable varieties and how to select quality vegetables from different areas of the country. Reach export market and obtain a considerable share of the global market.",
      founderName: "Kasan Prabath",
      email: "kasunprabathdkp@gmail.com",
      contactNumber: "0779491930",
    },
    {
      title: "ImmersiveSmiles",
      url: "https://immersivesmile.com",
      description:
        "Immersive Smile Plus is a pioneering healthcare technology company that focuses on utilizing virtual reality (VR) solutions to alleviate pain and anxiety in patients during medical procedures. Our innovative flagship product, the Immersive Smile Plus",
      founderName: "Jaiyramanan Vijayaalayan",
      email: "jaiyramanan@gmail.com",
      contactNumber: "0761751237",
    },
    {
      title: "Lion: Bit",
      url: "https://www.lionbit.lk/",
      description:
        "Lion:Bit is a pocket-sized computer that introduces you to how software and hardware work together. It has an LCD display, buttons, sensors and many input/output features. when programmed, let it interact with you and your world. You can code, customize. The high-performance capabilities of the Lion Bit make it suitable for robotics projects.",
      founderName: "P. Kavinda Kotuwegedara",
      email: "kotuwegedara@gmail.com",
      contactNumber: "0772348985",
    },
    {
      title: "V-Stay",
      url: "https://vstay.great-site.net/",
      description:
        "VStay: Your Passport to Exceptional Stays. Explore, Book, and Experience the Perfect Accommodations for Unforgettable Journeys.",
      founderName: "Vidusha Lakshan",
      email: "vidushalakshanpersonal@gmail.com",
      contactNumber: "0779300873",
    },
    {
      title: "YohndY",
      url: "https://yohndy.com/",
      description:
        "A simple platform that would track all communications, and audit logs and then do analytics and machine learning on it. YohndY, the premier app for all your home repair needs. With our user-friendly YohndY app, you can effortlessly connect with a reliable network of skilled professionals.",
      founderName: "Ranjani",
      email: "ranjanignanas@gmail.com",
      contactNumber: "0762941415",
    },
    {
      title: "T&P IoT",
      url: "https://sites.google.com/view/tandpiot/about-us",
      description:
        "IoT home automation systems offer convenient centralized control, enhanced control through mobile apps or voice commands, energy efficiency by optimizing usage, increased security with smart locks and surveillance, home monitoring for safety, integration of devices from various manufacturers, and personalization through customization and adaptive automation.",
      founderName: "P.M. Shian Rameesha Fernando",
      email: "shianfernando438@gmail.com",
      contactNumber: "0752005340",
    },
    {
      title: "Netzee Global",
      url: "https://netzee.lk/",
      description:
        "Netzee unlocks a world of incredible offers and exciting experiences that happens locally. It is a location-based information-sharing platform that supports instantaneous advertising, benefiting both local merchants and customers.",
      founderName: "Pradeep Jayatilaka",
      email: "prjayatilaka@gmail.com",
      contactNumber: "+94773512391",
    },
    {
      title: "Humanised Technology Solutions",
      url: "https://www.gethumanised.com/",
      description:
        "Humanised Payroll is purpose-built to match the payroll process followed by payroll service providers while overcoming the typical challenges they face. Unlike generic payroll software, where the primary focus is handling internal company payroll efficiently, our solution understands the complexities and intricacies of handling multiple client payrolls concurrently.",
      founderName: "Didulani Jayasinghe",
      email: "didulani@humanised.ventures",
      contactNumber: "+94 77 3820053/ +61 3 9917 8629",
    },
    {
      title: "Adamas Peak",
      url: "https://adamaspeak.com/",
      description:
        "creating an E Signature Platform, that people can sign agreements online, without the fear of getting scammed, By using a algorithm we detect scammers before the agreement done, so people can hire freelancers, buy properties, or sign NDA agreements,... without a mental stress, also through our platform people can find reliable service providers within the Sri Lanka making peoples everyday life lot easier.",
      founderName: "M. Madilka Fernando",
      email: "fernandomadilka@gmail.com",
      contactNumber: "0761747532",
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
              //   avatar={<Avatar src={item.avatar} />}
              title={
                <a target="_blank" rel="noreferrer" href={item.url}>
                  {item.title}
                </a>
              }
              description={
                <Row gutter={[18, 18]}>
                  <Col
                    xs={24}
                    sm={24}
                    md={20}
                    style={{ maxHeight: "50px", overflow: "scroll" }}
                  >
                    {item.description}
                  </Col>
                  <Col xs={24} sm={24} md={4}>
                    <Space>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <IconText
                          icon={HomeOutlined}
                          key="list-vertical-star-o"
                        />
                      </a>
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
