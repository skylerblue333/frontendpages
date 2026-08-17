# SKYCOIN4444 Page Quality Rubric

A page is not fixed merely because it avoids a crash or displays an authentication-required card. Those are fallback states. A page reaches the new baseline only when its available frontend state is useful, visually coherent, interactive, and honest about what is real.

## Gaming Hub quality baseline

Every page should match or exceed the following qualities where relevant:

| Quality area | Required evidence |
|---|---|
| Visual hierarchy | A purposeful hero or header, clear primary action, section rhythm, readable density, meaningful color system, and responsive composition. |
| Product depth | More than a title and cards: meaningful filters, tabs, detail views, setup, workflows, comparison, history, progress, guidance, or extension points appropriate to the page domain. |
| Interaction | Important controls work in the available state, have disabled/loading/submitting/success/error behavior, and provide retry or next-step guidance. |
| State coverage | The route has intentional loading, ready or preview, empty, error, unavailable, authentication-required, and permission-denied states where applicable. |
| Honesty | Real data, demo data, practice data, estimated values, unavailable integrations, and planned capabilities are visibly distinguished. Unsupported claims are relabeled, not hidden feature areas. |
| Accessibility | Semantic headings, labeled inputs, keyboard navigation, visible focus, status announcements, contrast, reduced motion, and non-color-only meaning. |
| Responsive behavior | Mobile, tablet, and desktop layouts are usable. Dense content has intentional scrolling, wrapping, or progressive disclosure. |
| Safety | Financial, AI, privacy, security, social, and high-risk actions disclose prerequisites and remain disabled until their real contracts are proven. |
| Proof | Browser review demonstrates the useful available state, not only the fallback. A screenshot must show the page’s product experience, while a second capture may show auth or unavailable behavior. |

## State labels

`VERIFIED` means real service-backed behavior was tested. `PREVIEW` means a rich local or demo state is intentionally available for UX review and is clearly labeled. `PARTIAL` means the page meets the frontend quality baseline but one or more integrations remain unverified. `AUTH-BLOCKED` means the useful private state could not be reviewed because the environment lacks authentication; it is not a completed page by itself. `CONTRACT-BLOCKED` means a required route or backend contract does not exist. `NOT COMPLETE` must be used when the page only renders a blank, generic, or fallback state.

## Screenshot rule

A finished page must have at least one screenshot of its useful available or preview state, plus an authentication or unavailable-state screenshot when that boundary is material. Blank or fallback screenshots are evidence of the fallback only and cannot be used as the completion screenshot.

## Expansion rule

Modernization adds depth. It does not remove meaningful existing modes, tabs, controls, settings, history, or product-area navigation. Unsupported claims are narrowed to what the code can prove, while the underlying capability remains visible as preview, planned, or integration-required.
