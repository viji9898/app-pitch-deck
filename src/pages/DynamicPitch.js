import { useParams } from "react-router-dom";
import { Overview } from "../components/pitchDeck/overview";
import { Background } from "../components/pitchDeck/background";
import { AdditionalInfo } from "../components/pitchDeck/additionalInfo";
import { InvestmentDetails } from "../components/pitchDeck/investmentDetails";
import { FooterDetails } from "../components/pitchDeck/footerDetails";
import { useEffect, useState } from "react";
import { companyPitchData } from "../components/pitchData/companyPitchData";
import { Row } from "antd";
import { ThePitch } from "../components/pitchDeck/thePitch";
import { Founder } from "../components/pitchDeck/founders";
import { Advisors } from "../components/pitchDeck/advisors";
import { NotFound } from "../utils/notFound";
import { Interested } from "../components/pitchDeck/interested";

export const DynamicPitch = () => {
  const { pitchUrl } = useParams();
  const [pitchData, setPitchData] = useState({
    pitchUrl: "",
    pitchMaterial: "",
    additionalInfo: "",
    advisorData: [],
    founderData: [],
    interested: {
      backgroundColor: "",
    },
    overview: {
      companyName: "",
      description: "",
      socialLinks: [],
      companyAvatar: "",
      tags: [
        {
          color: "",
          title: "",
        },
      ],
      investmentOverviewDescription: "",
      investmentDetails: "",
    },
  });

  useEffect(() => {
    const selectedPitch = companyPitchData.find(
      (data) => data.pitchUrl === pitchUrl
    );
    setPitchData(selectedPitch);
  }, [pitchUrl]);
  console.log(pitchData);
  return (
    <div className="main" style={{ margin: "15px" }}>
      {pitchData ? (
        <Row
          gutter={[18, 18]}
          id="example-pitch-deck"
          style={{
            maxWidth: "1050px",
            //adjust for overall page width layout
            justifyContent: "center",
          }}
        >
          <Background background={pitchData.background} />
          <Overview pitchData={pitchData} />
          <ThePitch pitchMaterial={pitchData.pitchMaterial} />
          <AdditionalInfo additionalInfo={pitchData.additionalInfo} />
          <Founder founderData={pitchData.founderData} />
          <Advisors advisorData={pitchData.advisorData} />
          <InvestmentDetails investmentDetails={pitchData.investmentDetails} />
          <Interested interested={pitchData.interested} paid={pitchData.paid} />
          <FooterDetails />
        </Row>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
