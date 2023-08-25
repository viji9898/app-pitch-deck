import { Button, Card, Divider, Form, Input, InputNumber, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
export const FormRegister = () => {
  const { Option } = Select;

  const catagoryData = [
    { value: "Adtech" },
    { value: "Aerospace" },
    { value: "Agriculture" },
    { value: "Analytics" },
    { value: "B2B SaaS" },
    { value: "Biotech" },
    { value: "Climate" },
    { value: "Community" },
    { value: "Construction" },
    { value: "Continuing Education" },
    { value: "Crypto / Blockchain" },
    { value: "Developer Tools" },
    { value: "Energy" },
    { value: "Entertainment" },
    { value: "Financial Services" },
    { value: "Fitness" },
    { value: "Food/Beverage" },
    { value: "Freight" },
    { value: "Gaming" },
    { value: "Government" },
    { value: "Hard Tech" },
    { value: "Hardware" },
    { value: "Healthcare" },
    { value: "Insurance" },
    { value: "Language Learning" },
    { value: "Lending/Loan Management" },
    { value: "Marketplace" },
    { value: "Media" },
    { value: "Medical Devices" },
    { value: "Mental Health" },
    { value: "Personal Finance" },
    { value: "Real Estate" },
    { value: "Retail" },
    { value: "Recruiting" },
    { value: "Robotics" },
    { value: "Sales Enablement" },
    { value: "Security" },
    { value: "Transportation" },
    { value: "Travel/Tourism" },
    { value: "Virtual Reality / AR" },
    { value: "Wellness" },
    { value: "Other" },
  ];

  const listCatagories = catagoryData.map((data) => {
    return <Option value={data.value}>{data.value}</Option>;
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card
      style={{
        boxShadow: "5px 5px 5px 5px grey",
        backgroundColor: "#f4f1ed",
      }}
    >
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
                style={{ marginBottom: "0px" }}
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
                style={{ marginBottom: "0px" }}
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
                style={{ marginBottom: "0px" }}
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
            <Col xs={24} sm={24} md={8}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                label="Category best applies to your company?"
                name={"companyCategory"}
                rules={[
                  {
                    required: true,
                    message: "This is required",
                  },
                ]}
              >
                <Select placeholder="Select" style={{ width: "100%" }}>
                  {listCatagories}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                label="Are people using your product?"
                name={"traction"}
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
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={8}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                label="Do you have revenue?"
                name={"revenue"}
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
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                label="Does your have a Social Impact?"
                name={"socialImpact"}
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
              </Form.Item>
            </Col>
            <Divider orientation="left">{"FOUNDERS"}</Divider>
            <Col span={24}>
              <p>
                {
                  "Please provide some details of the cofounders in the startup."
                }
              </p>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <Form.Item
                style={{ marginBottom: "0px" }}
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
                style={{ marginBottom: "0px" }}
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
                style={{ marginBottom: "0px" }}
                label="Phone Number - (WhatsApp - preferred)"
                name="founderNumber"
                rules={[
                  {
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
                style={{ marginBottom: "0px" }}
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
                style={{ marginBottom: "0px" }}
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
              </Form.Item>
              <small>
                {
                  "(You are a programmer, engineer, or scientist who can build the product without outside assistance.)"
                }
              </small>
            </Col>
            <Col xs={24} sm={24} md={6}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                name={"age"}
                label="Age"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={6}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                name={"gender"}
                label="Gender"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.List name="cofounder">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <div
                        key={key}
                        style={{
                          display: "flex",
                          marginBottom: 5,
                        }}
                      >
                        <Form.Item
                          style={{ marginBottom: "0px", width: "100%" }}
                          {...restField}
                          name={[name, "cofounderEmail"]}
                          rules={[
                            {
                              type: "email",
                              required: true,
                              message: "add Co-founder email",
                            },
                          ]}
                        >
                          <Input placeholder="Co-founder Email" />
                        </Form.Item>
                        <MinusCircleOutlined
                          style={{ verticalAlign: "middle", padding: "10px" }}
                          onClick={() => remove(name)}
                        />
                      </div>
                    ))}
                    <Form.Item
                      style={{ marginBottom: "0px", marginTop: "30px" }}
                    >
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={
                          <PlusOutlined style={{ verticalAlign: "middle" }} />
                        }
                      >
                        Add Cofounder
                      </Button>
                      <small>
                        {"(If you have a co-founder add their email here)"}
                      </small>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                label="Are you looking for a co-founder?"
                name={"lookingCofounder"}
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
              </Form.Item>
            </Col>
            <Divider>
              {"Getting to know you (optional - super helpful for us!)"}
            </Divider>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                label="How long have the founders known one another and how did you meet? Have any of the founders not met in person?"
                name="descriptionFounders"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                label="How long have each of you been working on this? How much of that has been full-time? Please explain."
                name="descriptionTimeCommitment"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Form.Item
                style={{ marginBottom: "0px" }}
                label="What do you hope to achieve from the program?"
                name="descriptionExpectations"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <Form.Item style={{ marginBottom: "0px" }}>
                <Button
                  size="large"
                  shape="round"
                  style={{ backgroundColor: "black" }}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Card>
  );
};
