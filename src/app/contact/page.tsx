import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have a project in mind or need expert advice on web development, SEO, or digital marketing? We’re here to help! Reach out to us, and let’s discuss how we can bring your ideas to life. Fill out the form, send us an email, or give us a call—we’d love to hear from you!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
