import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { LocationsSection } from "@/components/contact/LocationsSection";
import { FeaturesList } from "@/components/contact/FeaturesList";
import { CTASection } from "@/components/about/CTASection";

const Contact = () => {
  return (
    <main className="pt-24">
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <LocationsSection />
      <FeaturesList />
      <CTASection />
    </main>
  );
};

export default Contact;