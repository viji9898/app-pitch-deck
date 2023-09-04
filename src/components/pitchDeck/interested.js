import { Button, Card, Col, Modal, Row } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

export const Interested = ({ interested, paid }) => {
  const { backgroundColor } = interested;
  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: "PitchDeck.lk",
      icon: <ExclamationCircleFilled />,
      content: "Checkout the functionality on the live pitch",
      okText: "Live Pitch",
      onOk() {
        window.open("https://pitch.techforgood.lk");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <Card
      style={{
        backgroundColor: backgroundColor,
        color: "white",
        width: "100%",
      }}
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
            {paid ? (
              <Button
                onClick={showConfirm}
                style={{
                  color: backgroundColor,
                  fontSize: "16px",
                  width: "50%",
                }}
                size="large"
                shape="round"
              >
                I'm Interest
              </Button>
            ) : (
              <Button
                href={`mailto:${interested.emailFounder}`}
                style={{
                  color: backgroundColor,
                  fontSize: "16px",
                  width: "50%",
                }}
                size="large"
                shape="round"
              >
                {interested.emailFounder}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  );
};
