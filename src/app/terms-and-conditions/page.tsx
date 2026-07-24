import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | AL Raheem Engineering",
  description: "Terms and conditions for AL Raheem Engineering website and machine inquiries.",
};

export default function TermsPage() {
  return (
    <PolicyPage
      label="Policy"
      title="Terms & Conditions"
      description="These terms outline general use of the website, machine inquiry process, and commercial discussions with AL Raheem Engineering."
    >
      <div className="space-y-8 text-sm leading-7 text-dark-gray">
        {[
          ["Website Information", "Product specifications, descriptions, and technical details are provided for general guidance and may be refined during quotation."],
          ["Quotations", "Final pricing, production timeline, and delivery terms are confirmed in written quotation or direct communication."],
          ["Machine Customization", "Customized requirements may affect specifications, delivery schedule, and payment milestones."],
          ["Support", "Installation, training, spare parts, and after-sales support are handled according to the agreed machine scope."],
        ].map(([title, text]) => (
          <div key={title}>
            <h2 className="font-heading text-xl font-semibold text-primary">{title}</h2>
            <p className="mt-3">{text}</p>
          </div>
        ))}
      </div>
    </PolicyPage>
  );
}
