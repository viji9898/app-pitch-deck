const axios = require("axios");

exports.handler = async (event) => {
  try {
    // Parse the incoming request body
    const body = JSON.parse(event.body);
    const {
      companyName,
      companyUrl,
      descriptionCompany,
      companyCategory,
      traction,
      revenue,
      socialImpact,
      founderEmail,
      founderName,
      founderNumber,
      linkedinUrl,
      cofounder,
    } = body.values;

    // listing cofounders in webhook discord format

    const listCofounders = cofounder
      ? cofounder.map((data) => {
          return {
            name: "Co-founders",
            value: data.cofounderEmail,
            inline: true,
          };
        })
      : {
          name: "Co-founders",
          value: "null",
          inline: true,
        };

    // Discord webhook URL
    const webhookURL =
      "https://discord.com/api/webhooks/1145416358000074792/agEIlx9UNsjrgIIY4dF3EJW6t-PcVieuyOKNXjJJE8KH_oooZsZ94u7CF8aiNM8obPqT";

    // Your message to be sent to Discord
    const discordMessage = {
      // content: `New message from Message from techForGood.lk\n*Customer Inquiry form*\n *NAME*: ${name}\n *EMAIL:* ${email}\n*NNUMBER:* ${number}\n*MESSAGE*: ${message}`,
      embeds: [
        {
          author: {
            name: "Application",
            url: "https://www.pitchdeck.lk",
            icon_url:
              "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/cyberSunil-profile-01.png",
          },
          title: companyName,
          // url: companyUrl,
          description: "Application recieved for a pitchdeck",
          color: 15258703,
          fields: [
            {
              name: "Company Name",
              value: companyName,
              inline: true,
            },
            {
              name: "Company Url",
              value: companyUrl,
              inline: true,
            },
            {
              name: "Description of Company",
              value: descriptionCompany,
            },
            {
              name: "Catagory",
              value: companyCategory,
              inline: true,
            },
            {
              name: "Are people using your product?",
              value: traction ? "Yes" : "No",
              inline: true,
            },
            {
              name: "Do have revenue?",
              value: revenue ? "Yes" : "No",
              inline: true,
            },
            {
              name: "Social Impact?",
              value: socialImpact ? "Yes" : "No",
              inline: true,
            },
            {
              name: "Founder Name",
              value: founderName,
              inline: true,
            },

            {
              name: "Founder Email",
              value: founderEmail,
              inline: true,
            },
            {
              name: "Contact Number",
              value: founderNumber,
              inline: true,
            },
            {
              name: "Linkedin",
              value: linkedinUrl ? linkedinUrl : "null",
              inline: true,
            },

            ...listCofounders,

            {
              name: "Thanks!",
              value: "",
            },
          ],
          thumbnail: {
            url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/gmail-profile-pic-500px.png",
          },
          image: {
            url: "",
          },
          footer: {
            text: "Please use the ✅ once you have seen the message",
            icon_url:
              "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/cyberSunil-profile-01.png",
          },
        },
      ],
    };

    // Send the POST request using Axios
    await axios.post(webhookURL, discordMessage);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent to Discord successfully" }),
    };
  } catch (error) {
    console.error("Error sending message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error sending message to Discord" }),
    };
  }
};
