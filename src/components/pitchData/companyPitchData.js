import {
  HomeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Alert, Col, Row } from "antd";

export const companyPitchData = [
  {
    pitchId: "123456",
    paid: true,
    pitchUrl: "tech-for-good",
    metaTags: {
      ogTitle: "Viso - Pitch Deck",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pitchdeck.lk/in/viso",
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
    pitchUrl: "viso-learn",
    metaTags: {
      ogTitle: "Viso Learn - Pitch Deck",
      lastModified: "2023-09-05 11:05:53 UTC",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pd/in/viso",
      ogDescription:
        "Viso Eduhub, which provides comprehensive information on courses offered by both government and private institutes. Our platform make it easier for students to search and find the courses they need. Additionally, we are a Level 1 seller on the Fiverr platform. In addition to our website, we are currently developing a school database management system.",
    },
    paid: false,
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/placeholder-image-1050-390.png",
    overview: {
      companyName: "Viso Learn",
      description:
        "Viso Learn is dedicated to simplifying and streamlining student education. To achieve this, we offer a range of software applications, including a school database management system aimed at easing administrative tasks, thus saving valuable time for teachers and staff. Additionally, we are developing a peer-to-peer learning platform to foster collaborative learning. Our Eduhub, which showcases courses offered by various universities, was successfully launched in July 2023.",
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
            <strong>{"Tagert Close:USD13,000"}</strong>
            {
              "Our initial goal is to captivate the school management database around Sri Lankan schools."
            }
          </p>
          <p>
            <strong>{"Next Step: "}</strong>
            {
              "Software Development Cost: $10000, Marketing Cost: $1000, Annual Hosting & Maintenance Cost: $250, Annual Salary for Data entry person: $1200"
            }
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
            {
              "Connect students worldwide, creating opportunities for collaborative learning."
            }
          </p>
        </div>
      ),
      problem: `While numerous technologies revolutionize various sectors, certain countries lag in adopting modern methods to manage education. This makes it hard for students to get learning materials, opportunities for higher education, and study together with peers.`,
      solution:
        "To address these challenges and simplify the student experience, we're creating a suite of software applications. This includes a school database management system to streamline administrative tasks, freeing up time for teachers and staff. Additionally, we're designing a peer-to-peer learning platform to encourage collaborative learning. Our Eduhub also features courses from diverse universities.",
    },
    founderData: [
      {
        name: "your name",
        description: "Talk about yourself and your experience ",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/viji",
      },
      {
        name: "CTO person",
        description: "Talk about yourself and your experience ",
        social: "",
        linkedin: "https://www.linkedin.com/",
        avatarUrl: "https://robohash.org/imran",
      },
    ],
    advisorData: [
      {
        name: "your advisor",
        description: "Talk about advisors experience",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/chantal",
      },
      {
        name: "your advisor",
        description: "Talk about advisors experience",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/sirisena",
      },
    ],

    pitchMaterial: {
      mission: `"Revolutionize education!"`,
      pitchVideoDesktop: "https://player.vimeo.com/video/87110435?h=f253e737bd",
      pitchVideoMobie: "https://player.vimeo.com/video/829691380?h=fc6c6c52d9",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vQYZrL8VPm-J9I2Naru4_vm1uLc_TfV2-F1SLVQjoR1AuHnFHgo-V71aGymH4P4l7eL_b4eqdlIzTMb/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vQczXbfp6UXW7WJo5m20PvlyWaUwrzivV92HIASDp58nilmL4c7_7AzRgrcTc-P533WRlTEyHfS3wen/embed?start=false&loop=false&delayms=3000",
    },
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
          <p style={{ fontSize: "40px" }}>USD13,000</p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h3>Scheme:</h3>
          <p>{"SAFE Investment Scheme"}</p>
          <h3>Target Close</h3>
          <p>{"01 Dec 2023"}</p>
        </Col>
      </Row>
    ),
  },
  {
    pitchId: "123456",
    pitchUrl: "dev-shmay",
    metaTags: {
      ogTitle: "Shmay - Pitch Deck",
      lastModified: "2023-09-05 11:05:53 UTC",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pitchdeck/in/shmay",
      ogDescription:
        "Template deck provides an outline of how to create your pitch deck. Follow the guidence and examples to get you started",
    },
    paid: false,
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/placeholder-image-1050-390.png",
    overview: {
      companyName: "Shmay",
      description: (
        <Alert
          message="Guidance:"
          description="Begin with a brief introduction of your company and its background. Mention when and why the company was founded. Highlight any notable achievements or milestones."
          type="info"
        />
      ),
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
          url: "https://www.instagram.com/shmayofficial/",
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
        <Alert
          message="Guidance:"
          description={
            <div>
              <p>
                <strong>{"Tagert Close:"}</strong>
                {
                  "Mention how much your trying to raise, remember your investor will want a breakdown of your expenditure"
                }
              </p>
              <p>
                <strong>{"Next Step: "}</strong>
                {
                  "You can give an overview of how you plan to utilise the funds"
                }
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Simple_agreement_for_future_equity"
              >
                {"SAFE Investment Scheme"}
              </a>
            </div>
          }
          type="warning"
        />
      ),
    },
    pitchMaterial: {
      mission: (
        <Alert
          message="Guidance:"
          description={`"You Company Tagline Here", keep it concise and description`}
          type="info"
        />
      ),
      pitchVideoDesktop: "https://player.vimeo.com/video/87110435?h=f253e737bd",
      pitchVideoMobie: "https://player.vimeo.com/video/829691380?h=fc6c6c52d9",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vQYZrL8VPm-J9I2Naru4_vm1uLc_TfV2-F1SLVQjoR1AuHnFHgo-V71aGymH4P4l7eL_b4eqdlIzTMb/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vQczXbfp6UXW7WJo5m20PvlyWaUwrzivV92HIASDp58nilmL4c7_7AzRgrcTc-P533WRlTEyHfS3wen/embed?start=false&loop=false&delayms=3000",
    },
    additionalInfo: {
      vision: (
        <Alert
          message="Guidance:"
          description={
            <div>
              <p>
                {
                  "Here are a few examples of well-known company vision statements:"
                }
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
          }
          type="info"
        />
      ),

      problem: (
        <Alert
          message="Guidance:"
          description={`A problem statement is a concise description of an issue, challenge, or obstacle that needs to be addressed or solved. It serves as a clear and specific articulation of the problem at hand, making it easier for individuals or organizations to understand, analyze, and ultimately work toward finding a solution.`}
          type="info"
        />
      ),

      solution: (
        <Alert
          message="Guidance:"
          description={
            "A solution statement is a concise and clear description of the proposed solution to a problem or challenge that has been previously identified through a problem statement. It outlines the actions, strategies, or methods that will be implemented to address and resolve the problem effectively."
          }
          type="info"
        />
      ),
    },
    founderData: [
      {
        name: "your name",
        description: "Talk about yourself and your experience.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/viji",
      },
      {
        name: "CTO person",
        description: "Talk about yourself and your experience.",
        social: "",
        linkedin: "https://www.linkedin.com/",
        avatarUrl: "https://robohash.org/imran",
      },
    ],
    advisorData: [
      {
        name: "your advisor",
        description:
          "Talk about your advisors experience, focus on how it may relate to your project.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/chantal",
      },
      {
        name: "your advisor",
        description: "Talk about your advisors experience and success.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/sirisena",
      },
    ],

    interested: {
      companyName: "Your-Company-Name",
      discordWebhook:
        "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703",
      emailFounder: "founder@yexample.com",
      backgroundColor: "#f2b823",
      companyLogo: "",
    },
    investmentDetails: (
      <Alert
        message="Guidance:"
        description={
          <Row gutter={[18, 18]}>
            <Col xs={24} sm={24} md={12}>
              <h3>Raising</h3>
              <p style={{ fontSize: "20px" }}>
                Mention how much your trying to raise
              </p>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <h3>Scheme:</h3>
              <p>{"SAFE Investment Scheme"}</p>
              <h3>Target Close</h3>
              <p>{"You target date for closing the pitch"}</p>
            </Col>
          </Row>
        }
        type="warning"
      />
    ),
  },
  {
    pitchId: "123456",
    pitchUrl: "dev-v-stay",
    metaTags: {
      ogTitle: "V Stay - Pitch Deck",
      lastModified: "2023-09-05 11:05:53 UTC",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pd/in/template",
      ogDescription:
        "Your Passport to Exceptional Stays. Explore, Book, and Experience the Perfect Accommodations for Unforgettable Journeys.",
    },
    paid: false,
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/placeholder-image-1050-390.png",
    overview: {
      companyName: "V Stay",
      description:
        "Your Passport to Exceptional Stays. Explore, Book, and Experience the Perfect Accommodations for Unforgettable Journeys.",
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
        <Alert
          message="Guidance:"
          description={
            <div>
              <p>
                <strong>{"Tagert Close:"}</strong>
                {
                  "Mention how much your trying to raise, remember your investor will want a breakdown of your expenditure"
                }
              </p>
              <p>
                <strong>{"Next Step: "}</strong>
                {
                  "You can give an overview of how you plan to utilise the funds"
                }
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Simple_agreement_for_future_equity"
              >
                {"SAFE Investment Scheme"}
              </a>
            </div>
          }
          type="warning"
        />
      ),
    },
    pitchMaterial: {
      mission: (
        <Alert
          message="Guidance:"
          description={`"You Company Tagline Here", keep it concise and description`}
          type="info"
        />
      ),
      pitchVideoDesktop: "https://player.vimeo.com/video/87110435?h=f253e737bd",
      pitchVideoMobie: "https://player.vimeo.com/video/829691380?h=fc6c6c52d9",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vR79cG4PEiQoPz__-B-VKEysmeph8G0OhuhPqOdWsb0gkrv5kzBOzQz65nvvmisBjeBOdEIUW8eqZG-/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vR79cG4PEiQoPz__-B-VKEysmeph8G0OhuhPqOdWsb0gkrv5kzBOzQz65nvvmisBjeBOdEIUW8eqZG-/embed?start=false&loop=false&delayms=3000",
    },
    additionalInfo: {
      vision: `"Our vision at V Stay is to become the foremost global platform for travelers, where each individual is not just a guest, but a beloved member of our extended family. We aspire to continually innovate, offering a diverse array of accommodations, from cozy apartments to luxurious villas, ensuring that every traveler finds their perfect 'home away from home.' With our tagline, 'Discover your home away from home with V Stay,' we envision a world where travel is about forming meaningful connections and experiences with our ever-growing family of travelers."`,

      problem:
        "While existing platforms like Airbnb and others primarily serve as accommodation booking platforms, they often lack the ability to foster travel communities and connections among users. This limitation becomes even more pronounced in light of recent geopolitical tensions that have led to restrictions on Russian travelers’ access to international platforms. ‘V Stay’ recognizes the need for a platform that goes beyond mere bookings, providing a space where travelers can connect, chat, and share their travel experiences. By prioritizing the creation of a vibrant travel community, ‘V Stay’ aims to offer Russian travelers an inclusive and engaging platform for not only finding accommodations but also building meaningful connections and sharing travel stories. The challenge is to develop a user-centric platform that encourages interaction, cultural exchange, and a sense of belonging among Russian travelers while complying with current international restrictions.",

      solution: (
        <Alert
          message="Guidance:"
          description={
            "A solution statement is a concise and clear description of the proposed solution to a problem or challenge that has been previously identified through a problem statement. It outlines the actions, strategies, or methods that will be implemented to address and resolve the problem effectively."
          }
          type="info"
        />
      ),
    },
    founderData: [
      {
        name: "Vidusha Lakshan",
        description: "Talk about yourself and your experience.",
        linkedin: "https://www.linkedin.com/in/vidusha-lakshan-600574252/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/viji",
      },
      {
        name: "CTO person",
        description: "Talk about yourself and your experience.",
        social: "",
        linkedin: "https://www.linkedin.com/",
        avatarUrl: "https://robohash.org/imran",
      },
    ],
    advisorData: [
      {
        name: "your advisor",
        description:
          "Talk about your advisors experience, focus on how it may relate to your project.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/chantal",
      },
      {
        name: "your advisor",
        description: "Talk about your advisors experience and success.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/sirisena",
      },
    ],

    interested: {
      companyName: "Your-Company-Name",
      discordWebhook:
        "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703",
      emailFounder: "founder@yexample.com",
      backgroundColor: "#f2b823",
      companyLogo: "",
    },
    investmentDetails: (
      <Alert
        message="Guidance:"
        description={
          <Row gutter={[18, 18]}>
            <Col xs={24} sm={24} md={12}>
              <h3>Raising</h3>
              <p style={{ fontSize: "20px" }}>
                Mention how much your trying to raise
              </p>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <h3>Scheme:</h3>
              <p>{"SAFE Investment Scheme"}</p>
              <h3>Target Close</h3>
              <p>{"You target date for closing the pitch"}</p>
            </Col>
          </Row>
        }
        type="warning"
      />
    ),
  },
  {
    pitchId: "123456",
    pitchUrl: "dev-magic-bit",
    metaTags: {
      ogTitle: "Magic Bit- Pitch Deck",
      lastModified: "2023-09-05 11:05:53 UTC",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pitchdeck/in/dev-magic-bit",
      ogDescription:
        "Magicbit provides STEM kits for kids to create 100+ innovative projects in coding, robotics, IoT & electronics with project based learning.",
    },
    paid: false,
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/pitch-deck/magic-bit/backbround-magic-bit-pitch-01.png",
    backgroundMobile:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/pitch-deck/magic-bit/backbround-magic-bit-pitch-01.png",
    overview: {
      companyName: "Magic Bit",
      description:
        "Magicbit provides STEM kits for kids to create 100+ innovative projects in coding, robotics, IoT & electronics with project based learning.",
      socialLinks: [
        {
          type: "website",
          url: "https://magicbit.cc/",
          icon: <HomeOutlined />,
        },
        {
          type: "linkedin",
          url: "https://www.linkedin.com/company/magicbit0/",
          icon: <LinkedinOutlined />,
        },
        {
          type: "instagram",
          url: "https://www.instagram.com/magicbit0",
          icon: <InstagramOutlined />,
        },
        {
          type: "Facebook",
          url: "https://www.facebook.com/magicbit0/",
          icon: <FacebookOutlined />,
        },
      ],
      companyAvatar:
        "https://media.licdn.com/dms/image/C510BAQGdffX7_5TAhQ/company-logo_200_200/0/1569659903356?e=1702512000&v=beta&t=UMo3TPekEgiE5CaJfSZewsWQta0ZHGnPMdEsIsctG6M",
      tags: [
        {
          color: "#f2b823",
          title: "Traction",
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
            {"$500,000"}
          </p>
          <p>
            <strong>{"Next Step: "}</strong>
            {"Raising Funds to expand our global footprint."}
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
    pitchMaterial: {
      mission: `"Let's Make IoT with Magic Bit"`,
      pitchVideoDesktop:
        "https://player.vimeo.com/video/861899903?h=7d2cbbdf68&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      pitchVideoMobie:
        "https://player.vimeo.com/video/861899903?h=7d2cbbdf68&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vTPu9-jZfRLyuAs57tT5UqrThVVMOtjyljTRdPMeR7n6jTkbul1COa-dV_VeW01wg/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vTPu9-jZfRLyuAs57tT5UqrThVVMOtjyljTRdPMeR7n6jTkbul1COa-dV_VeW01wg/embed?start=false&loop=false&delayms=3000",
    },
    additionalInfo: {
      vision: (
        <div>
          <p>To Innovate and Change the World</p>
        </div>
      ),

      problem: (
        <div>
          <p>{`"Average screen time of a student age 8-18 years is over 6-9 hours ”`}</p>
          <ul>
            <li>
              {
                "Addiction to negative side of technology such as mobile phones, computer gaming is concern for parents."
              }
            </li>
            <li>
              {
                "Negative use of technology can cause mental health problems for kids."
              }
            </li>
            <li>
              {
                "Innovation and creativity are two of the most essential future skills to learn to face the challenging world."
              }
            </li>
          </ul>
        </div>
      ),

      solution: (
        <div>
          <p>
            {
              '"“Magicbit Learning Ecosystem- Practical learning through tangible projects.”"'
            }
          </p>
          <ul>
            <li>
              {
                "Directing the tech enthusiasm of children towards innovation and creativity."
              }
            </li>
            <li>
              {
                "Technology Innovation with coding, robotics, IoT ,electronics and AI."
              }
            </li>
            <li>
              {
                "Complete STEM education products with hardware, software and learning content."
              }
            </li>
            <li>
              {"Boost the mental health, innovation & creativity of students."}
            </li>
          </ul>
        </div>
      ),
    },
    founderData: [
      {
        name: "Migara A",
        description:
          "Co-Founder/CEO MAGICBIT | IoT | Innovation | STEM Education",
        linkedin: "https://www.linkedin.com/in/amithodhana/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl:
          "https://media.licdn.com/dms/image/C5603AQE-4YeUdfKoaw/profile-displayphoto-shrink_200_200/0/1635139884336?e=1699488000&v=beta&t=QS8X3Jn_8X2s_ANZvkKRXdZ4tbc0XNFSbbqDMFwhlOg",
      },
      {
        name: "Anuruddha Tennakoon",
        description: "Co-Founder A & T Labs/Magicbits",
        social: "",
        linkedin: "https://www.linkedin.com/in/anuruddha-tennakoon-43393a16/",
        avatarUrl:
          "https://media.licdn.com/dms/image/C5103AQEPmjd8kljesg/profile-displayphoto-shrink_200_200/0/1584774239643?e=1700092800&v=beta&t=XSUcRoeWzN6qup92f0fJCqMvxReK1rRpDLID3EknFXw",
      },
    ],
    advisorData: [
      {
        name: "your advisor",
        description:
          "Talk about your advisors experience, focus on how it may relate to your project.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/chantal",
      },
    ],

    interested: {
      companyName: "Magic Bit",
      discordWebhook:
        "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703",
      emailFounder: "info@magicbit.cc",
      backgroundColor: "#f2b823",
      companyLogo: "",
    },
    investmentDetails: (
      <Row gutter={[18, 18]}>
        <Col xs={24} sm={24} md={12}>
          <h3>Raising</h3>
          <p style={{ fontSize: "40px" }}>{"$500,000/-"}</p>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <h3>Scheme:</h3>
          <p>{"SAFE Investment Scheme"}</p>
          <h3>Target Close</h3>
          <p>{"1st December 2023"}</p>
        </Col>
      </Row>
    ),
  },
  {
    pitchId: "123456",
    pitchUrl: "dev-immersive-smile",
    metaTags: {
      ogTitle: "Immersive Smile - Pitch Deck",
      lastModified: "2023-09-05 11:05:53 UTC",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pd/in/template",
      ogDescription:
        "Discover how Immersive Smile Plus uses virtual reality, haptic feedback, and biofeedback technology to alleviate pain and anxiety during medical procedures, revolutionizing the patient experience and setting new standards in healthcare.",
    },
    paid: false,
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/placeholder-image-1050-390.png",
    overview: {
      companyName: "Immersive Smile",
      description:
        "In order to help people who are experiencing psychological pain and physical pain, we have developed an idea in VR Cyber psychological Therapy by the name “Immersive Smile Plus”. Immersive Smile Plus is an attempt to relieve the pain that people go through at a much much more convenient way. Immersive Smile plus is VR technology-based solution.",
      socialLinks: [
        {
          type: "website",
          url: "https://immersivesmile.com/",
          icon: <HomeOutlined />,
        },
        {
          type: "linkedin",
          url: "https://www.linkedin.com/company/immersivesmile/",
          icon: <LinkedinOutlined />,
        },
        // {
        //   type: "instagram",
        //   url: "https://www.instagram.com/techforgood_lk/",
        //   icon: <InstagramOutlined />,
        // },
        // {
        //   type: "Facebook",
        //   url: "https://www.facebook.com/profile.php?id=100094714128169",
        //   icon: <FacebookOutlined />,
        // },
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
          title: "MedTech",
        },
        {
          color: "salmon",
          title: "Impact",
        },
      ],
      investmentOverviewDescription: (
        <Alert
          message="Guidance:"
          description={
            <div>
              <p>
                <strong>{"Tagert Close:"}</strong>
                {
                  "Mention how much your trying to raise, remember your investor will want a breakdown of your expenditure"
                }
              </p>
              <p>
                <strong>{"Next Step: "}</strong>
                {
                  "You can give an overview of how you plan to utilise the funds"
                }
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Simple_agreement_for_future_equity"
              >
                {"SAFE Investment Scheme"}
              </a>
            </div>
          }
          type="warning"
        />
      ),
    },
    pitchMaterial: {
      mission: (
        <Alert
          message="Guidance:"
          description={`"You Company Tagline Here", keep it concise and description`}
          type="info"
        />
      ),
      pitchVideoDesktop:
        "https://player.vimeo.com/video/862282362?h=20a860e8d3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      pitchVideoMobie:
        "https://player.vimeo.com/video/862282362?h=20a860e8d3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vQLgA6nJ8y_0DgjYcFrI72uYHcGogVaBw4YS6UdFsoJv33Rb1KG16QnJ2q_HPZPEg/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vQLgA6nJ8y_0DgjYcFrI72uYHcGogVaBw4YS6UdFsoJv33Rb1KG16QnJ2q_HPZPEg/embed?start=false&loop=false&delayms=3000",
    },
    additionalInfo: {
      vision: (
        <Alert
          message="Guidance:"
          description={
            <div>
              <p>
                {
                  "Here are a few examples of well-known company vision statements:"
                }
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
          }
          type="info"
        />
      ),

      problem: (
        <Alert
          message="Guidance:"
          description={`A problem statement is a concise description of an issue, challenge, or obstacle that needs to be addressed or solved. It serves as a clear and specific articulation of the problem at hand, making it easier for individuals or organizations to understand, analyze, and ultimately work toward finding a solution.`}
          type="info"
        />
      ),

      solution: (
        <Alert
          message="Guidance:"
          description={
            "A solution statement is a concise and clear description of the proposed solution to a problem or challenge that has been previously identified through a problem statement. It outlines the actions, strategies, or methods that will be implemented to address and resolve the problem effectively."
          }
          type="info"
        />
      ),
    },
    founderData: [
      {
        name: "Jaiyramanan V",
        description:
          "Passionate about VR technology-based solutions and it relates to health care",
        linkedin:
          "https://www.linkedin.com/in/jaiyramanan-vijayaalayan-798412118/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl:
          "https://media.licdn.com/dms/image/D5603AQEHOjyk7jjOxw/profile-displayphoto-shrink_200_200/0/1684827565063?e=1699488000&v=beta&t=nIqqP50Sdt0_Xu-PV4qv5uv5a-GZlohaOXgHKxPCUQQ",
      },
      // {
      //   name: "CTO person",
      //   description: "Talk about yourself and your experience.",
      //   social: "",
      //   linkedin: "https://www.linkedin.com/",
      //   avatarUrl: "https://robohash.org/imran",
      // },
    ],
    advisorData: [
      {
        name: "Professor Prasad Wimalaratne",
        description:
          "Specialized in XR and 3D Mathematics @ University Colombo ",
        linkedin: "https://www.linkedin.com/in/prasad-wimalaratne-8a46b1230/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl:
          "https://media.licdn.com/dms/image/D5603AQEaIsNE0UmCGg/profile-displayphoto-shrink_200_200/0/1665966879655?e=1699488000&v=beta&t=5Bd4P8bPWLjwxDM2t2P1bCJw6cSMIEJxyuHJ3f1b1xA",
      },
      {
        name: "Dr. Kumaradasan Umashankar",
        description: "Urologist,Transplant Surgeon",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/sirisena",
      },
      {
        name: "Achala Weerasooriya",
        description:
          "Building and Leading High-Performance Software Engineering Teams",
        linkedin: "https://www.linkedin.com/in/achalaweerasooriya/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/sirisena",
      },
    ],

    interested: {
      companyName: "Your-Company-Name",
      discordWebhook:
        "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703",
      emailFounder: "support@immersivesmile.com",
      backgroundColor: "#f2b823",
      companyLogo: "",
    },
    investmentDetails: (
      <Alert
        message="Guidance:"
        description={
          <Row gutter={[18, 18]}>
            <Col xs={24} sm={24} md={12}>
              <h3>Raising</h3>
              <p style={{ fontSize: "20px" }}>
                Mention how much your trying to raise
              </p>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <h3>Scheme:</h3>
              <p>{"SAFE Investment Scheme"}</p>
              <h3>Target Close</h3>
              <p>{"You target date for closing the pitch"}</p>
            </Col>
          </Row>
        }
        type="warning"
      />
    ),
  },
  {
    pitchId: "123456",
    pitchUrl: "template",
    metaTags: {
      ogTitle: "template - Pitch Deck",
      lastModified: "2023-09-05 11:05:53 UTC",
      ogImage:
        "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/template/og-imge-pitch-deck.png",
      ogUrl: "https://pd/in/template",
      ogDescription:
        "Template deck provides an outline of how to create your pitch deck. Follow the guidence and examples to get you started",
    },
    paid: false,
    background:
      "https://customer-apps-techhq.s3.eu-west-2.amazonaws.com/app-pitch-deck/placeholder-image-1050-390.png",
    overview: {
      companyName: "Your-Company-Name",
      description: (
        <Alert
          message="Guidance:"
          description="Begin with a brief introduction of your company and its background. Mention when and why the company was founded. Highlight any notable achievements or milestones."
          type="info"
        />
      ),
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
        <Alert
          message="Guidance:"
          description={
            <div>
              <p>
                <strong>{"Tagert Close:"}</strong>
                {
                  "Mention how much your trying to raise, remember your investor will want a breakdown of your expenditure"
                }
              </p>
              <p>
                <strong>{"Next Step: "}</strong>
                {
                  "You can give an overview of how you plan to utilise the funds"
                }
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Simple_agreement_for_future_equity"
              >
                {"SAFE Investment Scheme"}
              </a>
            </div>
          }
          type="warning"
        />
      ),
    },
    pitchMaterial: {
      mission: (
        <Alert
          message="Guidance:"
          description={`"You Company Tagline Here", keep it concise and description`}
          type="info"
        />
      ),
      pitchVideoDesktop: "https://player.vimeo.com/video/87110435?h=f253e737bd",
      pitchVideoMobie: "https://player.vimeo.com/video/829691380?h=fc6c6c52d9",
      pitchSlidesDesktop:
        "https://docs.google.com/presentation/d/e/2PACX-1vQYZrL8VPm-J9I2Naru4_vm1uLc_TfV2-F1SLVQjoR1AuHnFHgo-V71aGymH4P4l7eL_b4eqdlIzTMb/embed?start=false&loop=false&delayms=3000",
      pitchSlidesMobile:
        "https://docs.google.com/presentation/d/e/2PACX-1vQczXbfp6UXW7WJo5m20PvlyWaUwrzivV92HIASDp58nilmL4c7_7AzRgrcTc-P533WRlTEyHfS3wen/embed?start=false&loop=false&delayms=3000",
    },
    additionalInfo: {
      vision: (
        <Alert
          message="Guidance:"
          description={
            <div>
              <p>
                {
                  "Here are a few examples of well-known company vision statements:"
                }
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
          }
          type="info"
        />
      ),

      problem: (
        <Alert
          message="Guidance:"
          description={`A problem statement is a concise description of an issue, challenge, or obstacle that needs to be addressed or solved. It serves as a clear and specific articulation of the problem at hand, making it easier for individuals or organizations to understand, analyze, and ultimately work toward finding a solution.`}
          type="info"
        />
      ),

      solution: (
        <Alert
          message="Guidance:"
          description={
            "A solution statement is a concise and clear description of the proposed solution to a problem or challenge that has been previously identified through a problem statement. It outlines the actions, strategies, or methods that will be implemented to address and resolve the problem effectively."
          }
          type="info"
        />
      ),
    },
    founderData: [
      {
        name: "your name",
        description: "Talk about yourself and your experience.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/viji",
      },
      {
        name: "CTO person",
        description: "Talk about yourself and your experience.",
        social: "",
        linkedin: "https://www.linkedin.com/",
        avatarUrl: "https://robohash.org/imran",
      },
    ],
    advisorData: [
      {
        name: "your advisor",
        description:
          "Talk about your advisors experience, focus on how it may relate to your project.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/chantal",
      },
      {
        name: "your advisor",
        description: "Talk about your advisors experience and success.",
        linkedin: "https://www.linkedin.com/",
        facebook: false,
        twitter: "",
        social: "",
        avatarUrl: "https://robohash.org/sirisena",
      },
    ],

    interested: {
      companyName: "Your-Company-Name",
      discordWebhook:
        "https://discord.com/api/webhooks/1145414256167231629/RHTjlzabsk465D0gOk7PEbKy0c0DvCe9pPo-3fgrZ4KXIngREGIfcIWK34uwmi66Y703",
      emailFounder: "founder@yexample.com",
      backgroundColor: "#f2b823",
      companyLogo: "",
    },
    investmentDetails: (
      <Alert
        message="Guidance:"
        description={
          <Row gutter={[18, 18]}>
            <Col xs={24} sm={24} md={12}>
              <h3>Raising</h3>
              <p style={{ fontSize: "20px" }}>
                Mention how much your trying to raise
              </p>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <h3>Scheme:</h3>
              <p>{"SAFE Investment Scheme"}</p>
              <h3>Target Close</h3>
              <p>{"You target date for closing the pitch"}</p>
            </Col>
          </Row>
        }
        type="warning"
      />
    ),
  },
];
