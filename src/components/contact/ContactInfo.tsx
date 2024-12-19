import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="container-padding py-12 bg-muted/30">
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center p-6">
          <Mail className="h-8 w-8 mb-4 text-primary" />
          <h3 className="heading-3 mb-2">Email</h3>
          <p className="body-text">hello@brandstudio.com</p>
        </div>
        <div className="flex flex-col items-center text-center p-6">
          <Phone className="h-8 w-8 mb-4 text-primary" />
          <h3 className="heading-3 mb-2">Phone</h3>
          <p className="body-text">+1 (555) 123-4567</p>
        </div>
        <div className="flex flex-col items-center text-center p-6">
          <MapPin className="h-8 w-8 mb-4 text-primary" />
          <h3 className="heading-3 mb-2">Address</h3>
          <p className="body-text">123 Design Street<br />Creative City, ST 12345</p>
        </div>
      </div>
    </section>
  );
}