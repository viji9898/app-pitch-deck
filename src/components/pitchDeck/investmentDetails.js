import { Card } from "antd";

export const InvestmentDetails = ({ investmentDetails }) => {
  return (
    <Card
      title={"Investment details"}
      style={{ width: "100%", marginTop: "10px" }}
    >
      {investmentDetails}
    </Card>
  );
};
