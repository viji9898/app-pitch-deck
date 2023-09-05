import Helmet from "react-helmet";

export const DynamicMetaTags = ({ metaTags }) => {
  console.log(metaTags);

  const { ogTitle, ogImage, ogUrl, ogDescription } = metaTags;
  return (
    <Helmet>
      <title>{ogTitle}</title>
      <meta name="title" content={ogTitle} />
      <meta name="author" content="@viji.com"></meta>
      <meta name="description" content={ogDescription} />
      {/* Facebook & Linkedin Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${ogUrl}`} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={`${ogUrl}`} />
      <link rel={"shortcut icon"} href={ogImage} />
      {/* Twitter Meta Tags  */}
      <meta property="twitter:url" content={`${ogUrl}`} />
      <meta property="twitter:title" content={ogTitle} />
      <meta property="twitter:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
    </Helmet>
  );
};
