import HashtagSearch from "@/pages/HashtagSearch";

/**
 * The Hashtags route intentionally shares the validated, local-only topic
 * discovery boundary until a governed taxonomy and index contract exists.
 * Hashtag index is unavailable; the route is a readiness workspace only.
 */
export default function Hashtags() {
  return <HashtagSearch />;
}
