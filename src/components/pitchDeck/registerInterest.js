import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
const CollectionCreateForm = ({ open, onCreate, handleAction }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title="Thanks for Viewing Pitchdeck.lk"
      closeIcon
      footer={[
        <Button
          key="link"
          type="primary"
          onClick={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
                handleAction();
                console.log(values);
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
        >
          {"check out the sample deck below 👇🏾"}
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: false,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export const RegisterInterest = () => {
  const [hasDoneSomething, setHasDoneSomething] = useState(false);

  useEffect(() => {
    // Check if the user has already done something in local storage when the component mounts
    const hasDoneSomethingValue = localStorage.getItem("hasDoneSomething");
    console.log(hasDoneSomethingValue);
    if (hasDoneSomethingValue === "true") {
      setHasDoneSomething(false);
    } else {
      setHasDoneSomething(true);
    }
  }, []);

  const handleAction = () => {
    // Perform the action you want to remember here
    // ...

    // Set the value in local storage to indicate that the user has done something
    localStorage.setItem("hasDoneSomething", "true");
    setHasDoneSomething(false); // Update the state to reflect the action
  };
  const onCreate = (values) => {
    console.log("Received values of form: ", values, {
      companyName: "techForGood",
    });
    setHasDoneSomething(false);
  };
  return (
    <div>
      <CollectionCreateForm
        open={hasDoneSomething}
        onCreate={onCreate}
        handleAction={handleAction}
      />
    </div>
  );
};
