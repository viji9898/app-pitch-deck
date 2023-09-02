import { Card, Col, Row } from "antd";

export const ThePitch = ({ pitchMaterial }) => {
  const {
    pitchVideoDesktop,
    pitchVideoMobie,
    pitchSlidesDesktop,
    pitchSlidesMobile,
    mission,
  } = pitchMaterial;

  return (
    <Row gutter={[18, 18]} style={{ width: "100%" }}>
      <Col xs={0} sm={0} md={16}>
        <Card style={{ margin: "0px", padding: "0px" }}>
          <iframe
            src={pitchVideoDesktop}
            title="pitch video desktop"
            width="100%"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Col>
      <Col xs={24} sm={24} md={0}>
        <Card
          size="small"
          style={{ margin: "0px", padding: "0px", height: "100%" }}
        >
          <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
            <iframe
              src={pitchVideoMobie}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="pitch video mobile"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
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
          <h2>{mission}</h2>
        </Card>
      </Col>
      <Col xs={0} sm={0} md={24}>
        <iframe
          src={pitchSlidesDesktop}
          frameborder="0"
          width="100%"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="Pitch Deck - Web Version"
        ></iframe>
      </Col>
      <Col xs={24} sm={24} md={0}>
        <iframe
          src={pitchSlidesMobile}
          frameborder="0"
          width="100%"
          height="509"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="Pitch Deck - Mobile Version"
        ></iframe>
      </Col>
    </Row>
  );
};
