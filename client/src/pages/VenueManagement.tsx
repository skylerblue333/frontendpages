import FeatureUnavailable from "@/components/FeatureUnavailable";

const VenueManagement = () => (
  <FeatureUnavailable
    title="Venue management unavailable"
    description="Venue management requires verified location ownership, availability and capacity records, booking rules, pricing, payment handling, cancellation policy, safety requirements, and durable audit trails. No venue, reservation, availability, payment, or event outcome is created here."
    capability="Venues, availability, reservations, and event operations"
    nextStep="Connect governed venue and booking services with payment, safety, cancellation, and audit controls before enabling reservations"
  />
);

export default VenueManagement;
