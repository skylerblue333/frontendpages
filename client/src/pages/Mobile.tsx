import FeatureUnavailable from "@/components/FeatureUnavailable";

const Mobile = () => (
  <FeatureUnavailable
    title="Mobile application unavailable"
    description="The prior page claimed iOS and Android availability, app-store distribution, instant crypto trading, real-time prices, AI trading signals, portfolio alerts, offline transactions, biometric security, screenshots, and device specifications. No signed mobile artifact, store listing, wallet/trading integration, notification service, or native security evidence is connected."
    capability="Native iOS/Android application, trading, portfolio, notifications, and biometric access"
    nextStep="Publish mobile availability only after signed artifacts, store approvals, backend integration, security review, and release evidence are verified"
  />
);

export default Mobile;
