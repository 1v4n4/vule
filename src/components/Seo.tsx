import { Helmet } from "react-helmet";
import type { FC } from "react";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  jsonLD?: Record<string, unknown>;
}

const defaultJSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vuksan Vuksanović",
  url: "https://terapija.me",
  image: "https://terapija.me/assets/logo.png",
  jobTitle: "Hipnoterapeut, Bioenergetičar, Sertifikovani rrener",
  sameAs: [
    "https://www.instagram.com/hipnoterapeut.vuksanovic",
    "https://www.linkedin.com/in/vuksan-vuksanovic/",
  ],
  description:
    "Profesionalni tretmani hipnoterapije, regresoterapije i bioenergije u Crnoj Gori. Kursevi, edukacije i individualni tretmani.",
};

const Seo: FC<SeoProps> = ({ title, description, keywords, url, jsonLD }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url || "https://terapija.me"} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://terapija.me"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLD || defaultJSONLD)}
      </script>
    </Helmet>
  );
};

export default Seo;
