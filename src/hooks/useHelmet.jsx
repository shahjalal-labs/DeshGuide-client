/* import { Helmet } from "react-helmet-async";

const UseHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || DeshGuide</title>
    </Helmet>
  );
};

export default UseHelmet; */

//-- updated for seo
import { Helmet } from "react-helmet-async";

const UseHelmet = ({
  title = "DeshGuide - Explore Bangladesh Like Never Before",
  description = "Discover and book amazing travel packages across Bangladesh. Connect with verified tour guides, read real stories, and plan your next adventure easily.",
  canonical = "https://deshguide.surge.sh",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph (OG) Tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="DeshGuide" />

      {/* Optional: Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default UseHelmet;
