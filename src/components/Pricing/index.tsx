"use client";
import {useState} from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
            <div className="container">
                <SectionTitle
                    title="Solutions Tailored for Your Business"
                    paragraph="We offer a range of solutions designed to help businesses thrive in the digital world. Choose the right package for your needs:"
                    center
                    width="665px"
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    <PricingBox
                        duration=""
                        packageName="Lite"
                        price={isMonthly ? "Startup" : ""}
                        subtitle="The perfect solution for launching your business with a professional website, SEO, and social media."
                    >
                        <OfferList text="All UI Components" status="active"/>
                        <OfferList text="Use with Unlimited Projects" status="active"/>
                        <OfferList text="Commercial Use" status="active"/>
                        <OfferList text="Email Support" status="active"/>
                        <OfferList text="Lifetime Access and update" status="inactive"/>
                        <OfferList text="Social Media Integration" status="inactive"/>
                    </PricingBox>
                    <PricingBox
                        duration=""
                        packageName="Basic"
                        price={isMonthly ? "Growth" : ""}
                        subtitle="Optimize and scale your business through analytics, content marketing, and conversions."
                    >
                        <OfferList text="Advanced Analytics Integration" status="active"/>
                        <OfferList text="Content Marketing Tools" status="active"/>
                        <OfferList text="Conversion Optimization Features" status="active"/>
                        <OfferList text="Email & Priority Support" status="active"/>
                        <OfferList text="Advanced SEO Tools" status="active"/>
                        <OfferList text="Customizable Templates" status="active"/>
                        <OfferList text="A/B Testing & Performance Tracking" status="active"/>
                        <OfferList text="Social Media Integration" status="active"/>
                        <OfferList text="Social Media Automation" status="inactive"/>
                    </PricingBox>
                    <PricingBox
                        duration=""
                        packageName="Pro"
                        price={isMonthly ? "Enterprise" : ""}
                        subtitle="A full digital transformation package with custom development, AI-driven analytics, and security."
                    >
                        <OfferList text="Custom Development" status="active"/>
                        <OfferList text="AI-driven Analytics" status="active"/>
                        <OfferList text="Enhanced Security Features" status="active"/>
                        <OfferList text="24/7 Dedicated Support" status="active"/>
                        <OfferList text="Scalability for Large Teams" status="active"/>
                        <OfferList text="Compliance and Data Protection" status="active"/>
                        <OfferList text="Cloud Infrastructure Management" status="active"/>
                        <OfferList text="Advanced API Integrations" status="active"/>
                        <OfferList text="Social Media Automation" status="active"/>
                        <OfferList text="Performance Optimization" status="active"/>
                        <OfferList text="Priority Feature Development" status="active"/>
                    </PricingBox>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 z-[-1]">
                <svg
                    width="239"
                    height="601"
                    viewBox="0 0 239 601"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        opacity="0.3"
                        x="-184.451"
                        y="600.973"
                        width="196"
                        height="541.607"
                        rx="2"
                        transform="rotate(-128.7 -184.451 600.973)"
                        fill="url(#paint0_linear_93:235)"
                    />
                    <rect
                        opacity="0.3"
                        x="-188.201"
                        y="385.272"
                        width="59.7544"
                        height="541.607"
                        rx="2"
                        transform="rotate(-128.7 -188.201 385.272)"
                        fill="url(#paint1_linear_93:235)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_93:235"
                            x1="-90.1184"
                            y1="420.414"
                            x2="-90.1184"
                            y2="1131.65"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7"/>
                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_93:235"
                            x1="-159.441"
                            y1="204.714"
                            x2="-159.441"
                            y2="915.952"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7"/>
                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Pricing;
