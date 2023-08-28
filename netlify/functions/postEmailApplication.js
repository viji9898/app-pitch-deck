const sgMail = require("@sendgrid/mail");

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body);
    const { companyName, founderEmail } = body.values; // Destructure directly from body object
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: founderEmail, // Change to your recipient
      from: "hello@techforgood.lk", // Change to your verified sender
      templateId: "d-c0622a41aea84636aa1ddfe81f8344b2",
      dynamic_template_data: {
        companyName: companyName,
      },
    };

    await sgMail.send(msg); // Use await to wait for the email sending process

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent via SendGrid - Success!" }),
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending message via SendGrid" }),
    };
  }
};
