import FeatureUnavailable from "@/components/FeatureUnavailable";

const TripPlanner = () => (
  <FeatureUnavailable
    title="Trip planner unavailable"
    description="A production trip planner requires verified destinations, schedules, inventory, pricing, availability, user preferences, booking-provider integrations, cancellation rules, payment controls, and durable itinerary state. No destination, itinerary, price, booking, reservation, or completion result is generated here."
    capability="Travel discovery, itinerary planning, and booking coordination"
    nextStep="Connect governed travel inventory, provider integrations, pricing, identity, payment, and reservation services before enabling trip planning"
  />
);

export default TripPlanner;
