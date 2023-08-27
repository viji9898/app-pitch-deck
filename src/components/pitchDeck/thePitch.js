import { Card, Col, Row } from "antd";

export const ThePitch = () => {
  return (
    <Row gutter={[18, 18]} style={{ maxWidth: "1050px" }}>
      <Col xs={0} sm={0} md={16}>
        <Card style={{ margin: "0px", padding: "0px" }}>
          <iframe
            src="https://player.vimeo.com/video/857861963?h=9b6bbf4f86&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="pitch video"
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
              src="https://player.vimeo.com/video/858184804?h=5d33777548&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="Education Ad"
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
          <h2>{`"Our Mission: to upskill a nation!"`}</h2>
        </Card>
      </Col>
      {/* <Col xs={24} sm={24} md={24}>
        <Card style={{ height: "100%" }}>
          <iframe
            title="pitch-deck"
            loading="lazy"
            style={{
              position: "relative",
              width: "100%",
              height: "600px",
              maxHeight: "80vh",
              border: "none",
              padding: "0",
              margin: "0",
              overflow: "hidden",
            }}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFspXbnXtQ&#x2F;view?embed"
            allowfullscreen="allowfullscreen"
            allow="fullscreen"
          ></iframe>
        </Card>
      </Col> */}
      <Col xs={0} sm={0} md={24}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTX1g-yLFKUAgxYA0-Pu_qsunpOHDkuk6eSZKooQIeLzXLefTMOe24JegSIesv9XztWwOkDvsJ9wYn3/embed?start=false&loop=false&delayms=3000"
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
          src="https://docs.google.com/presentation/d/e/2PACX-1vT5cbIZnG-Q7uQjHA7DkYwj6_NxBQels6isl1HuEb7GKl3ntaGLVbYm_yh7kgsBhzpgcQUC16yTXueA/embed?start=false&loop=false&delayms=3000"
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
