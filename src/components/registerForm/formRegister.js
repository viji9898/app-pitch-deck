import { Button, Form, Input } from "antd";
import { Col, Row } from "antd";

export const FormRegister = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="main">
      <Form
        name="basic"
        layout="vertical"
        style={{
          maxWidth: 900,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={[18, 18]} style={{ maxWidth: "900px" }}>
          <Col span={24}>
            <h2>Startup Application</h2>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                {
                  required: true,
                  message: "Please input your Company Name!",
                },
              ]}
            >
              <Input placeholder="example ABC Company Pvt Ltd." />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Form.Item
              label="Describe what your company does in 150 characters or less."
              name="descriptionCompany"
              rules={[
                {
                  required: true,
                  message: "Please input a description of your company!",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={150} />
            </Form.Item>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
