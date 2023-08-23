import { Button, Divider, Form, Input, Select } from "antd";
import { Col, Row } from "antd";
export const FormRegister = () => {
  const { Option } = Select;
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
          <Divider orientation="left">{"Company"}</Divider>
          <Col xs={24} sm={24} md={12}>
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
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label="Company url, if any:"
              name="companyUrl"
              rules={[
                {
                  required: false,
                  message: "Please input website!",
                },
              ]}
            >
              <Input />
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
          <Divider orientation="left">{"FOUNDERS"}</Divider>
          <Col span={24}>
            <p>
              {"Please provide some details of the cofounders in the startup."}
            </p>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label="Your Name"
              name="founderName"
              rules={[
                {
                  required: true,
                  message: "Please input your",
                },
              ]}
            >
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label="Your Email"
              name="founderEmail"
              rules={[
                {
                  type: "email",
                  required: false,
                  message: "Please input website!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label="Phone Number - (WhatsApp - preferred)"
              name="founderEmail"
              rules={[
                {
                  type: "number",
                  required: false,
                  message: "Please input contact number",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label="Linkedin URL"
              name="linkedinUrl"
              rules={[
                {
                  type: "url",
                  required: false,
                  message: "Please input contact number",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item
              label="Are you a technical founder?* (Required)"
              name={"founderTechnical"}
              rules={[
                {
                  required: true,
                  message: "This is required",
                },
              ]}
            >
              <Select placeholder="Select" style={{ width: "100%" }}>
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
              </Select>
              <small>
                {
                  "(You are a programmer, engineer, or scientist who can build the product without outside assistance.)"
                }
              </small>
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
