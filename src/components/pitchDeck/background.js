import { Card } from "antd";

export const Background = () => {
  return (
    <Card
      style={{
        backgroundImage: `url(https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/hero-image-abstract.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "1128px",
        height: "392px",
      }}
    ></Card>
  );
};
