import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Refund Policy | AL Raheem Engineering",
  description: "Refund policy for custom industrial machinery orders from AL Raheem Engineering.",
};

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      label="Policy"
      title="Refund Policy"
      description="Industrial machinery orders are usually custom-configured. Refund terms depend on order stage, procurement, manufacturing progress, and written agreement."
    >
      <div className="space-y-8 text-sm leading-7 text-dark-gray">
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Custom Manufacturing</h2>
          <p className="mt-3">Because machines may be built or configured for specific customer requirements, refund eligibility is reviewed according to production progress.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Order Review</h2>
          <p className="mt-3">Any cancellation or refund request should be submitted directly for review before further production or dispatch activity continues.</p>
        </div>
      </div>
    </PolicyPage>
  );
}
