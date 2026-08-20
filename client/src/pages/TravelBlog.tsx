import FeatureUnavailable from "@/components/FeatureUnavailable";

const TravelBlog = () => (
  <FeatureUnavailable
    title="Travel blog unavailable"
    description="A production travel publication requires authenticated authorship, editorial workflow, source and rights review, moderation, disclosure, content storage, revision history, search, privacy controls, and reliable publication state. No story, author, destination fact, readership, or publishing result is created here."
    capability="Travel stories, editorial publishing, and destination content"
    nextStep="Connect governed content storage, identity, editorial review, moderation, rights, search, and publication services before enabling travel blogging"
  />
);

export default TravelBlog;
