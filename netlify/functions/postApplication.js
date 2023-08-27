const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  });
  const body = JSON.parse(event.body);
  const applicationData = body.params;

  return client
    .query(
      // q.Let(
      //   {
      //     userExists: q.Exists(
      //       q.Match(q.Index("applicant_by_email"), applicationData.email)
      //     ),
      //   },
      //   q.If(
      //     q.Var("userExists"),
      //     "User Exists - Terminate",
      //     q.Create(q.Collection("Applicants"), {
      //       data: { ...applicationData, contacted: false },
      //     })
      //   )
      // )
      q.Create(q.Collection("Applications"), {
        data: { ...applicationData, contacted: false },
      })
    )
    .then((response) => {
      console.log("success", response);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
