import FeatureUnavailable from "@/components/FeatureUnavailable";

const TelegramIntegration = () => (
  <FeatureUnavailable
    title="Telegram integration unavailable"
    description="A safe Telegram integration requires approved bot ownership and token handling, webhook or polling verification, chat and user authorization, scope and privacy controls, message and notification contracts, rate limits, retries, redaction, audit history, and delivery monitoring. No bot, chat, message, notification, connection, or synchronization success is shown or claimed here."
    capability="Verified Telegram authorization and message delivery"
    nextStep="Connect the approved Telegram bot and event services, secret rotation, privacy controls, and delivery tests before enabling the integration"
  />
);

export default TelegramIntegration;
