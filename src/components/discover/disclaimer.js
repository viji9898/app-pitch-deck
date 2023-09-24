import { Col, Divider } from "antd";

export const Disclaimer = () => {
  return (
    <Col span={24}>
      <Divider />
      <small>
        <p>
          {
            "Investing involves risks, including loss of capital, illiquidity, lack of dividends and dilution, and should be done only as part of a diversified portfolio. Please read the Risk Warnings before investing. Investments should only be made by investors who understand these risks. Tax treatment depends on individual circumstances and is subject to change in future."
          }
        </p>
        <p>
          {
            "Seedrs does not make investment recommendations to you. No communications from Seedrs, through this website or any other medium, should be construed as an investment recommendation. Further, nothing on this website shall be considered an offer to sell, or a solicitation of an offer to buy, any security to any person in any jurisdiction to whom or in which such offer, solicitation or sale is unlawful. Seedrs does not provide legal, financial or tax advice of any kind. If you have any questions with respect to legal, financial or tax matters relevant to your interactions with Seedrs, you should consult a professional adviser."
          }
        </p>
      </small>
    </Col>
  );
};
