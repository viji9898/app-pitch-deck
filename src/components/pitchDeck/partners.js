import { Card, Col } from "antd";

export const Partners = () => {
  return (
    <Col span={24}>
      <Card
        style={{
          boxShadow: "5px 5px 5px 5px grey",
          backgroundColor: "#f4f1ed",
        }}
        title={
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <h2>Partners in the Startup Eco-System</h2>
          </div>
        }
      >
        <Row gutter={[18, 18]}>
          <Col xs={12} sm={12} md={8}>
            <Card>
              <img
                alt="icta logo"
                src="https://www.icta.lk/icta-assets/themes/icta/images/logo.jpg"
              ></img>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Card style={{ height: "100%" }}>
              <img
                style={{ width: "100%" }}
                alt="hatch logo"
                src="https://hatch.lk/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-22-at-2.11.33-AM.jpeg"
              ></img>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Card>
              <img
                alt="johnkeellsx logo"
                style={{ width: "100%" }}
                src="https://johnkeellsx-2021-do.3cs.website/wp-content/uploads/2021/11/JohnkeelsX.png"
              ></img>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Card>
              <img
                alt="innovation Foundry"
                style={{ width: "100%" }}
                src="https://if.dialog.lk/wp-content/uploads/2021/08/innovation-foundary-logo-New-normal.png"
              ></img>
            </Card>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
