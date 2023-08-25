import { Avatar, Card, Col, Row } from "antd";
import { binoculars, question, soultion } from "./pitchAssets";

export const AdditionalInfo = () => {
  return (
    <Row gutter={[18, 18]} style={{ maxWidth: "1050px" }}>
      <Col span={24}>
        <h2>{"Addition Info"}</h2>
      </Col>
      <Card>
        <Row gutter={[18, 18]}>
          <Col xs={24} sm={24} md={8}>
            <Avatar
              size={60}
              src={binoculars}
              style={{ backgroundColor: "#f2b823" }}
            />
            <h3>VISION</h3>
            <p>
              {
                "Tech For Good is committed to transforming lives through immersive coding bootcamps. Our goal is to empower individuals with technical skills, an entrepreneurial mindset, and connections to launch successful tech careers and drive positive change."
              }
            </p>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Avatar
              size={60}
              src={question}
              style={{ backgroundColor: "#f2b823" }}
            />
            <h3>PROBLEM</h3>
            <p>
              {
                "Many motivated individuals lack access to quality tech education, hindering their entry into the industry. Traditional education often falls short in providing the necessary skills. Furthermore, the gap between tech skills and entrepreneurship knowledge, coupled with limited industry connections, poses a barrier to career entry."
              }
            </p>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Avatar
              size={60}
              src={soultion}
              style={{ backgroundColor: "#f2b823" }}
            />
            <h3>{"SOLUTION"}</h3>
            <p>
              {
                "Tech For Good's solution combines intensive coding bootcamps, entrepreneurship training, and industry partnerships. Our immersive programs equip individuals with coding expertise and an entrepreneurial outlook. By partnering with hiring companies, we create pathways to connect skilled graduates with tech career opportunities, enabling them to thrive in the industry and make meaningful contributions."
              }
            </p>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};
