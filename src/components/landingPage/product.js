import { Button, Card, Col, Row } from "antd";
import { HeartOutlined } from "@ant-design/icons";
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
            title={<h2>Starter</h2>}
          >
            <p>For individuals and teams getting started</p>
            <p style={{ fontSize: "25px" }}>$0</p>
            <p>
              <small>Free Forever</small>
            </p>
            <div style={{ textAlign: "left" }}>
              <p>
                <strong>Includes:</strong>
              </p>
              <ul style={{ listStyle: "none", padding: "0px 10px" }}>
                <li>
                  <HeartOutlined style={{ verticalAlign: "baseline" }} /> Your
                  Pitch Page
                </li>
              </ul>
              <p>
                We help you build your pitch, give us the info and will have
                your pitch up running in 24hours!
              </p>
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
            title={<h2>Go Pro</h2>}
          >
            <p>Taking your pitch to the next level!</p>
            <p style={{ fontSize: "25px" }}>$250</p>
            <p>
              <small>One Time Payment</small>
            </p>
            <div style={{ textAlign: "left" }}>
              <p>
                <strong>Includes:</strong>
              </p>
              <ul style={{ listStyle: "none", padding: "0px 10px" }}>
                <li>
                  <HeartOutlined style={{ verticalAlign: "baseline" }} />{" "}
                  {" Your Pitch Page"}
                </li>
                <li>
                  {" "}
                  <HeartOutlined style={{ verticalAlign: "baseline" }} /> Who
                  viewed my pitch?
                </li>
                <li>
                  {" "}
                  <HeartOutlined style={{ verticalAlign: "baseline" }} /> User
                  request for more info
                </li>
                <li>
                  {" "}
                  <HeartOutlined style={{ verticalAlign: "baseline" }} /> Custom
                  Domain
                </li>
                <li>
                  {" "}
                  <HeartOutlined style={{ verticalAlign: "baseline" }} />{" "}
                  Customised Auto Email response
                </li>
                <li>
                  {" "}
                  <HeartOutlined style={{ verticalAlign: "baseline" }} />{" "}
                  Virtual Data Room with Drive
                </li>
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
            title={<h2>Enterprise</h2>}
          >
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
