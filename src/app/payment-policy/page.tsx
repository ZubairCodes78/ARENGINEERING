import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { PAYMENT_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Payment Policy | AL RAHEEM ENGINEERING",
  description: "Standard industrial payment terms and milestones for AL Raheem Engineering machine orders.",
  alternates: {
    canonical: "/payment-policy",
  },
};

export default function PaymentPolicyPage() {
  return (
    <PolicyPage
      label="Policy"
      title="Payment Policy"
      description="Machine orders follow a staged payment structure to confirm production, support manufacturing, and complete delivery."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {PAYMENT_STEPS.map((step) => (
          <div key={`${step.value}-${step.title}`} className="rounded-lg border border-border bg-light-gray p-6">
            <p className="font-heading text-4xl font-semibold text-secondary">{step.value}</p>
            <h2 className="mt-5 font-heading text-xl font-semibold text-primary">{step.title}</h2>
            <p className="mt-3 text-sm leading-7 text-dark-gray">{step.description}</p>
          </div>
        ))}
      </div>
    </PolicyPage>
  );
}
