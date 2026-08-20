import FeatureUnavailable from "@/components/FeatureUnavailable";

const ForecastingEngine = () => (
  <FeatureUnavailable
    title="Forecasting engine unavailable"
    description="Sales forecasts require an authenticated business dataset, source provenance, model evaluation, uncertainty bounds, privacy controls, review ownership, and monitored deployment. No forecast, prediction, revenue outcome, or decision recommendation is generated here."
    capability="Sales forecasting and predictive decision support"
    nextStep="Connect governed data and an evaluated forecasting service before enabling predictions"
  />
);

export default ForecastingEngine;
