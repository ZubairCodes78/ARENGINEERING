import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | AL RAHEEM ENGINEERING",
  description: "Privacy policy for AL Raheem Engineering inquiries, customer data, and website contact information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      label="Policy"
      title="Privacy Policy"
      description="We collect only the information needed to respond to machine inquiries, quotations, service requests, and customer communication."
    >
      <div className="space-y-8 text-sm leading-7 text-dark-gray">
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Information We Collect</h2>
          <p className="mt-3">Name, phone number, email address, company information, product requirements, and inquiry messages may be collected when you contact us.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">How Information Is Used</h2>
          <p className="mt-3">Information is used to respond to inquiries, prepare quotations, coordinate machine discussions, and provide after-sales support.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Contact</h2>
          <p className="mt-3">For privacy questions, contact {COMPANY.email} or call {COMPANY.phone}.</p>
        </div>
      </div>
    </PolicyPage>
  );
}
