import FeatureUnavailable from "@/components/FeatureUnavailable";

const VirtualTour = () => (
  <FeatureUnavailable
    title="Virtual tours unavailable"
    description="A production virtual-tour experience requires verified property or destination records, licensed media, spatial assets, secure delivery, accessibility support, privacy controls, and accurate location or availability metadata. No property, tour, asset, listing, booking, or navigation result is created here."
    capability="Immersive virtual tours and spatial media"
    nextStep="Connect governed property or destination data, licensed media storage, spatial delivery, identity, and privacy controls before enabling tours"
  />
);

export default VirtualTour;
