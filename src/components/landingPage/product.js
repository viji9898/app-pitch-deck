import { Button, Card, Col, Row } from "antd";

export const Product = ({ setFormVisible, formVisible }) => {
  return (
    <div className="main" style={{ marginBottom: "25px" }}>
      <Row gutter={[18, 18]} style={{ margin: "5px" }}>
        <Col xs={24} sm={24} md={8}>
          <Card
            style={{
              height: "100%",
              boxShadow: " 5px 5px 1px #000",
              fontFamily: "Montserrat",
            }}
          >
            <h2>Starter</h2>
            <p>For individuals and teams getting started</p>
            <p>$0</p>
            <p>
              <small>Free Forever</small>
            </p>
            <div style={{ textAlign: "left" }}>
              <p>
                <strong>Includes:</strong>
              </p>
              <ul>
                <li>Your Pitch Page</li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card
            style={{
              height: "100%",
              boxShadow: " 5px 5px 1px #000",
              fontFamily: "Montserrat",
            }}
          >
            <h2>Go Pro</h2>
            <p>Taking your pitch to the next level!</p>
            <p>$15/month</p>
            <p>
              <small>Billed Annually $180</small>
            </p>
            <div style={{ textAlign: "left" }}>
              <p>
                <strong>Includes:</strong>
              </p>
              <ul>
                <li>Your Pitch Page</li>
                <li>Pitch View Info</li>
                <li>Request More Info</li>
                <li>Custom Domain</li>
                <li>Customised Auto Email response</li>
                <li>Virtual Data Room with Drive</li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card
            style={{
              height: "100%",
              boxShadow: " 5px 5px 1px #000",
              fontFamily: "Montserrat",
            }}
          >
            <h2>Enterprise</h2>
            <p>Building out a customised requirements</p>
            <div style={{ textAlign: "left" }}>
              <p>
                <strong>Includes:</strong>
              </p>
              <ul>
                <li>24/7 Support</li>
                <li>Dedicated Service Manager</li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Button
            style={{
              width: "75%",
              color: "white",
              backgroundColor: "black",
              fontFamily: "Montserrat",
            }}
            size="large"
            onClick={() => {
              setFormVisible(!formVisible);
            }}
          >
            <strong>GET STARTED</strong>
          </Button>
        </Col>
      </Row>
    </div>
  );
};
