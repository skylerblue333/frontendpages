# Batch 180 Visual Findings

The representative `/` desktop capture renders the public Home route with strong hierarchy, gradient typography, launch-posture card, and responsive-ready feature cards. Existing truthful language remains visible, including provider-dependent financial data and evidence-required production infrastructure.

The first `/` mobile capture was a genuine visual regression: the visual-polish marker had been attached to Home’s decorative absolute overlay, and the mobile rule applied `min-height: 100dvh` to that overlay, pushing the real content below the viewport. The marker was moved to the actual root `<main>` element and the overlay was restored to its decorative-only role.

After the fix, the corrected 390px capture renders the Home header, truthful-status badge, headline, descriptive copy, actions, and launch-posture card cleanly. Batch 180’s original 20-route capture logs had 20 desktop and 20 mobile exit-code-zero captures; the corrected Home recapture also passed at both viewports. The batch is not considered verified until the corrected Home evidence replaces the failed first mobile artifact in the committed evidence set.
