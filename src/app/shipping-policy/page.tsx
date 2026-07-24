import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Shipping Policy | AL Raheem Engineering",
  description: "Shipping and delivery policy for AL Raheem Engineering machinery orders.",
};

export default function ShippingPolicyPage() {
  return (
    <PolicyPage
      label="Policy"
      title="Shipping Policy"
      description="Machine dispatch and delivery arrangements are confirmed according to the order scope, destination, and agreed production timeline."
    >
      <div className="space-y-8 text-sm leading-7 text-dark-gray">
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Delivery Coordination</h2>
          <p className="mt-3">Delivery method, transport responsibility, packing requirements, and receiving arrangements are confirmed before dispatch.</p>
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Dispatch Readiness</h2>
          <p className="mt-3">Machines are prepared for dispatch after final inspection, payment clearance, and customer coordination.</p>
        </div>
      </div>
    </PolicyPage>
  );
}
