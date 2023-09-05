import {
  HomeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

export const companyPitchData = [
  {
    pitchId: "123456",
    paid: true,
    pitchUrl: "tech-for-good",
    metaTags: {
      ogTitle: "Viso - Pitch Deck",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pd/in/viso",
      ogDescription:
        "Viso Eduhub, which provides comprehensive information on courses offered by both government and private institutes. Our platform make it easier for students to search and find the courses they need. Additionally, we are a Level 1 seller on the Fiverr platform. In addition to our website, we are currently developing a school database management system.",
    },
    overview: {
      companyName: "techForGood",
      description:
        "We empower through immersive coding bootcamps, blending tech skills and entrepreneurial mindset. Bridging education and industry, we connect graduates with tech careers, driving individual growth and societal impact.",
      socialLinks: [
        {
          type: "website",
          url: "https://tfg.lk",
          icon: <HomeOutlined />,
        },
        {
          type: "linkedin",
          url: "https://www.linkedin.com/company/techforgood-lk/",
          icon: <LinkedinOutlined />,
        },
        {
          type: "instagram",
          url: "https://www.instagram.com/techforgood_lk/",
          icon: <InstagramOutlined />,
        },
        {
          type: "Facebook",
          url: "https://www.facebook.com/profile.php?id=100094714128169",
          icon: <FacebookOutlined />,
        },
      ],
      companyAvatar:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/Learn/gmail-profile-pic-500px.png",
      tags: [
        {
          color: "#f2b823",
          title: "Pre-Seed",
        },
        {
          color: "cyan",
          title: "EdTech",
        },
        {
          color: "salmon",
          title: "Impact",
        },
      ],
      investmentOverviewDescription: (
        <div>
          <p>
            <strong>{"Tagert Close:"}</strong>
            {" LKR5,000,000"}
          </p>
          <p>
            <strong>{"Next Step: "}</strong>
            {"Scaling our impact & building out our tech platform"}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Simple_agreement_for_future_equity"
          >
            {"SAFE Investment Scheme"}
          </a>
        </div>
      ),
    },
    additionalInfo: {
      vision:
        "Tech For Good is committed to transforming lives through immersive coding bootcamps. Our goal is to empower individuals with technical skills, an entrepreneurial mindset, and connections to launch successful tech careers and drive positive change.",
      problem:
        "Many motivated individuals lack access to quality tech education, hindering their entry into the industry. Traditional education often falls short in providing the necessary skills. Furthermore, the gap between tech skills and entrepreneurship knowledge, coupled with limited industry connections, poses a barrier to career entry.",
      solution:
        "Tech For Good's solution combines intensive coding bootcamps, entrepreneurship training, and industry partnerships. Our immersive programs equip individuals with coding expertise and an entrepreneurial outlook. By partnering with hiring companies, we create pathways to connect skilled graduates with tech career opportunities, enabling them to thrive in the industry and make meaningful contributions.",
    },
    advisorData: [
      {
        name: "Chantal S",
        description:
          "Focus on Social protection with experience at the intersection of the international humanitarian and development spaces gained working with governments, NGOs and international organizations in both field and HQ positions.",
        social: "",
        linkedin: "https://www.linkedin.com/in/chantal-sirisena/",
        avatarUrl:
          "https://media.licdn.com/dms/image/D4D03AQFH9Z5rVSQqjw/profile-displayphoto-shrink_200_200/0/1664619626301?e=1698278400&v=beta&t=Man4wOyO50ols3UiTVp_ZR0BQD8QJPGbtmRbiAAdnKo",
      },
      {
        name: "Nahil W",
        description:
          "Chairman and CEO at East - West Group of Companies, working of social projects and supporting social enterprises through my foundation.",
        social: "",
        linkedin: "https://www.linkedin.com/in/nahil-wijesuriya-a3876622/",
        avatarUrl:
          "https://media.licdn.com/dms/image/C4D03AQF0QfLR1OCOcg/profile-displayphoto-shrink_200_200/0/1516980937791?e=1698278400&v=beta&t=RLRq4TX-kbbvnCgpXlS_k4IY-BCQykoOIBmhCtoz8rQ",
      },
    ],
    founderData: [
      {
        name: "Viji W",
        description:
          "I am coder and I am passionate about teaching tech and upskill people into a career in tech",
        linkedin: "https://www.linkedin.com/in/vijiw/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl:
          "https://media.licdn.com/dms/image/C4D03AQGQgyGQIQW5Hw/profile-displayphoto-shrink_200_200/0/1663690442529?e=1698278400&v=beta&t=O4DvcduPgOYFL1D2GX97lPG3UmK9xtrsZ3F7ZiZxhws",
      },
      {
        name: "Imran H",
        description:
          "Coder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse auctos ",
        social: "",
        linkedin: "https://www.linkedin.com/in/imranhishaam/",
        avatarUrl:
          "https://media.licdn.com/dms/image/D5603AQHOaNnbredo7w/profile-displayphoto-shrink_200_200/0/1674912962387?e=1698278400&v=beta&t=vnC07emdnVBa9TuYbv5SqDByj0SGSdAnRTmaq6ndG8Q",
      },
    ],
    pitchMaterial: {
      mission: `"Our Mission: to upskill a nation!"`,
      pitchVideoDesktop:
        "https://player.vimeo.com/video/857861963?h=9b6bbf4f86&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      pitchVideoMobie:
        "https://player.vimeo.com/video/858184804?h=5d33777548&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vTX1g-yLFKUAgxYA0-Pu_qsunpOHDkuk6eSZKooQIeLzXLefTMOe24JegSIesv9XztWwOkDvsJ9wYn3/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vT5cbIZnG-Q7uQjHA7DkYwj6_NxBQels6isl1HuEb7GKl3ntaGLVbYm_yh7kgsBhzpgcQUC16yTXueA/embed?start=false&loop=false&delayms=3000",
    },
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-tech-for-good/hero-image-abstract.jpg",

    interested: {
      companyName: "techForGood",
      discordWebhook:
        "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703",
      emailFounder: "hello@techforgood.lk",
      backgroundColor: "#f2b823",
      companyLogo: "",
    },
    investmentDetails: (
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <h3>Raising</h3>
          <p style={{ fontSize: "40px" }}>Rs.5,000,000</p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h3>Scheme:</h3>
          <p>{"SAFE Investment Scheme"}</p>
          <h3>Target Close</h3>
          <p>{"23 Sept 2023"}</p>
        </Col>
      </Row>
    ),
  },
  {
    pitchId: "123456",
    pitchUrl: "viso",
    metaTags: {
      ogTitle: "Viso - Pitch Deck",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pd/in/viso",
      ogDescription:
        "Viso Eduhub, which provides comprehensive information on courses offered by both government and private institutes. Our platform make it easier for students to search and find the courses they need. Additionally, we are a Level 1 seller on the Fiverr platform. In addition to our website, we are currently developing a school database management system.",
    },
    paid: false,
    overview: {
      companyName: "Viso",
      description:
        "Begin with a brief introduction of your company and its background. Mention when and why the company was founded. Highlight any notable achievements or milestones.",
      socialLinks: [
        {
          type: "website",
          url: "https://tfg.lk",
          icon: <HomeOutlined />,
        },
        {
          type: "linkedin",
          url: "https://www.linkedin.com/company/techforgood-lk/",
          icon: <LinkedinOutlined />,
        },
        {
          type: "instagram",
          url: "https://www.instagram.com/techforgood_lk/",
          icon: <InstagramOutlined />,
        },
        {
          type: "Facebook",
          url: "https://www.facebook.com/profile.php?id=100094714128169",
          icon: <FacebookOutlined />,
        },
      ],
      companyAvatar:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/templete-logo.png",
      tags: [
        {
          color: "#f2b823",
          title: "Pre-Seed",
        },
        {
          color: "cyan",
          title: "EdTech",
        },
        {
          color: "salmon",
          title: "Impact",
        },
      ],
      investmentOverviewDescription: (
        <div>
          <p>
            <strong>{"Tagert Close:"}</strong>
            {
              "Mention how much your trying to raise, remember your investor will want a breakdown of your expenditure"
            }
          </p>
          <p>
            <strong>{"Next Step: "}</strong>
            {"You can give an overview of how you plan to utilise the funds"}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Simple_agreement_for_future_equity"
          >
            {"SAFE Investment Scheme"}
          </a>
        </div>
      ),
    },
    additionalInfo: {
      vision: (
        <div>
          <p>
            {"Here are a few examples of well-known company vision statements:"}
          </p>
          <ul>
            <li>
              <b>{"Google: "}</b>
              {"To provide access to the world's information in one click."}
            </li>
            <li>
              <b>{"Tesla: "}</b>
              {
                "To create the most compelling car company of the 21st century by driving the world's transition to electric vehicles."
              }
            </li>
            <li>
              <b>{"Microsoft: "}</b>
              {
                "Empower every person and every organization on the planet to achieve more."
              }
            </li>
            <li>
              <b>{"techForGood: "}</b>
              {"UpSkill a Nation"}
            </li>
          </ul>
        </div>
      ),
      problem: `A problem statement is a concise description of an issue, challenge, or obstacle that needs to be addressed or solved. It serves as a clear and specific articulation of the problem at hand, making it easier for individuals or organizations to understand, analyze, and ultimately work toward finding a solution.`,
      solution:
        "A solution statement is a concise and clear description of the proposed solution to a problem or challenge that has been previously identified through a problem statement. It outlines the actions, strategies, or methods that will be implemented to address and resolve the problem effectively.",
    },
    advisorData: [
      {
        name: "Chantal S",
        description:
          "Focus on Social protection with experience at the intersection of the international humanitarian and development spaces gained working with governments, NGOs and international organizations in both field and HQ positions.",
        social: "",
        linkedin: "https://www.linkedin.com/in/chantal-sirisena/",
        avatarUrl:
          "https://media.licdn.com/dms/image/D4D03AQFH9Z5rVSQqjw/profile-displayphoto-shrink_200_200/0/1664619626301?e=1698278400&v=beta&t=Man4wOyO50ols3UiTVp_ZR0BQD8QJPGbtmRbiAAdnKo",
      },
      {
        name: "Nahil W",
        description:
          "Chairman and CEO at East - West Group of Companies, working of social projects and supporting social enterprises through my foundation.",
        social: "",
        linkedin: "https://www.linkedin.com/in/nahil-wijesuriya-a3876622/",
        avatarUrl:
          "https://media.licdn.com/dms/image/C4D03AQF0QfLR1OCOcg/profile-displayphoto-shrink_200_200/0/1516980937791?e=1698278400&v=beta&t=RLRq4TX-kbbvnCgpXlS_k4IY-BCQykoOIBmhCtoz8rQ",
      },
    ],
    founderData: [
      {
        name: "Viji W",
        description:
          "I am coder and I am passionate about teaching tech and upskill people into a career in tech",
        linkedin: "https://www.linkedin.com/in/vijiw/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl:
          "https://media.licdn.com/dms/image/C4D03AQGQgyGQIQW5Hw/profile-displayphoto-shrink_200_200/0/1663690442529?e=1698278400&v=beta&t=O4DvcduPgOYFL1D2GX97lPG3UmK9xtrsZ3F7ZiZxhws",
      },
      {
        name: "Imran H",
        description:
          "Coder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse auctos ",
        social: "",
        linkedin: "https://www.linkedin.com/in/imranhishaam/",
        avatarUrl:
          "https://media.licdn.com/dms/image/D5603AQHOaNnbredo7w/profile-displayphoto-shrink_200_200/0/1674912962387?e=1698278400&v=beta&t=vnC07emdnVBa9TuYbv5SqDByj0SGSdAnRTmaq6ndG8Q",
      },
    ],
    pitchMaterial: {
      mission: `"You Company Tagline Here"`,
      pitchVideoDesktop: "https://player.vimeo.com/video/87110435?h=f253e737bd",
      pitchVideoMobie: "https://player.vimeo.com/video/829691380?h=fc6c6c52d9",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vQYZrL8VPm-J9I2Naru4_vm1uLc_TfV2-F1SLVQjoR1AuHnFHgo-V71aGymH4P4l7eL_b4eqdlIzTMb/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vQczXbfp6UXW7WJo5m20PvlyWaUwrzivV92HIASDp58nilmL4c7_7AzRgrcTc-P533WRlTEyHfS3wen/embed?start=false&loop=false&delayms=3000",
    },
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/pitch-deck-template-banner-01.png",

    interested: {
      companyName: "Your-Company-Name",
      discordWebhook:
        "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703",
      emailFounder: "hello@techforgood.lk",
      backgroundColor: "#f2b823",
      companyLogo: "",
    },
    investmentDetails: (
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <h3>Raising</h3>
          <p style={{ fontSize: "40px" }}>Rs.5,000,000</p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h3>Scheme:</h3>
          <p>{"SAFE Investment Scheme"}</p>
          <h3>Target Close</h3>
          <p>{"23 Sept 2023"}</p>
        </Col>
      </Row>
    ),
  },
  {
    pitchId: "123456",
    pitchUrl: "template",
    metaTags: {
      ogTitle: "tempplate - Pitch Deck",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pd/in/template",
      ogDescription: "Template deck showing the outline of a pitch deck",
    },
    paid: false,
    overview: {
      companyName: "Your-Company-Name",
      description:
        "Begin with a brief introduction of your company and its background. Mention when and why the company was founded. Highlight any notable achievements or milestones.",
      socialLinks: [
        {
          type: "website",
          url: "https://tfg.lk",
          icon: <HomeOutlined />,
        },
        {
          type: "linkedin",
          url: "https://www.linkedin.com/company/techforgood-lk/",
          icon: <LinkedinOutlined />,
        },
        {
          type: "instagram",
          url: "https://www.instagram.com/techforgood_lk/",
          icon: <InstagramOutlined />,
        },
        {
          type: "Facebook",
          url: "https://www.facebook.com/profile.php?id=100094714128169",
          icon: <FacebookOutlined />,
        },
      ],
      companyAvatar:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/templete-logo.png",
      tags: [
        {
          color: "#f2b823",
          title: "Pre-Seed",
        },
        {
          color: "cyan",
          title: "EdTech",
        },
        {
          color: "salmon",
          title: "Impact",
        },
      ],
      investmentOverviewDescription: (
        <div>
          <p>
            <strong>{"Tagert Close:"}</strong>
            {
              "Mention how much your trying to raise, remember your investor will want a breakdown of your expenditure"
            }
          </p>
          <p>
            <strong>{"Next Step: "}</strong>
            {"You can give an overview of how you plan to utilise the funds"}
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Simple_agreement_for_future_equity"
          >
            {"SAFE Investment Scheme"}
          </a>
        </div>
      ),
    },
    additionalInfo: {
      vision: (
        <div>
          <p>
            {"Here are a few examples of well-known company vision statements:"}
          </p>
          <ul>
            <li>
              <b>{"Google: "}</b>
              {"To provide access to the world's information in one click."}
            </li>
            <li>
              <b>{"Tesla: "}</b>
              {
                "To create the most compelling car company of the 21st century by driving the world's transition to electric vehicles."
              }
            </li>
            <li>
              <b>{"Microsoft: "}</b>
              {
                "Empower every person and every organization on the planet to achieve more."
              }
            </li>
            <li>
              <b>{"techForGood: "}</b>
              {"UpSkill a Nation"}
            </li>
          </ul>
        </div>
      ),
      problem: `A problem statement is a concise description of an issue, challenge, or obstacle that needs to be addressed or solved. It serves as a clear and specific articulation of the problem at hand, making it easier for individuals or organizations to understand, analyze, and ultimately work toward finding a solution.`,
      solution:
        "A solution statement is a concise and clear description of the proposed solution to a problem or challenge that has been previously identified through a problem statement. It outlines the actions, strategies, or methods that will be implemented to address and resolve the problem effectively.",
    },
    advisorData: [
      {
        name: "Chantal S",
        description:
          "Focus on Social protection with experience at the intersection of the international humanitarian and development spaces gained working with governments, NGOs and international organizations in both field and HQ positions.",
        social: "",
        linkedin: "https://www.linkedin.com/in/chantal-sirisena/",
        avatarUrl:
          "https://media.licdn.com/dms/image/D4D03AQFH9Z5rVSQqjw/profile-displayphoto-shrink_200_200/0/1664619626301?e=1698278400&v=beta&t=Man4wOyO50ols3UiTVp_ZR0BQD8QJPGbtmRbiAAdnKo",
      },
      {
        name: "Nahil W",
        description:
          "Chairman and CEO at East - West Group of Companies, working of social projects and supporting social enterprises through my foundation.",
        social: "",
        linkedin: "https://www.linkedin.com/in/nahil-wijesuriya-a3876622/",
        avatarUrl:
          "https://media.licdn.com/dms/image/C4D03AQF0QfLR1OCOcg/profile-displayphoto-shrink_200_200/0/1516980937791?e=1698278400&v=beta&t=RLRq4TX-kbbvnCgpXlS_k4IY-BCQykoOIBmhCtoz8rQ",
      },
    ],
    founderData: [
      {
        name: "Viji W",
        description:
          "I am coder and I am passionate about teaching tech and upskill people into a career in tech",
        linkedin: "https://www.linkedin.com/in/vijiw/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl:
          "https://media.licdn.com/dms/image/C4D03AQGQgyGQIQW5Hw/profile-displayphoto-shrink_200_200/0/1663690442529?e=1698278400&v=beta&t=O4DvcduPgOYFL1D2GX97lPG3UmK9xtrsZ3F7ZiZxhws",
      },
      {
        name: "Imran H",
        description:
          "Coder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse auctos ",
        social: "",
        linkedin: "https://www.linkedin.com/in/imranhishaam/",
        avatarUrl:
          "https://media.licdn.com/dms/image/D5603AQHOaNnbredo7w/profile-displayphoto-shrink_200_200/0/1674912962387?e=1698278400&v=beta&t=vnC07emdnVBa9TuYbv5SqDByj0SGSdAnRTmaq6ndG8Q",
      },
    ],
    pitchMaterial: {
      mission: `"You Company Tagline Here"`,
      pitchVideoDesktop: "https://player.vimeo.com/video/87110435?h=f253e737bd",
      pitchVideoMobie: "https://player.vimeo.com/video/829691380?h=fc6c6c52d9",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vQYZrL8VPm-J9I2Naru4_vm1uLc_TfV2-F1SLVQjoR1AuHnFHgo-V71aGymH4P4l7eL_b4eqdlIzTMb/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vQczXbfp6UXW7WJo5m20PvlyWaUwrzivV92HIASDp58nilmL4c7_7AzRgrcTc-P533WRlTEyHfS3wen/embed?start=false&loop=false&delayms=3000",
    },
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/pitch-deck-template-banner-01.png",

    interested: {
      companyName: "Your-Company-Name",
      discordWebhook:
        "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703",
      emailFounder: "hello@techforgood.lk",
      backgroundColor: "#f2b823",
      companyLogo: "",
    },
    investmentDetails: (
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <h3>Raising</h3>
          <p style={{ fontSize: "40px" }}>Rs.5,000,000</p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h3>Scheme:</h3>
          <p>{"SAFE Investment Scheme"}</p>
          <h3>Target Close</h3>
          <p>{"23 Sept 2023"}</p>
        </Col>
      </Row>
    ),
  },
];
