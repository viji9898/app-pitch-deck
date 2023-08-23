import { Button, Card, Col, Row } from "antd";

export const Interested = () => {
  return (
    <Card
      style={{ backgroundColor: "#f2b823", color: "white", maxWidth: "1050px" }}
    >
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <h4>I'm interested, tell me more</h4>
          <p>
            {
              "Hit the button, enter your contact details and a message, we'll get right back to you!"
            }
          </p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Button
              style={{
                color: "#f2b823",
                fontSize: "16px",
                width: "50%",
              }}
              size="large"
              shape="round"
            >
              I'm Interest
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
