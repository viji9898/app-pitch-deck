import { Button, Card, Divider, Form, Input, Select, Modal } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import axios from "axios";
import React from "react";
export const FormGetStarted = () => {
  const formRef = React.useRef(null);
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

  const onReset = () => {
    formRef.current?.resetFields();
  };

  const success = () => {
    Modal.success({
      content: "Application Sent will speak soon!!",
    });
    onReset();
  };

  const postDiscordMessage = async (values) => {
    console.log(values);
    return axios
      .post(".netlify/functions/postDiscordApplication", {
        values,
      })
      .then((response) => {
        // success(response);
      })
      .catch(function error(error) {
        const errorMessage = error.response.data;
        console.log(errorMessage);
      });
  };

  const postApplication = async (values) => {
    return axios
      .post(".netlify/functions/postApplication", {
        params: values,
      })
      .then((response) => {
        success(response);
        console.log(response);
      })
      .catch(function error(error) {
        const errorMessage = error.response.data;
        console.log(errorMessage);
      });
  };

  const postEmailApplication = async (values) => {
    return axios
      .post(".netlify/functions/postEmailApplication", {
        values,
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function error(error) {
        const errorMessage = error.response.data;
        console.log(errorMessage);
      });
  };

  const onFinish = (values) => {
    postDiscordMessage(values);
    postApplication(values);
    postEmailApplication(values);
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
          ref={formRef}
          name="basic"
          layout="vertical"
          initialValues={{
            cofounder: [],
          }}
          style={{ maxWidth: "900px" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={[18, 18]}>
            <Divider orientation="left">{"COMPANY INFO"}</Divider>
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
                    required: true,
                    message: "Please enter your email!",
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
                    required: true,
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
