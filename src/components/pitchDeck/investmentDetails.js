import { Card, Col, Row } from "antd";

export const InvestmentDetails = ({ investmentDetails }) => {
  return (
    <Card title={"Investment details"} style={{ width: "100%" }}>
      {investmentDetails}
    </Card>
  );
};
