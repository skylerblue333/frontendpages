import FeatureUnavailable from "@/components/FeatureUnavailable";

const WatchList = () => (
  <FeatureUnavailable
    title="Watch list unavailable"
    description="A production watch list requires a verified media catalog, authenticated ownership, durable list storage, availability and licensing metadata, search, privacy controls, and notification rules. No title, availability, rating, watch state, alert, or personal list entry is created here."
    capability="Media discovery, watch lists, and availability tracking"
    nextStep="Connect governed catalog, identity, list storage, licensing, search, and notification services before enabling watch lists"
  />
);

export default WatchList;
