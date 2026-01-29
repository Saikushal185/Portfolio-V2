import { ContactSection } from "./ContactSection";
import { Helmet } from "react-helmet-async";
import { useFavicon } from "../../hooks/useFavicon";

const ContactPage = () => {
    useFavicon('contact');

    return (
        <>
            <Helmet>
                <title>Contact | Sai Kushal</title>
                <meta name="description" content="Get in touch with Sai Kushal Vittanala. Connect via email, phone, or social media for collaboration, inquiries, or opportunities." />
            </Helmet>
            <div className="w-full min-h-full">
                <ContactSection />
            </div>
        </>
    );
};

export default ContactPage;
