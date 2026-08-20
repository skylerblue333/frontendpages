import FeatureUnavailable from "@/components/FeatureUnavailable";

const Events = () => (
  <FeatureUnavailable
    title="Events service unavailable"
    description="The displayed event calendar, dates, hosts, attendance, featured status, RSVPs, token launches, prize pools, staking bonuses, creator earnings, livestreams, and community outcomes are not verified records. No event, registration, payment, wallet, or notification mutation is performed here."
    capability="Published events, attendance, RSVPs, livestreams, and event commerce"
    nextStep="Connect an authenticated event service with moderation, registration, payment, and notification evidence"
  />
);

export default Events;
