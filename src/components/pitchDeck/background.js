import { Card, Grid } from "antd";

export const Background = ({ background, backgroundMobile }) => {
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  return (
    <Card
      style={{
        backgroundImage: `url(${
          md ? background : backgroundMobile ? backgroundMobile : background
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "392px",
        // marginBottom: "-50px",
        marginBottom: "5px",
      }}
    ></Card>
  );
};
