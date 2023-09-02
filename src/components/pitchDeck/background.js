import { Card } from "antd";

export const Background = ({ background }) => {
  return (
    <Card
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "392px",
        marginBottom: "-50px",
      }}
    ></Card>
  );
};
