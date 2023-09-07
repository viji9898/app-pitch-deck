import { Card } from "antd";

export const InvestmentDetails = ({ investmentDetails }) => {
  return (
    <Card
      title={"Investment details"}
      style={{ width: "100%", margin: "10px 0px" }}
    >
      {investmentDetails}
    </Card>
  );
};
