import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
    return (
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                        <div
                            className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                            data-wow-delay=".15s"
                        >
                            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                                Contact Ostapets Web Services Ltd.
                            </h2>
                            <p className="mb-12 text-base font-medium text-body-color">
                                Our support team will get back to you ASAP via email.
                                Get in Touch with Ostapets Web Services Ltd.
                            </p>
                            <p className="mb-12 text-base font-medium text-body-color">
                                Have questions or need assistance with web development, digital marketing, or SEO? We’re
                                here to help! Reach out to us, and let’s discuss how we can elevate your online
                                presence.
                            </p>
                            <ul className="mb-12 text-base font-medium">
                                <li className="mb-5 text-base font-medium text-black dark:text-white ">
                                    📍 Address: [Your Address Here]
                                </li>
                                <li className="mb-5 text-base font-medium text-black dark:text-white ">
                                    ✉️ Email: <a href="mailto:mail@mail.com">mail@mail.com</a>
                                </li>
                            </ul>
                            <p className="mb-12 text-base font-medium text-body-color">
                                We look forward to working with you and bringing your ideas to life.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                        <NewsLatterBox/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
