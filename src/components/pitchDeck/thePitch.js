import { Card, Col, Row } from "antd";

export const ThePitch = () => {
  return (
    <Row gutter={[18, 18]} style={{ maxWidth: "1050px" }}>
      <Col xs={24} sm={24} md={16}>
        <Card style={{ margin: "0px", padding: "0px" }}>
          <iframe
            src="https://player.vimeo.com/video/284809171?h=ad05b53679"
            title="pitch video"
            width="100%"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8}>
        <Card
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            fontFamily: "monospace",
          }}
        >
          <h2>{`"Our Mission: to upskill a nation!"`}</h2>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24}>
        <Card style={{ height: "100%" }}>
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTX1g-yLFKUAgxYA0-Pu_qsunpOHDkuk6eSZKooQIeLzXLefTMOe24JegSIesv9XztWwOkDvsJ9wYn3/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            title="pitch slide deck"
            width="100%"
            height="558"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </Card>
      </Col>
    </Row>
  );
};
