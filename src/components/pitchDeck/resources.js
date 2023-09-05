import { Button, Col, Divider, Row, Tooltip } from "antd";
import { SelectOutlined } from "@ant-design/icons";

export const Resources = () => {
  const examplePitchDecks = [
    {
      title: "Tranfser-Wise",
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/example-pitch-decks/Transferwise-pitch-deck.pdf",
      tooltip: "Transferwise is a billion dollar currency transfer startup",
    },
    {
      title: "Revoult",
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/example-pitch-decks/Revolut-Pitch-Deck.pdf",
      tooltip: "One of the first digital banks in the UK",
    },
    {
      title: "Dropbox",
      url: "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/example-pitch-decks/Dropbox-Pitch-Deck-PDF.pdf",
      tooltip: "File shareing platform",
    },
  ];

  const tools = [
    {
      title: "Canva",
      url: "https://canva.com",
      tooltip: "Great for tool for presentations and creating artwork",
    },
    {
      title: "Pitch",
      url: "https://pitch.com",
      tooltip: "Great for tool for presentations and creating artwork",
    },
    {
      title: "Vimeo",
      url: "https://vimeo.com",
      tooltip: "Great tool for create videos and editing",
    },
    {
      title: "Discord",
      url: "https://discord.com",
      tooltip: "This is our communication platform",
    },
  ];

  const listPitchDeck = examplePitchDecks.map((data) => {
    return (
      <Tooltip placement="top" title={data.tooltip}>
        <Button
          target="_blank"
          rel="nonferrer"
          href={data.url}
          style={{ margin: "2px 2px" }}
        >
          {data.title}
        </Button>
      </Tooltip>
    );
  });
  const listTools = tools.map((data) => {
    return (
      <Tooltip placement="top" title={data.tooltip}>
        <Button
          target="_blank"
          rel="nonferrer"
          href={data.url}
          style={{ margin: "2px 2px" }}
        >
          {data.title}
        </Button>
      </Tooltip>
    );
  });

  return (
    <div className="main">
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <Divider>{"Examples Pitch Deck"}</Divider>
          <div style={{ display: "flex" }}>{listPitchDeck}</div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Divider>{"Useful tools"}</Divider>
          <div style={{ display: "flex" }}>{listTools}</div>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Button
            href="https://pitch.techforgood.lk"
            target="_blank"
            rel="nonferrer"
            shape="round"
          >
            <SelectOutlined style={{ verticalAlign: "baseline" }} />
            {"https://pitch.techforgood.lk"}
          </Button>
          <br></br>
          <small>Check out this live pitch</small>
        </Col>
      </Row>
    </div>
  );
};
