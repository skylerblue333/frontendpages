const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'client/src/pages');
const targets = {
  'Trading.tsx': ['Trading terminal', 'Live market prices, portfolio values, trading orders, and bot execution are intentionally held at a truthful release boundary until verified market-data, wallet, order, authorization, persistence, and monitoring providers are connected.', 'Crypto trading, market data, and automated strategies'],
  'Economics.tsx': ['Economic intelligence', 'Economic indicators and financial projections are intentionally held at a truthful release boundary until verified data providers, period definitions, calculation methodology, and monitoring are accepted.', 'Economic and financial intelligence'],
  'BridgeProtocol.tsx': ['Bridge protocol', 'Cross-chain bridge operations are intentionally held at a truthful release boundary until verified networks, address validation, transaction signing, replay protection, status tracking, and rollback evidence are available.', 'Cross-chain transfers and bridge transactions'],
  'DAOGovernance.tsx': ['DAO governance', 'Governance proposals, voting power, and execution are intentionally held at a truthful release boundary until verified identity, proposal persistence, vote authorization, quorum rules, and execution monitoring are available.', 'Decentralized governance and proposal execution'],
  'OptionsTrading.tsx': ['Options trading', 'Options pricing, positions, and order execution are intentionally held at a truthful release boundary until verified market data, suitability controls, custody, authorization, and settlement evidence are available.', 'Options pricing and trading'],
  'OracleNetwork.tsx': ['Oracle network', 'Oracle feeds are intentionally held at a truthful release boundary until verified source provenance, freshness, quorum, signing, persistence, and monitoring evidence are available.', 'External oracle data feeds'],
  'PerpetualFutures.tsx': ['Perpetual futures', 'Perpetual futures prices, leverage, margin, and liquidation states are intentionally held at a truthful release boundary until verified market, risk, custody, and settlement providers are available.', 'Leveraged perpetual-futures trading'],
  'Synthetics.tsx': ['Synthetic assets', 'Synthetic asset prices, collateral, and settlement are intentionally held at a truthful release boundary until verified oracle, collateral, authorization, and settlement evidence are available.', 'Synthetic-asset issuance and settlement'],
  'PrivacyMixer.tsx': ['Privacy mixer', 'Privacy-preserving asset movement is intentionally held at a truthful release boundary until verified legal, network, authorization, cryptographic, and monitoring controls are accepted.', 'Privacy-preserving asset transfers'],
  'ZeroKnowledgeProof.tsx': ['Zero-knowledge proofs', 'Proof generation and verification are intentionally held at a truthful release boundary until verified cryptographic implementations, key handling, verification results, and monitoring evidence are available.', 'Zero-knowledge proof generation and verification'],
};
for (const [file, [title, description, capability]] of Object.entries(targets)) {
  const component = file.replace(/\.tsx$/, '');
  const content = `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ${component} = () => (\n  <FeatureUnavailable\n    title="${title}"\n    description="${description}"\n    capability="${capability}"\n    nextStep="Return to the launch hub"\n  />\n);\n\nexport default ${component};\n`;
  fs.writeFileSync(path.join(pagesDir, file), content);
}
console.log(JSON.stringify({ changed: Object.keys(targets) }, null, 2));
