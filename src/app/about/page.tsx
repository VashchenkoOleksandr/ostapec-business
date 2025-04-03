import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="We are a team of passionate digital experts dedicated to helping businesses thrive in the online world. From marketing strategies to website and app development, our mission is to provide cutting-edge digital solutions that empower brands and drive success.
         With years of experience in web development, SEO, and online marketing, we understand the challenges businesses face in today’s competitive landscape. That’s why we offer a full spectrum of services designed to elevate your brand, enhance user experience, and maximize conversions."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
